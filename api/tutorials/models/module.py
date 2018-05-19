from django.db import models

from tutorials.models import fields


class Module(models.Model):
    ident = fields.IdentField()
    title = fields.TitleField()
    active = models.BooleanField(default=False)
