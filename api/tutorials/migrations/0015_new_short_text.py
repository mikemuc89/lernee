# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-10 16:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0014_auto_20170910_1821'),
    ]

    operations = [
        migrations.AddField(
            model_name='new',
            name='short_text',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
