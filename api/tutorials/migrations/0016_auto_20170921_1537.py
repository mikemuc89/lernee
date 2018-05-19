# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-21 13:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import tutorials.models.user_info


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0015_new_short_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='is_blocked',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='token_expires',
            field=models.DateTimeField(default=tutorials.models.user_info.get_token_time_limit),
        ),
        migrations.AlterField(
            model_name='new',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]