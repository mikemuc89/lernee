# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-10-15 01:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0024_account_invoice_account'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercourse',
            name='certificate_token',
            field=models.CharField(default='a', max_length=32),
            preserve_default=False,
        ),
    ]