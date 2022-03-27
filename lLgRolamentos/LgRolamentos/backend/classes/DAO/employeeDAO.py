from django.http import JsonResponse, HttpResponse
from backend.classes.model.employee import Employee
from backend.classes.model.role import Role
from datetime import datetime
from backend.utils import casting


class EmployeeDAO:
    @staticmethod
    def edit_employee(request):
        if request.method == 'POST':
            employee = Employee()
            employee.id = request.POST.get('id')
            valid_id = Employee.objects.filter(id=employee.id)

            if valid_id:
                employee.name = request.POST.get('name')
                employee.age = request.POST.get('age')
                employee.email = request.POST.get('email')
                employee.address = request.POST.get('address')
                employee.rg = request.POST.get('rg')
                employee.pis = request.POST.get('pis')
                employee.nationality = request.POST.get('nationality')
                employee.salary = request.POST.get('salary')
                employee.phone = request.POST.get('phone')
                employee.sex = request.POST.get('sex')
                employee.hired_at = request.POST.get('hired_at')

                response = EmployeeDAO.validate_and_edit_parameters(employee=employee)
                return JsonResponse(response)
            else:
                return JsonResponse({'msg': 'invalid_id'})

    @staticmethod
    def validate_and_edit_parameters(employee):
        msg = None
        updated = False
        employee.salary = casting.cast_salary(employee.salary)
        employee.age = casting.cast_age(employee.age)
        employee.hired_at = casting.cast_hired_at(employee.hired_at)

        try:
            if employee.role and isinstance(employee.role, str):
                Employee.objects.filter(id=employee.id).update(role=employee.role)
                updated = True
            if employee.name and isinstance(employee.name, str):
                Employee.objects.filter(id=employee.id).update(name=employee.name)
                updated = True
            if employee.age and isinstance(employee.age, int):
                Employee.objects.filter(id=employee.id).update(age=employee.age)
                updated = True
            if employee.email and isinstance(employee.email, str):
                Employee.objects.filter(id=employee.id).update(email=employee.email)
                updated = True
            if employee.address and isinstance(employee.address, str):
                Employee.objects.filter(id=employee.id).update(address=employee.address)
                updated = True
            if employee.rg and isinstance(employee.rg, str):
                Employee.objects.filter(id=employee.id).update(rg=employee.rg)
                updated = True
            if employee.pis and isinstance(employee.pis, str):
                Employee.objects.filter(id=employee.id).update(pis=employee.pis)
                updated = True
            if employee.nationality and isinstance(employee.nationality, str):
                Employee.objects.filter(id=employee.id).update(nationality=employee.nationality)
                updated = True
            if employee.salary and isinstance(employee.salary, (int, float)):
                Employee.objects.filter(id=employee.id).update(salary=employee.salary)
                updated = True
            if employee.phone and isinstance(employee.phone, str):
                Employee.objects.filter(id=employee.id).update(phone=employee.phone)
                updated = True
            if employee.sex and isinstance(employee.sex, str):
                Employee.objects.filter(id=employee.id).update(sex=employee.sex)
                updated = True
            if employee.hired_at and isinstance(employee.hired_at, datetime):
                Employee.objects.filter(id=employee.id).update(hired_at=employee.hired_at)
                updated = True
        except Exception as e:
            msg = e
        else:
            msg = f'{employee.name} has been edited!'
        finally:
            if updated:
                Employee.objects.filter(id=employee.id).update(updated_at=datetime.now())

            return {'msg': msg}

    @staticmethod
    def add_employee(request):
        role = Role()
        employee = Employee()
        role.id = 1
        employee.name = request.POST.get('name')
        employee.age = request.POST.get('age')
        employee.email = request.POST.get('email')
        employee.address = request.POST.get('address')
        employee.rg = request.POST.get('rg')
        employee.pis = request.POST.get('pis')
        employee.is_active = request.POST.get('is_active')
        employee.role = role #request.POST.get('role')
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


