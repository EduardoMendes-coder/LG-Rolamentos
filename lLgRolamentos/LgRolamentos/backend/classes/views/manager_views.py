from django.http import JsonResponse
from django.utils import timezone
from backend.classes.model.employee import Employee, EmployeeForm
from backend.classes.model.manager import Manager
from backend.classes.model.role import Role
from datetime import datetime
from backend.utils import casting
from backend.classes.model.sex import Sex
from django.shortcuts import get_object_or_404


class ManagerViews:
    @staticmethod
    def edit_employee(request, id):
        if request.method == 'POST':
            employee = get_object_or_404(Employee, id=id)
            employee_form = EmployeeForm(request.POST or None, instance=employee)

            if employee_form.is_valid():
                employee_form.save()
                return JsonResponse({
                    'msg': 'OK: Successfully edited!',
                    'status': 200
                })
            return JsonResponse({
                'msg': 'ERROR: Could not edit',
                'status': 400
            })

    @staticmethod
    def validate_sex(sex):
        all_sex = (
            Sex.MALE.value,
            Sex.FEMALE.value,
            Sex.OTHER.value
        )

        return True if sex.lower() in all_sex else False

    @staticmethod
    def add_employee(request):
        role = Role()
        employee = Employee()

        role.id = request.POST.get('role')
        employee.name = request.POST.get('name')
        employee.age = request.POST.get('age')
        employee.email = request.POST.get('email')
        employee.address = request.POST.get('address')
        employee.rg = request.POST.get('rg')
        employee.pis = request.POST.get('pis')
        employee.is_active = request.POST.get('is_active')
        employee.role = role
        employee.nationality = request.POST.get('nationality')
        employee.salary = request.POST.get('salary')
        employee.phone = request.POST.get('phone')
        employee.sex = request.POST.get('sex')
        employee.created_at = request.POST.get('created_at')
        employee.hired_at = request.POST.get('hired_at')
        employee.updated_at = request.POST.get('updated_at')
        employee.save()

        response = {
            'status': 200,
            'message': f'{employee.__repr__()} foi cadastrado com sucesso!'
        }

        return JsonResponse(response)

    @staticmethod
    def list_employees(request):
        response = [employee.__repr__() + ' - ' for employee in Employee.objects.all()]
        return JsonResponse({
            'teste': response
        })
