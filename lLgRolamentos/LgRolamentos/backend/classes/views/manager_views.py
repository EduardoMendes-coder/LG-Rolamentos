from django.http import JsonResponse
from backend.classes.model.employee import Employee, EmployeeForm
from backend.classes.model.manager import Manager, ManagerForm
from backend.utils import casting, sex_validator
from django.shortcuts import get_object_or_404
from django.http.request import QueryDict
import bcrypt
import smtplib
from email.message import EmailMessage


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
        if request.method == 'POST':
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
        if request.method == 'GET':
            response = [employee.json_object() for employee in Employee.objects.all().order_by('is_active').reverse()]
            return JsonResponse({
                'Employees': response
            })

    @staticmethod
    def add_manager(request):
        if request.method == 'POST':
            post = request.POST.copy()
            post['password'] = bcrypt.hashpw(post['password'].encode('utf-8'), bcrypt.gensalt())

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
                    'msg': 'ERROR' + str(manager_form)
                }
            )

    @staticmethod
    def edit_manager(request, id):
        if request.method == 'POST':
            manager = get_object_or_404(Manager, id=id)
            post = request.POST.copy()
            post['password'] = bcrypt.hashpw(post['password'].encode('utf-8'), bcrypt.gensalt())
            manager_form = ManagerForm(request.POST, instance=manager)

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
        if request.method == 'GET':
            response = [manager.to_json() for manager in Manager.objects.all().order_by('is_active').reverse()]
            return JsonResponse(
                {
                    'Managers': response
                }
            )

    @staticmethod
    def retrieve_password(request):
        if request.method == 'POST':
            manager = get_object_or_404(Manager, email=request.POST.get('email'))
            sender_email = 'lgfoz2022@gmail.com'
            sender_password = 'Lgfoz@2022.'
            receiver_email = manager.email

            mail = EmailMessage()
            mail['Subject'] = 'Recuperar Senha'
            mail['From'] = sender_email
            mail['To'] = manager.email
            mail.set_content(f'Senha: {manager.password}')

            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
                smtp.login(sender_email, sender_password)
                smtp.send_message(mail)

        return JsonResponse({'msg': 'ok'})
