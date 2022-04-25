from django.http import JsonResponse
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
from backend.utils import casting
from backend.classes.model.presence_control import PresenceControl
import datetime
from django.shortcuts import get_object_or_404


class PresenceControlViews:
    @staticmethod
    def presence_control(request, employee_id=None, start_date=None, end_date=None):
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

        elif request.method == 'POST':  # everyday set presence as true for new dates for all employees
            employee = get_object_or_404(Employee, id=request.POST.get('employee'), is_active=True)
            manager = get_object_or_404(Manager, id=request.POST.get('manager'), is_active=True)
            presence_control = get_object_or_404(PresenceControl, employee=employee, date=request.POST.get('date'))

            presence_control.manager = manager
            presence_control.is_present_morning = casting.cast_to_bool(request.POST.get('is_present_morning'))
            presence_control.is_present_afternoon = casting.cast_to_bool(request.POST.get('is_present_afternoon'))
            presence_control.note = request.POST.get('note')

            try:
                presence_control.save()
            except Exception as e:
                msg = 'Error: ' + str(e)
                status = 400
            else:
                msg = 'Successfully edited!'
                status = 200

            return JsonResponse({'msg': msg, 'status': status})
