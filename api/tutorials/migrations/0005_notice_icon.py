# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-09 07:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0004_menu_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='notice',
            name='icon',
            field=models.CharField(blank=True, max_length=32, null=True),
        ),
    ]
