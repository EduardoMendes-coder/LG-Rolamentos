from django.http import JsonResponse
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
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
            employee = Employee()
            manager = Manager()

            manager.id = request.POST.get('manager')
            employee.id = request.POST.get('employee')

            if Manager.objects.filter(id=manager.id, is_active=True):
                if Employee.objects.filter(id=employee.id, is_active=True):
                    presence_control = PresenceControl()
                    presence_control.employee = employee
                    presence_control.manager = manager
                    presence_control.date = casting.strtime_to_datetime(request.POST.get('date'))
                    presence_control.is_present_morning = request.POST.get('is_present_morning')
                    presence_control.is_present_afternoon = request.POST.get('is_present_afternoon')
                    presence_control.note = request.POST.get('note')
                    presence_control_exists = PresenceControlDAO.presence_control_exists(presence_control)

                    if presence_control_exists:
                        presence_control.id = presence_control_exists[0].id
                        PresenceControlDAO.validate_and_edit_parameters(presence_control)
                    else:
                        presence_control.save()

                    return JsonResponse({})

                else:
                    return JsonResponse(
                        {
                            'status': 400,
                            'msg': 'Employee is invalid or inactive'
                        }
                    )
            else:
                return JsonResponse(
                    {
                        'status': 400,
                        'msg': 'Manager is invalid or inactive'
                    }
                )

    @staticmethod
    def validate_and_edit_parameters(presence_control):
        presence_control.is_present_morning = casting.cast_to_bool(presence_control.is_present_morning)
        presence_control.is_present_afternoon = casting.cast_to_bool(presence_control.is_present_afternoon)
        print(type(presence_control.is_present_morning))
        if presence_control.manager and isinstance(presence_control.manager, Manager):
            PresenceControl.objects.filter(id=presence_control.id).update(manager=presence_control.manager)
        if presence_control.is_present_morning is not None and isinstance(presence_control.is_present_morning, bool):
            PresenceControl.objects.filter(id=presence_control.id).update(is_present_morning=presence_control.is_present_morning)
        if presence_control.is_present_afternoon is not None and isinstance(presence_control.is_present_afternoon, bool):
            PresenceControl.objects.filter(id=presence_control.id).update(is_present_afternoon=presence_control.is_present_afternoon)
        if presence_control.note and isinstance(presence_control.note, str):
            PresenceControl.objects.filter(id=presence_control.id).update(note=presence_control.note)
        # add updated variable later

    @staticmethod
    def presence_control_exists(presence_control):
        exists = PresenceControl.objects.filter(employee=presence_control.employee, date=presence_control.date)
        return exists if exists else False
