# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-09 08:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0006_about_contact_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_number', models.CharField(max_length=32)),
                ('account_format', models.CharField(choices=[(b'IBAN', b'IBAN'), (b'NRB', b'NRB')], default=b'NRB', max_length=32)),
                ('owner', models.CharField(max_length=255)),
                ('owner_address', models.TextField(blank=True, null=True)),
                ('bank_name', models.TextField()),
                ('swift', models.CharField(blank=True, max_length=16, null=True)),
                ('visible', models.BooleanField(default=True)),
                ('admin_account', models.BooleanField(default=False)),
            ],
        ),
    ]
