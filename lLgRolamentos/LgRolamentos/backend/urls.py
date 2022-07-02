from django.urls import path
from .classes.views.advertence_views import AdvertenceViews
from .classes.views.manager_views import ManagerViews
from .classes.views.merit_views import MeritViews
from .classes.views.presence_control_views import PresenceControlViews
from .utils.get_exchange import get_dollar_price

urlpatterns = [
 path('api/employee/add/', ManagerViews.add_employee),
 path('api/employee/list/', ManagerViews.list_employees),
 path('api/employee/edit/<int:id>/', ManagerViews.edit_employee),
 path('api/employee/get-presences/<int:employee_id>/<str:start_date>/<str:end_date>/', PresenceControlViews.get_presence_control),
 path('api/employee/post-presences/<int:id>/', PresenceControlViews.post_presence_control),
 path('api/advertence/add/', AdvertenceViews.add_advertence),
 path('api/advertence/list/', AdvertenceViews.list_advertence),
 path('api/advertence/edit/<int:id>/', AdvertenceViews.edit_advertence),
 path('api/merit/add/', MeritViews.add_merit),
 path('api/merit/edit/<int:id>/', MeritViews.edit_merit),
 path('api/merit/list/', MeritViews.list_merit),
 path('api/manager/add/', ManagerViews.add_manager),
 path('api/manager/edit/<int:id>/', ManagerViews.edit_manager),
 path('api/manager/list/', ManagerViews.list_manager),
 path('retrieve-password/', ManagerViews.retrieve_password),
 path('api/moedas/get-dollar-price', get_dollar_price),
 path('api/manager/demit/<int:id>/', ManagerViews.demit_manager),
 path('api/employee/demit/<int:id>/', ManagerViews.demit_employee),
 path('api/roles/list/', ManagerViews.list_roles),
 path('api/merit/delete/<int:id>/', MeritViews.delete_merit)
]
