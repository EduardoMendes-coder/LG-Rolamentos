from django.db import models
from django.utils import timezone
from django import forms
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager


class Advertence(models.Model):
    name = models.CharField(max_length=50, null=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(default=timezone.now(), null=True)
    updated_at = models.DateTimeField(default=None, null=True)
    note = models.CharField(max_length=50, null=False)

    def __repr__(self):
        return f'({self.name} | {self.employee} | {self.manager} | {self.note})'

    def to_json(self):
        return dict({
            'id': self.id,
            'name': self.name,
            'employee': self.employee.json_object(),
            'manager': self.manager.to_json(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'note': self.note
        })

class AdvertenceForms(forms.ModelForm):
    class Meta:
        model = Advertence
        fields = [
            'name', 'employee', 'manager', 'note'
        ]
