from django.db import models
from django.utils import timezone
from backend.classes.model.employee import Employee
from backend.classes.model.manager import Manager


class Merit(models.Model):
    name = models.CharField(max_length=50, null=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(default=timezone.now(), null=True)
    updated_at = models.DateTimeField(default=None, null=True)
    note = models.CharField(max_length=50, null=False)

    def __repr__(self):
        return f'{self.name}'