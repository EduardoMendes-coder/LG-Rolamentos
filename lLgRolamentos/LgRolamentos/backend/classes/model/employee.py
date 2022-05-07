import employee as employee
from django.db import models
from django.utils import timezone
from backend.classes.model.role import Role
from django import forms


class Employee(models.Model):
    name = models.CharField(max_length=50, null=False)
    age = models.IntegerField(default=None, null=True)
    email = models.CharField(max_length=50, default=None, unique=True, null=True)
    address = models.CharField(max_length=150, default=None, null=True)
    rg = models.CharField(max_length=12, default=None, unique=True, null=True)
    pis = models.CharField(max_length=12, default=None, unique=True, null=True)
    is_active = models.BooleanField(default=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True)
    nationality = models.CharField(max_length=50, default=None, null=True)
    salary = models.FloatField(default=None, null=True)
    phone = models.CharField(max_length=20, default=None, unique=True, null=True)
    sex = models.CharField(max_length=20, default=None, null=True)
    created_at = models.DateTimeField(default=timezone.now(), null=True)
    hired_at = models.DateTimeField(default=None, null=True)
    updated_at = models.DateTimeField(default=None, null=True)

    def __repr__(self):
        return f'{self.name} | {self.age} | {self.email} | {self.address} | {self.rg} | {self.pis} | {self.is_active} | ' \
               f'{self.role.__repr__()} | {self.nationality} | ${self.salary} | {self.phone} | {self.sex} | {self.created_at} | ' \
               f'{self.hired_at} | {self.updated_at}'

    def json_object(self):
        return {
            'name': self.name,
            'age': self.age,
            'email': self.email,
            'address': self.address,
            'rg': self.rg,
            'pis': self.pis,
            'is_active': self.is_active,
            'role': self.role.id,
            'nationality': self.nationality,
            'salary': self.salary,
            'phone': self.phone,
            'sex': self.sex,
            'created_at': self.created_at,
            'hired_at': self.hired_at,
            'updated_at': self.updated_at
        }


class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = [
            'name', 'age', 'email', 'address', 'rg', 'pis', 'is_active',
            'role', 'nationality', 'salary', 'phone', 'sex', 'hired_at'
        ]
