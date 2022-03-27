from django.db import models
from django.utils import timezone


class Role(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now())
    updated_at = models.DateTimeField(default=None)
    