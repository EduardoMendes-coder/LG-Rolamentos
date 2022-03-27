from django.contrib import admin
from backend.classes.model import employee, manager, role


# Register your models here.

admin.site.register(employee.Employee)
admin.site.register(manager.Manager)
admin.site.register(role.Role)
