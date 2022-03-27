from django.db import models
from django.utils import timezone
from backend.classes.model.role import Role


class Employee(models.Model):
    name = models.CharField(max_length=50, null=False)
    age = models.IntegerField(default=None)
    email = models.CharField(max_length=50, default=None, unique=True)
    address = models.CharField(max_length=150, default=None)
    rg = models.CharField(max_length=12, default=None, unique=True)
    pis = models.CharField(max_length=12, default=None, unique=True)
    is_active = models.BooleanField(default=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    nationality = models.CharField(max_length=50)
    salary = models.FloatField(default=None)
    phone = models.CharField(max_length=20, default=None, unique=True)
    sex = models.CharField(max_length=20, default=None)
    created_at = models.DateTimeField(default=timezone.now())
    hired_at = models.DateTimeField(default=None)
    updated_at = models.DateTimeField(deafult=None)
