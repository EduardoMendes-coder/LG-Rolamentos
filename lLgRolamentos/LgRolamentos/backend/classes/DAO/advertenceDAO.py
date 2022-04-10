from urllib import request
from django.http import JsonResponse
from django.utils import timezone
from datetime import datetime
from backend.classes.model.advertence import Advertence
from backend.classes.model.manager import Manager
from backend.classes.model.employee import Employee



class AdvertenceDAO:

    @staticmethod
    def add_advertence(request):
        advertence = Advertence()
        employee = Employee()
        manager = Manager()
        employee.id = request.POST.get('employee')
        manager.id = request.POST.get('manager')
        advertence.name = request.POST.get('name')
        advertence.employee = employee
        advertence.manager = manager
        advertence.created_at = request.POST.get('created_at')
        advertence.updated_at = request.POST.get('updated_at')
        advertence.note = request.POST.get('note')
        advertence.save()

        response = {
            'status': 200,
            'message': f'{advertence.__repr__()} foi cadastrada com sucesso!'
        }
        return JsonResponse(response)

    @staticmethod
    def list_advertence(request):
        response = [advertence.__repr__() + ' - ' for advertence in Advertence.objects.all()]
        return JsonResponse({
            'advertencia': response
        })

    @staticmethod
    def edit_advertence(request):
        if request.method == 'POST':
            manager = Manager()
            employee = Employee()
