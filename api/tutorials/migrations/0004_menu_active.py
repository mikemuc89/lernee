# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-09 07:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0003_auto_20170909_0927'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
