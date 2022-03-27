from django.http import JsonResponse, HttpResponse
from backend.classes.model.employee import Employee
from backend.classes.model.role import Role


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

                if employee.role:
                    Employee.objects.filter(id=employee.id).update(role=employee.role)
                if employee.name:
                    Employee.objects.filter(id=employee.id).update(name=employee.name)
                if employee.age:
                    Employee.objects.filter(id=employee.id).update(age=employee.age)
                if employee.email:
                    Employee.objects.filter(id=employee.id).update(email=employee.email)
                if employee.address:
                    Employee.objects.filter(id=employee.id).update(address=employee.address)
                if employee.rg:
                    Employee.objects.filter(id=employee.id).update(rg=employee.rg)
                if employee.pis:
                    Employee.objects.filter(id=employee.id).update(pis=employee.pis)
                if employee.nationality:
                    Employee.objects.filter(id=employee.id).update(nationality=employee.nationality)
                if employee.salary:
                    Employee.objects.filter(id=employee.id).update(salary=employee.salary)
                if employee.phone:
                    Employee.objects.filter(id=employee.id).update(phone=employee.phone)
                if employee.sex:
                    Employee.objects.filter(id=employee.id).update(sex=employee.sex)
                if employee.hired_at:
                    Employee.objects.filter(id=employee.id).update(hired_at=employee.hired_at)

                return JsonResponse({'msg': 'okay'})
            else:
                return JsonResponse({'msg': 'deu ruim'})

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


