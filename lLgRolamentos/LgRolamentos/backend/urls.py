from django.urls import path
from .classes.DAO.managerDAO import ManagerDAO

urlpatterns = [
 path('add/', ManagerDAO.add_employee),
 path('list/', ManagerDAO.list_employees),
 path('edit/', ManagerDAO.edit_employee),
]
