from django.db import models
from django.utils import timezone
from backend.classes.model.role import Role


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
        return f'{self.name}'
