from urllib import request
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.utils import timezone
from datetime import datetime
from backend.classes.model.merit import Merit, MeritForm
from backend.classes.model.manager import Manager
from backend.classes.model.employee import Employee


class MeritViews:

    @staticmethod
    def add_merit(request):
        merit_form = MeritForm(request.POST)
        if merit_form.is_valid():
            merit_form.save()
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
    def edit_merit(request, id):
        merit = get_object_or_404()
        merit_form = MeritForm(request.POST)
        if merit_form.is_valid():
            merit_form.update()
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
    def list_merit(request):
        response = [merit.__repr__() + ' - ' for merit in Merit.objects.all()]
        return JsonResponse(
            {
                'merit': response
            }
        )