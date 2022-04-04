from django.db import models
from django.utils import timezone


class Manager(models.Model):
    name = models.CharField(max_length=50, null=False)
    email = models.CharField(max_length=50, default=None, unique=True, null=True)
    address = models.CharField(max_length=50, default=None, null=True)
    pis = models.CharField(max_length=12, default=None, unique=True, null=True)
    is_active = models.BooleanField(default=True, null=True)
    hired_at = models.DateTimeField(default=None, null=True)
    created_at = models.DateTimeField(default=timezone.now(), null=True)
    user = models.CharField(max_length=50, unique=True, null=False)
    password = models.CharField(max_length=30, null=False)
    updated_at = models.DateTimeField(default=None, null=True)
