from django.urls import path
from .classes.DAO.advertenceDAO import AdvertenceDAO
from .classes.DAO.managerDAO import ManagerDAO
from .classes.DAO.presence_controlDAO import PresenceControlDAO

urlpatterns = [
 path('add/', ManagerDAO.add_employee),
 path('list/', ManagerDAO.list_employees),
 path('edit/', ManagerDAO.edit_employee),
 path('presences/<int:employee_id>/<str:start_date>/<str:end_date>/', PresenceControlDAO.presence_control),  # get method
 path('presences/', PresenceControlDAO.presence_control),  # post method
 path('add-advertence/', AdvertenceDAO.add_advertence),
 path('list-advertence/', AdvertenceDAO.list_advertence),
 path('edit-advertence/', AdvertenceDAO.edit_advertence)
]
