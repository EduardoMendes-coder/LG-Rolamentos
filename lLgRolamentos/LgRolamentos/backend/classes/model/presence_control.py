from django.db import models
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager
from django import forms


class PresenceControl(models.Model):
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, null=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    date = models.DateField(default=None, null=True)
    is_present_morning = models.BooleanField(default=None, null=True)
    is_present_afternoon = models.BooleanField(default=None, null=True)
    note = models.CharField(max_length=250, null=True)


class PresenceControlForm(forms.ModelForm):
    class Meta:
        model = PresenceControl
        fields = [
            'manager', 'employee', 'is_present_morning', 'is_present_afternoon', 'note'
        ]
