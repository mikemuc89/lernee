from django.db import models

from framework.utils.formatters import format_nrb
from tutorials.models import fields


class Account(models.Model):
    IBAN = 'IBAN'
    NRB = 'NRB'
    ACCOUNT_FORMAT_CHOICES = (
        (IBAN, 'IBAN'),
        (NRB, 'NRB'),
    )

    account_number = fields.AccountNumberField()
    account_format = models.CharField(
        max_length=32,
        choices=ACCOUNT_FORMAT_CHOICES,
        default=NRB,
    )
    owner = models.CharField(max_length=255, blank=True, null=True)
    owner_address = models.TextField(blank=True, null=True)
    bank_name = models.TextField()
    swift = models.CharField(max_length=16, blank=True, null=True)
    visible = models.BooleanField(default=True)
    admin_account = models.BooleanField(default=False)
    invoice_account = models.BooleanField(default=False)

    @classmethod
    def get_active_configuration(cls):
        try:
            item = cls.objects.filter(active_configuration=True)[0]
        except IndexError:
            return None
        return item

    @classmethod
    def get_invoice_account(cls):
        try:
            item = cls.objects.filter(visible=True, admin_account=True, invoice_account=True)[0]
        except IndexError:
            return {}

        result = {
            'account': (
                format_nrb(item.account_number)
                if item.account_format == cls.NRB else item.account_number
            ),
            'format': item.account_format,
            'name': item.bank_name,
            'address': item.owner_address,
            'owner': item.owner,
            'swift': item.swift,
        }

        return result
