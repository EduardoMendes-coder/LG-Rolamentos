from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from backend.classes.model.advertence import Advertence, AdvertenceForms


class AdvertenceViews:

    @staticmethod
    def add_advertence(request):
        advertence_forms = AdvertenceForms(request.POST)
        if advertence_forms.is_valid():
            advertence_forms.save()
            return JsonResponse(
                {
                    'status': 200,
                    'msg': 'Sucess'
                }
            )
        return JsonResponse(
            {
                'status': 400,
                'msg': 'ERROR'
            }
        )

    @staticmethod
    def list_advertence(request):
        if request.method == 'GET':
            response = [advertence.to_json() for advertence in Advertence.objects.all()]
            return JsonResponse(
                {
                    'Advertences': response
                }
            )

    @staticmethod
    def edit_advertence(request, id):
        advertence = get_object_or_404(Advertence, id=id)
        advertence_form = AdvertenceForms(request.POST, instance=advertence)

        if advertence_form.is_valid():
            advertence_form.save()
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