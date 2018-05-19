# -*- coding: utf-8 -*-

import datetime
from django.db import models

from framework.models.pager import PagerModel
from framework.utils.formatters import format_value_literal
from tutorials.config import CONFIG
from tutorials.models.user_course import UserCourse
from tutorials.models.user_info import UserInfo


class Payment(models.Model, PagerModel):
    user_course = models.ForeignKey(UserCourse)
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    vat = models.IntegerField()
    invoice_generated = models.BooleanField(default=False)
    invoice_sent = models.BooleanField(default=False)
    invoice_token = models.CharField(max_length=32)
    issue_date = models.DateTimeField(auto_now_add=True)

    @classmethod
    def get_invoice_by_token(cls, token):
        try:
            item = cls.objects.filter(invoice_token=token)[0]
        except IndexError:
            return None
        return item

    @classmethod
    def get_pager_all(cls, page, mode, user, sorting=None, filters=None, navigation=None):
        filters = filters or {}
        return cls.get_pager(page, mode, user, navigation, sorting, filters)

    def get_invoice_items(self):
        if self.user_course.with_certificate:
            gross_price = self.user_course.course.price_with_certificate
            name = u'Kurs {}'.format(self.user_course.course.title)
        else:
            gross_price = self.user_course.course.price
            name = u'Kurs {} z certyfikatem uczestnictwa'.format(self.user_course.course.title)
        net_price = round(float(gross_price) / (1.0 + CONFIG.INVOICE.COURSE_VAT / 100.0), 2)
        gross = {
            'value': '{:.2f}'.format(gross_price).replace('.', ','),
            'currency': 'PLN',
        }
        net = {
            'value': '{:.2f}'.format(net_price).replace('.', ','),
            'currency': 'PLN',
        }
        return [{
            'name': name,
            'quantity': 1,
            'measure': 'szt.',
            'vat': CONFIG.INVOICE.COURSE_VAT,
            'net_price': net,
            'gross_price': gross,
            'net_value': net,
            'gross_value': gross,
        }]

    def get_summary_items(self):
        items = self.get_invoice_items()
        summarized = {}
        for item in items:
            vat = item['vat']
            net_value = float(item['net_value']['value'].replace(',', '.'))
            gross_value = float(item['gross_value']['value'].replace(',', '.'))
            vat_value = gross_value - net_value
            if vat not in summarized:
                summarized[vat] = {
                    'net_value': net_value,
                    'vat': vat,
                    'gross_value': gross_value,
                    'vat_value': vat_value,
                }
            else:
                current = summarized[vat]
                current['net_value'] += net_value
                current['gross_value'] += gross_value
                current['vat_value'] += vat_value
        result = []
        for key in summarized:
            current = summarized[key]
            result.append({
                'vat': current['vat'],
                'net_value':  {
                    'value': '{:.2f}'.format(current['net_value']).replace('.', ','),
                    'currency': 'PLN',
                },
                'gross_value':  {
                    'value': '{:.2f}'.format(current['gross_value']).replace('.', ','),
                    'currency': 'PLN',
                },
                'vat_value':  {
                    'value': '{:.2f}'.format(current['vat_value']).replace('.', ','),
                    'currency': 'PLN',
                },
            })
        return result

    def get_summary(self):
        items = self.get_summary_items()
        summarized = {
            'net_value': 0,
            'gross_value': 0,
            'vat_value': 0,
        }
        for item in items:
            summarized['net_value'] += float(item['net_value']['value'].replace(',', '.'))
            summarized['gross_value'] += float(item['gross_value']['value'].replace(',', '.'))
            summarized['vat_value'] += float(item['vat_value']['value'].replace(',', '.'))
        return {
            'literal_value': format_value_literal(summarized['gross_value'], suffix='PLN'),
            'net_value':  {
                'value': '{:.2f}'.format(summarized['net_value']).replace('.', ','),
                'currency': 'PLN',
            },
            'gross_value':  {
                'value': '{:.2f}'.format(summarized['gross_value']).replace('.', ','),
                'currency': 'PLN',
            },
            'vat_value':  {
                'value': '{:.2f}'.format(summarized['vat_value']).replace('.', ','),
                'currency': 'PLN',
            }
        }

    def get_invoice_data(self):
        issue_date = self.issue_date
        payment_date = issue_date + datetime.timedelta(days=CONFIG.INVOICE.PAYMENT_DATE_RANGE)
        return {
            'issue_date': issue_date.strftime('%Y-%m-%d'),
            'issue_place': CONFIG.INVOICE.DEFAULT_ISSUE_PLACE,
            'issuer': CONFIG.INVOICE.DEFAULT_ISSUER,
            'number': '{}/{:04d}/{}'.format(
                CONFIG.INVOICE.NUMBER_PREFIX, self.id, issue_date.year
            ),
            'payment_method': CONFIG.INVOICE.DEFAULT_PAYMENT_METHOD,
            'payment_date': payment_date.strftime('%Y-%m-%d'),
            'payment_date_range': '{} dni'.format(CONFIG.INVOICE.PAYMENT_DATE_RANGE),
            'service_date': issue_date.strftime('%Y-%m-%d'),
            'is_paid': self.user_course.is_paid,
        }
