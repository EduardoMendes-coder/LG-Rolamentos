# Generated by Django 4.0.3 on 2022-03-27 02:53

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_employee_created_at_alter_employee_hired_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 27, 2, 53, 12, 112737, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='role',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.role'),
        ),
        migrations.AlterField(
            model_name='manager',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 27, 2, 53, 12, 113738, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='role',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 27, 2, 53, 12, 112737, tzinfo=utc)),
        ),
    ]