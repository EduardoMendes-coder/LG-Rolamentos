from django.urls import path
from backend.classes.DAO.employeeDAO import EmployeeDAO
from .classes.DAO.employeeDAO import EmployeeDAO

urlpatterns = [
 path('add/', EmployeeDAO.add_employee),
 path('list/', EmployeeDAO.list_employees),
 path('edit/', EmployeeDAO.edit_employee),
]
