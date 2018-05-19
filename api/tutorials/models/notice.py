from datetime import datetime
from django.db import models

from tutorials.models import fields


class Notice(models.Model):
    ident = fields.IdentField()
    icon = fields.IconField()
    text = models.TextField()
    pub_date = models.DateTimeField(default=datetime.now)
    end_date = models.DateTimeField(blank=True, null=True)
    internal_link = fields.InternalLinkField()
    internal_link_text = fields.TitleField(blank=True, null=True)
    external_link = fields.ExternalLinkField()
    external_link_text = fields.TitleField(blank=True, null=True)
    visible = models.BooleanField(default=True)
    for_guest = models.BooleanField(default=True)
    for_logged_in = models.BooleanField(default=True)
    for_superuser = models.BooleanField(default=True)

    @classmethod
    def guest_notices(cls):
        items = cls.objects.filter(visible=True, for_guest=True)
        return cls.serialize_items(items)

    @classmethod
    def login_notices(cls):
        items = cls.objects.filter(visible=True, for_logged_in=True)
        return cls.serialize_items(items)

    @classmethod
    def admin_notices(cls):
        items = cls.objects.filter(visible=True, for_superuser=True)
        return cls.serialize_items(items)

    @classmethod
    def serialize_items(cls, items):
        return map(lambda x: x.serialize(), items)

    def serialize(self):
        result = {
            'id': self.ident,
            'text': self.text,
        }
        if self.icon:
            result['icon'] = self.icon
        if self.external_link and self.external_link_text:
            result['link'] = {
                'link': self.external_link,
                'text': self.external_link_text,
            }
        if self.internal_link and self.internal_link_text:
            result['button'] = {
                'link': self.internal_link,
                'text': self.internal_link_text,
            }
        return result
