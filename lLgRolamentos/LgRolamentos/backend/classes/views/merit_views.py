from urllib import request
from django.http import JsonResponse
from django.utils import timezone
from datetime import datetime
from backend.classes.model.merit import Merit
from backend.classes.model.manager import Manager
from backend.classes.model.employee import Employee


class MeritViews:

    @staticmethod
    def add_merit(request):
        employee = Employee()
        manager = Manager()
        merit = Merit()
        employee.id = request.POST.get('employee_id')
        manager.id = request.POST.get('manager_id')
        merit.name = request.POST.get('name')
        merit.employee = employee
        merit.manager = manager
        merit.created_at = request.POST.get('created_at')
        merit.updated_at = request.POST.get('updated_at')
        merit.note = request.POST.get('note')
        print(merit.employee.id)
        merit.save()

        response = {
            'status': 200,
            'message': f'{merit.__repr__()} foi cadastrado com sucesso!'
        }

        return JsonResponse(response)

    @staticmethod
    def edit_merit(request):
        if request.method == 'POST':
            manager = Manager()
            employee = Employee()
            merit = Merit()

            merit.id = request.POST.get('id')
            manager.id = request.POST.get('manager')
            employee.id = request.POST.get('employee')

            valid_manager = Manager.objects.filter(id=manager.id, is_active=True)
            valid_employee = Employee.objects.filter(id=employee.id, is_active=True)

            if valid_manager and valid_employee:
                merit.name = request.POST.get('name')
                merit.employee = employee
                merit.manager = manager
                merit.created_at = request.POST.get('created_at')
                merit.updated_at = request.POST.get('updated_at')
                merit.note = request.POST.get('note')
                Merit.objects.filter(id=merit.id).update(name=merit.name, note=merit.note, employee=employee,
                                                         manager=manager)
                merit = Merit.objects.get(id=merit.id)
                response = {"": 200}
                return JsonResponse(response)
            """else:
                return JsonResponse({'status': 400})"""