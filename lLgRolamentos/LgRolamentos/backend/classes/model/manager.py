from django.db import models
from django.utils import timezone


class Manager(models.Model):
    name = models.CharField(max_length=50, null=False)
    email = models.CharField(max_length=50, default=None, unique=True)
    address = models.CharField(max_length=50, default=None)
    pis = models.CharField(max_length=12, default=None, unique=True)
    is_active = models.BooleanField(default=True)
    hired_at = models.DateTimeField(default=None)
    created_at = models.DateTimeField(default=timezone.now())
    user = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=30)
    updated_at = models.DateTimeField(default=None)
