from django.urls import path
from .classes.views.advertence_views import AdvertenceViews
from .classes.views.manager_views import ManagerViews
from .classes.views.merit_views import MeritViews
from .classes.views.presence_control_views import PresenceControlViews
from .utils.get_exchange import get_dollar_price

urlpatterns = [
 path('add/', ManagerViews.add_employee),
 path('list/', ManagerViews.list_employees),
 path('edit/<int:id>/', ManagerViews.edit_employee),
 path('get-presences/<int:employee_id>/<str:start_date>/<str:end_date>/', PresenceControlViews.get_presence_control),
 path('post-presences/', PresenceControlViews.post_presence_control),
 path('add-advertence/', AdvertenceViews.add_advertence),
 path('list-advertence/', AdvertenceViews.list_advertence),
 path('edit-advertence/<int:id>/', AdvertenceViews.edit_advertence),
 path('add-merit/', MeritViews.add_merit),
 path('edit-merit/<int:id>/', MeritViews.edit_merit),
 path('list-merit/', MeritViews.list_merit),
 path('add-manager/', ManagerViews.add_manager),
 path('edit-manager/<int:id>/', ManagerViews.edit_manager),
 path('list-manager/', ManagerViews.list_manager),
 path('retrieve-password/', ManagerViews.retrieve_password),
 path('get-dollar-price', get_dollar_price),
 path('demit-manager/<int:id>/', ManagerViews.demit_manager),
 path('demit-employee/<int:id>/', ManagerViews.demit_employee),
 # path('list-roles/', ManagerViews.list_roles),
 # path('add-role/', ManagerViews.add_role),
 # path('disable-role/<int:id>/', ManagerViews.disable_role),
 path('delete-merit/<int:id>/', MeritViews.delete_merit),
 path('set-presence-control/', PresenceControlViews.watch_new_presence_control)
]
