# -*- coding: utf-8 -*-

from datetime import (
    datetime,
    timedelta,
)
from django.contrib.auth.models import User
from django.db import models

from framework.utils.formatters import (
    format_nip,
    format_phone,
)
from tutorials.config import CONFIG
from tutorials.models import fields


def get_token_time_limit():
    return datetime.now() + timedelta(days=CONFIG.USERS.TOKEN_TIME_LIMIT)


class UserInfo(models.Model):
    user = models.OneToOneField(User)
    token = models.CharField(max_length=32)
    key = models.CharField(max_length=32)
    email_confirmed = models.BooleanField(default=False)
    during_password_reset = models.BooleanField(default=False)
    is_business = models.BooleanField(default=False)
    nip = fields.NipField(blank=True, null=True)
    business_name = models.TextField(blank=True, null=True)
    invoice_address = models.TextField(blank=True, null=True)
    is_blocked = models.BooleanField(default=False)
    token_expires = models.DateTimeField(default=get_token_time_limit)
    regon = fields.RegonField(blank=True, null=True)
    phone = fields.PhoneField(blank=True, null=True)

    @classmethod
    def get_for_user(cls, user):
        try:
            item = cls.objects.filter(user=user)[0]
        except IndexError:
            return None
        return item

    def short(self):
        return {
            'name': (
                self.business_name if self.is_business
                else self.user.first_name + ' ' + self.user.last_name
            ),
            'login': self.user.username,
            'email': self.user.email,
            'admin': self.user.is_superuser,
        }

    def get_invoice_data(self):
        result = {
            'name': (
                self.business_name if self.is_business
                else self.user.first_name + ' ' + self.user.last_name
            ),
            'address': self.invoice_address,
            'mail': self.user.email,
            'phone': format_phone(self.phone),
        }
        if self.is_business:
            result.update({
                'nip': format_nip(self.nip),
                'regon': self.regon,
            })
        return result
