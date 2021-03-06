from django.http import JsonResponse
from backend.classes.model.employee import Employee, EmployeeForm
from backend.classes.model.manager import Manager, ManagerForm
from backend.utils import casting, sex_validator
from django.shortcuts import get_object_or_404
import bcrypt
import smtplib
from email.message import EmailMessage
from backend.utils import casting
from datetime import datetime, timedelta
from backend.classes.model.role import Role, RoleForm
from django.utils import timezone


class ManagerViews:
    @staticmethod
    def edit_employee(request, id):
        if request.method == 'POST':
            employee = get_object_or_404(Employee, id=id)

            post = request.POST.copy()
            post['age'] = employee.age if not post.get('age') else post.get('age')
            post['sex'] = request.POST.get('sex').lower()
            request.POST = post

            employee_form = EmployeeForm(request.POST or None, instance=employee)
            is_valid_sex = sex_validator.validate(request.POST.get('sex'))

            if employee_form.is_valid() and is_valid_sex:
                employee.updated_at = timezone.now()
                employee.save()
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
    def add_employee(request):
        if request.method == 'POST':
            post = request.POST.copy()
            post['sex'] = 'other' if not post['sex'] else post['sex'].lower()
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

    # @staticmethod
    # def list_roles(request):
    #     if request.method == 'GET':
    #         response = [role.to_json() for role in Role.objects.all().filter(is_active=True)]
    #         return JsonResponse(
    #             {
    #                 'Roles': response
    #             }
    #         )
    #
    # @staticmethod
    # def add_role(request):
    #     if request.method == 'POST':
    #         role = RoleForm(request.POST)
    #
    #         if role.is_valid():
    #             role.save()
    #             return JsonResponse({'status': 200, 'msg': f'Role registered!'})
    #         else:
    #             return JsonResponse({'status': 400, 'msg': 'Invalid Role'})
    #
    # @staticmethod
    # def disable_role(request, id):
    #     if request.method == 'POST':
    #         role = get_object_or_404(Role, id=id)
    #         role.is_active = False
    #         role.updated_at = timezone.now()
    #         role.save()
    #         return JsonResponse({'status': 200, 'msg': 'Role is not active anymore'})

    @staticmethod
    def add_manager(request):
        if request.method == 'POST':
            post = request.POST.copy()
            hired_at = casting.cast_hired_at(post['hired_at'])

            if isinstance(hired_at, datetime) and hired_at <= datetime.now():
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
                    'msg': 'ERROR'
                }
            )

    @staticmethod
    def edit_manager(request, id):
        if request.method == 'POST':
            manager = get_object_or_404(Manager, id=id)
            post = request.POST.copy()

            if not manager.is_active or not bcrypt.checkpw(post['password'].encode('utf-8'), manager.password.encode('utf-8')):
                return JsonResponse({'status': 400, 'msg': 'incorrect password or inactive'})

            if post['new_password'].strip():
                post['password'] = bcrypt.hashpw(post['new_password'].encode('utf-8'), bcrypt.gensalt())
            else:
                post['password'] = manager.password

            request.POST = post
            manager_form = ManagerForm(request.POST, instance=manager)

            if manager_form.is_valid():
                manager.updated_at = timezone.now()
                manager.save()
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
    def demit_manager(request, id):
        if request.method == 'POST':
            manager = get_object_or_404(Manager, id=id)
            manager.is_active = False
            manager.updated_at = timezone.now()
            manager.save()
            return JsonResponse(
                {
                    'demit': 200
                }
            )

    @staticmethod
    def demit_employee(request, id):
        if request.method == 'POST':
            employee = get_object_or_404(Employee, id=id)
            employee.is_active = False
            employee.updated_at = timezone.now()
            employee.save()
            return JsonResponse(
                {
                    'demit': 200
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
