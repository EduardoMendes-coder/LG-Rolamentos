from django.urls import path
from .classes.views.advertence_views import AdvertenceViews
from .classes.views.manager_views import ManagerViews
from .classes.views.merit_views import MeritViews
from .classes.views.presence_control_views import PresenceControlViews

urlpatterns = [
 path('add/', ManagerViews.add_employee),
 path('list/', ManagerViews.list_employees),
 path('edit/<int:id>/', ManagerViews.edit_employee),
 path('get_presences/<int:employee_id>/<str:start_date>/<str:end_date>/', PresenceControlViews.get_presence_control),
 path('post_presences/<int:id>/', PresenceControlViews.post_presence_control),
 path('add-advertence/', AdvertenceViews.add_advertence),
 path('list-advertence/', AdvertenceViews.list_advertence),
 path('edit-advertence/', AdvertenceViews.edit_advertence),
 path('add-merit/', MeritViews.add_merit),
 path('edit-merit/', MeritViews.edit_merit)
]
