# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-10-12 20:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0021_userinfo_phone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payment',
            name='course',
        ),
        migrations.RemoveField(
            model_name='payment',
            name='is_paid',
        ),
        migrations.RemoveField(
            model_name='payment',
            name='user_info',
        ),
        migrations.AddField(
            model_name='payment',
            name='user_course',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='tutorials.UserCourse'),
            preserve_default=False,
        ),
    ]
