from django.db import models
from django.utils import timezone
from django import forms


class Role(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    is_active = models.BooleanField(default=True, null=True)
    created_at = models.DateTimeField(default=timezone.now(), null=True)
    updated_at = models.DateTimeField(default=None, null=True)

    def to_json(self):
        return dict({
            'id': self.id,
            'name': self.name,
            'is_active': self.is_active,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        })

    def __repr__(self):
        return f'{self.name}'


class RoleForm(forms.ModelForm):
    class Meta:
        model = Role
        fields = ['name', 'is_active']
