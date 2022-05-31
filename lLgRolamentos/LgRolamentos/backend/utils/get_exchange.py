import requests
from bs4 import BeautifulSoup
from django.http import JsonResponse


def get_dollar_price(request):
    if request.method == 'GET':
        url = 'https://www.comprasparaguai.com.br'

        site = requests.get(url)
        soup = BeautifulSoup(site.content, 'html.parser')
        cotDolar = soup.find('span', class_='txt-quotation hidden-xs').get_text()
        start_index = cotDolar.find('R$')
        end_index = start_index+7
        new_codDolar = cotDolar[start_index:end_index]
        return JsonResponse({'cotDolar': new_codDolar})

