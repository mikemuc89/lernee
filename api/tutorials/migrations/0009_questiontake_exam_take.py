# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-09 17:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0008_auto_20170909_1840'),
    ]

    operations = [
        migrations.AddField(
            model_name='questiontake',
            name='exam_take',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutorials.ExamTake'),
        ),
    ]
