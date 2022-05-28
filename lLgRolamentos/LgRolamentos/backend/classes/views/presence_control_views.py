from django.http import JsonResponse, HttpResponse
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
from backend.utils import casting
from backend.classes.model.presence_control import PresenceControl, PresenceControlForm
import datetime
import time
from django.shortcuts import get_object_or_404
from backend.classes.views import manager_views


class PresenceControlViews:
    @staticmethod
    def get_presence_control(request, employee_id=None, start_date=None, end_date=None):
        if request.method == 'GET':
            employee = get_object_or_404(Employee, id=employee_id)
            start_date = casting.strtime_to_datetime(start_date)
            end_date = casting.strtime_to_datetime(end_date)

            if isinstance(start_date, datetime.datetime) and isinstance(end_date, datetime.datetime):
                if end_date >= start_date:
                    result = PresenceControl.objects.filter(
                        employee=employee,
                        date__range=[start_date, end_date]
                    ).order_by('date')

                    if result:
                        response = dict()

                        for r in result:
                            response[str(r.date)] = {
                                'presence_morning': r.presence_morning,
                                'presence_afternoon': r.presence_afternoon,
                                'payment': r.payment,
                                'manager': r.manager.name if r.manager is not None else None,
                                'note': r.note
                            }
                        else:
                            return JsonResponse(
                                {
                                    'status': 200,
                                    'msg': 'Success',
                                    'total_found': len(result),
                                    'employee': employee.json_object(),
                                    'response': response
                                }
                            )
                    else:
                        return JsonResponse(
                            {
                                'status': 400,
                                'msg': 'no result was found'
                            }
                        )
                else:
                    return JsonResponse(
                        {
                            'status': 400,
                            'msg': 'start_date cannot be greater than end_date'
                        }
                    )
            else:
                return JsonResponse(
                    {
                        'status': 400,
                        'msg': 'invalid date format'
                    }
                )

    @staticmethod
    def post_presence_control(request, id):
        if request.method == 'POST':  # everyday set presence as true for new dates for all employees
            presence_control = get_object_or_404(PresenceControl, id=id)
            presence_control_form = PresenceControlForm(request.POST or None, instance=presence_control)

            if presence_control_form.is_valid():
                presence_control_form.save()
                return JsonResponse({'status': 200, 'msg': 'ok'})
            return JsonResponse({'status': 400, 'msg': 'error: not_ok'})

    @staticmethod
    def set_new_presence_control():
        employees = Employee.objects.filter(is_active=True)
        today = datetime.datetime.now().strftime('%Y-%m-%d')

        for employee in employees:
            if not PresenceControl.objects.filter(employee=employee, date=today):
                new_presence_control = PresenceControl(
                    date=today,
                    presence_morning=True,
                    presence_afternoon=True,
                    note='',
                    employee=employee,
                    manager=None,
                    payment=True
                )

                try:
                    new_presence_control.save()
                except Exception as e:
                    raise Exception(f'Error: {e}')

        return JsonResponse({'ok': 'ok'})

    @staticmethod
    def watch_new_presence_control():
        available_weekdays = ['1', '2', '3', '4', '5', '6']  # mon - sat

        while True:
            actual_time = datetime.datetime.now()
            if actual_time.strftime('%w') in available_weekdays:
                actual_time = datetime.datetime.now()
                actual_time_str = actual_time.strftime('%Y-%m-%d')
                start_time = datetime.datetime.strptime(actual_time_str + ' 08:00:00', '%Y-%m-%d %H:%M:%S')
                end_time = datetime.datetime.strptime(actual_time_str + ' 11:00:00', '%Y-%m-%d %H:%M:%S')

                if actual_time > start_time <= actual_time <= end_time:
                    PresenceControlViews.set_new_presence_control()

                    if actual_time > start_time:
                        wait_time = (
                                datetime.timedelta(seconds=24 * 60 * 60) - (start_time - actual_time)
                        ).seconds / 60 / 60
                    elif actual_time < start_time:
                        wait_time = (
                            datetime.timedelta(seconds=24 * 60 * 60) - (actual_time - start_time)
                        ).seconds / 60 / 60
                    else:
                        wait_time = 24
                else:
                    wait_time = 1
            else:
                wait_time = 24

            time.sleep(wait_time * 60 * 60)
