from datetime import time

from django.http import HttpResponse
from django.test import TestCase
import requests


# Create your tests here.
from django.utils import timezone


'''def create_test():
        endpoint = 'http://127.0.0.1:8000/teste/'

        emp = {
            "name": "Advertencia",
            "employee": {"id": 17},
            "manager": {"id": 28},
            "note": "func cagou o pau"
        }
        #response = requests.post(endpoint, emp)
        response = requests.get(endpoint)
        if response.status_code == 200:
            print(response.json())
            #print('ok')
        else:
            print('deu pau')

create_test()'''

'''def exec_test_edit():
    endpoint = 'http://127.0.0.1:8000/edit/'
    data = {
        'id': 17,
        'name': 'Pedro',
        # 'age': 51,
        # 'address': 'rua anonima',
        # 'rg': '972342394',
        # 'pis': '123407234',
        # 'nationality': 'cubano',
        # 'salary': 7391.32,
        # 'phone': '459993211121',
    }

    response = requests.post(endpoint, data)

    if response.status_code == 200:
        print(response.json())


if __name__ == '__main__':
    exec_test_edit()'''