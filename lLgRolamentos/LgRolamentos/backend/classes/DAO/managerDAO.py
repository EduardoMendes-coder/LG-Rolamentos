from django.http import JsonResponse
from django.utils import timezone
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
from backend.classes.model.role import Role
from datetime import datetime
from backend.utils import casting
from backend.classes.model.sex import Sex


class ManagerDAO:
    @staticmethod
    def edit_employee(request):
        if request.method == 'POST':
            manager = Manager()
            employee = Employee()
            role = Role()

            manager.id = request.POST.get('manager_id')
            employee.id = request.POST.get('id')

            valid_manager = Manager.objects.filter(id=manager.id, is_active=True)
            valid_employee = Employee.objects.filter(id=employee.id, is_active=True)

            if valid_manager and valid_employee:  # manager and employee exist and are they active?
                role.id = request.POST.get('role')
                employee.role = role
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
                employee.is_active = request.POST.get('is_active')

                response = ManagerDAO.validate_and_edit_parameters(employee=employee)
                return JsonResponse(response)
            else:
                return JsonResponse({'status': 400, 'msg': 'manager (and / or) employee are (invalid / inactive)'})

    @staticmethod
    def validate_and_edit_parameters(employee):
        msg = None
        status = None
        updated = False
        employee.salary = casting.cast_salary(employee.salary)
        employee.age = casting.cast_age(employee.age)
        employee.hired_at = casting.cast_hired_at(employee.hired_at)
        employee.is_active = casting.cast_is_active(employee.is_active)

        try:
            if employee.role and isinstance(employee.role, Role) and Role.objects.filter(id=employee.role.id, is_active=True):
                Employee.objects.filter(id=employee.id).update(role=employee.role)
                updated = True
            if employee.name and isinstance(employee.name, str):
                Employee.objects.filter(id=employee.id).update(name=employee.name.title().strip())
                updated = True
            if employee.age and isinstance(employee.age, int):
                Employee.objects.filter(id=employee.id).update(age=employee.age)
                updated = True
            if employee.email and isinstance(employee.email, str):
                Employee.objects.filter(id=employee.id).update(email=employee.email.lower().strip())
                updated = True
            if employee.address and isinstance(employee.address, str):
                Employee.objects.filter(id=employee.id).update(address=employee.address.title().strip())
                updated = True
            if employee.rg and isinstance(employee.rg, str) and employee.rg.isnumeric():
                Employee.objects.filter(id=employee.id).update(rg=employee.rg.strip())
                updated = True
            if employee.pis and isinstance(employee.pis, str) and employee.pis.isnumeric():
                Employee.objects.filter(id=employee.id).update(pis=employee.pis.strip())
                updated = True
            if employee.nationality and isinstance(employee.nationality, str):
                Employee.objects.filter(id=employee.id).update(nationality=employee.nationality.title().strip())
                updated = True
            if employee.salary and isinstance(employee.salary, (int, float)):
                Employee.objects.filter(id=employee.id).update(salary=employee.salary)
                updated = True
            if employee.phone and isinstance(employee.phone, str) and employee.phone.isnumeric():
                Employee.objects.filter(id=employee.id).update(phone=employee.phone.strip())
                updated = True
            if employee.sex and isinstance(employee.sex, str) and ManagerDAO.validate_sex(employee.sex):
                Employee.objects.filter(id=employee.id).update(sex=employee.sex.lower().strip())
                updated = True
            if employee.hired_at and isinstance(employee.hired_at, datetime):
                Employee.objects.filter(id=employee.id).update(hired_at=employee.hired_at)
                updated = True
            if employee.is_active and isinstance(employee.is_active, bool):
                Employee.objects.filter(id=employee.id).update(is_active=employee.is_active)
                updated = True

        except Exception as e:
            msg = e
            status = 400
        else:
            employee.name = Employee.objects.get(id=employee.id).name if not employee.name else employee.name.title()
            msg = f'Employee {employee.name} has been successfully edited!'
            status = 200
        finally:
            if updated:
                Employee.objects.filter(id=employee.id).update(updated_at=timezone.now())

            del employee
            del updated

            return {'status': status, 'msg': msg}

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
