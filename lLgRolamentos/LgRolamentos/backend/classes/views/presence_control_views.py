from django.http import JsonResponse
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
from backend.utils import casting
from backend.classes.model.presence_control import PresenceControl, PresenceControlForm
import datetime
from django.shortcuts import get_object_or_404


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
                                'is_present_morning': r.is_present_morning,
                                'is_present_afternoon': r.is_present_afternoon,
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
