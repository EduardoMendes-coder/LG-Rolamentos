from django.http import JsonResponse
from django.utils import timezone
from backend.classes.model.employee import Employee, EmployeeForm
from backend.classes.model.manager import Manager
from backend.classes.model.role import Role
from datetime import datetime
from backend.utils import casting, sex_validator
from backend.classes.model.sex import Sex
from django.shortcuts import get_object_or_404


class ManagerViews:
    @staticmethod
    def edit_employee(request, id):
        if request.method == 'POST':
            employee = get_object_or_404(Employee, id=id)
            employee_form = EmployeeForm(request.POST or None, instance=employee)
            is_valid_sex = sex_validator.validate(request.POST.get('sex'))

            if employee_form.is_valid() and is_valid_sex:
                employee_form.save()
                return JsonResponse({
                    'msg': 'OK: Successfully edited!',
                    'status': 200
                })
            return JsonResponse({
                'msg': 'ERROR: Could not edit' + str(employee_form),
                'status': 400
            })

    @staticmethod
    def add_employee(request):
        employee_form = EmployeeForm(request.POST)
        if employee_form.is_valid() and sex_validator.validate(request.POST.get('sex')):
            employee_form.save()
            return JsonResponse(
                {
                    'status': 200,
                    'msg': 'Success',
                }
            )
        return JsonResponse(
            {
                'status': 400,
                'msg': 'ERROR'
            }
        )

    @staticmethod
    def list_employees(request):
        response = [employee.__repr__() + ' - ' for employee in Employee.objects.all()]
        return JsonResponse({
            'teste': response
        })
