from django.db import models

from tutorials.models import fields


class Menu(models.Model):
    ident = fields.IdentField()
    for_guest = models.BooleanField(default=True)
    for_logged_in = models.BooleanField(default=True)
    for_superuser = models.BooleanField(default=True)
    visible = models.BooleanField(default=True)

    @classmethod
    def guest_menu(cls):
        items = cls.objects.filter(visible=True, for_guest=True)
        return cls.serialize_items(items)

    @classmethod
    def login_menu(cls):
        items = cls.objects.filter(visible=True, for_logged_in=True)
        return cls.serialize_items(items)

    @classmethod
    def admin_menu(cls):
        items = cls.objects.filter(visible=True, for_superuser=True)
        return cls.serialize_items(items)

    @classmethod
    def serialize_items(cls, items):
        return [item.serialize() for item in items]

    def serialize(self):
        return {
            'id': self.ident,
        }
