from django.http import JsonResponse
from backend.classes.model.employee import Employee
from backend.utils import casting
from backend.classes.model.presence_control import PresenceControl
import datetime


class PresenceControlDAO:
    @staticmethod
    def presence_control(request, employee_id=None, start_date=None, end_date=None):
        if request.method == 'GET':
            start_date = casting.strtime_to_datetime(start_date)
            end_date = casting.strtime_to_datetime(end_date)
            employee = Employee(id=employee_id)
            valid_employee = Employee.objects.filter(id=employee_id)

            if valid_employee:
                if isinstance(start_date, datetime.datetime) and isinstance(end_date, datetime.datetime):
                    if end_date >= start_date:
                        result = PresenceControl.objects.filter(employee=employee, date__range=[start_date, end_date]).order_by('date')
                        if result:
                            employee = Employee.objects.get(id=employee_id)
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
                                        'msg': f'{Employee.objects.get(id=employee_id).name} > {start_date} > {end_date}',
                                        'total_found': len(result),
                                        'employee': employee.__repr__(),
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
            else:
                return JsonResponse(
                    {
                        'status': 400,
                        'msg': 'employee was not found'
                    }
                )

        elif request.method == 'POST':
            # morning=True if morning is None and time >=10:00:00 else morning
            # afternoon=True if afternoon is None and time >=15:00:00 else afternoon

            return JsonResponse(
                {
                    'msg': f'{request.POST.get("name")}, seja bem vindo! (POST)'
                }
            )
