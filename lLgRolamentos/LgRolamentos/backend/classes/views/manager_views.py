from django.http import JsonResponse
from backend.classes.model.employee import Employee, EmployeeForm
from backend.classes.model.manager import Manager, ManagerForm
from backend.utils import casting, sex_validator
from django.shortcuts import get_object_or_404
from django.http.request import QueryDict
import pyaes


KEY = b"0123456789123456"


class ManagerViews:
    @staticmethod
    def edit_employee(request, id):
        if request.method == 'POST':
            employee = get_object_or_404(Employee, id=id)

            post = request.POST.copy()
            post['sex'] = request.POST.get('sex').lower()
            request.POST = post

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
        post = request.POST.copy()
        post['sex'] = request.POST.get('sex').lower()
        request.POST = post
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

    @staticmethod
    def add_manager(request):
        aes = pyaes.AESModeOfOperationCTR(KEY)
        post = request.POST.copy()
        post['password'] = aes.encrypt(request.POST.get('password'))

        request.POST = post
        manager_form = ManagerForm(request.POST)

        if manager_form.is_valid():
            manager_form.save()
            return JsonResponse(
                {
                    'status': 200,
                    'msg': 'Success'
                }
            )
        return JsonResponse(
            {
                'status': 400,
                'msg': 'ERROR'
            }
        )

    @staticmethod
    def edit_manager(request, id):
        manager = get_object_or_404(Manager, id=id)
        manager_form = ManagerForm(request.POST, instance=manager)
        aes = pyaes.AESModeOfOperationCTR(KEY)
        request.POST['password'] = aes.encrypt(request.POST.get('password'))

        if manager_form.is_valid():
            manager_form.save()
            return JsonResponse(
                {
                    'status': 200,
                    'msg': 'Success'
                }
            )
        return JsonResponse(
            {
                'status': 400,
                'msg': 'ERROR'
            }
        )

    @staticmethod
    def list_manager(request):
        response = [manager.__repr__() + ' - ' for manager in Manager.objects.all()]
        return JsonResponse(
            {
                'Manager': response
            }
        )
