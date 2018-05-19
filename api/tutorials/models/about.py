from django.db import models

from framework.utils.topic_parser import TopicParser
from framework.utils.formatters import (
    format_nip,
    format_phone,
)
from tutorials.config import CONFIG
from tutorials.models import fields


class About(models.Model):
    phone = fields.PhoneField(blank=True, null=True)
    mail = models.EmailField()
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    gplus = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    snapchat = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    terms = models.TextField()
    info = models.TextField()
    contact_description = models.TextField(blank=True, null=True)
    active_configuration = models.BooleanField(default=True)
    nip = fields.NipField(blank=True, null=True)
    regon = fields.RegonField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    facebook_text = models.URLField(blank=True, null=True)
    twitter_text = models.URLField(blank=True, null=True)
    gplus_text = models.URLField(blank=True, null=True)
    instagram_text = models.URLField(blank=True, null=True)
    snapchat_text = models.URLField(blank=True, null=True)
    linkedin_text = models.URLField(blank=True, null=True)

    @classmethod
    def get_active_configuration(cls):
        try:
            item = cls.objects.filter(active_configuration=True)[0]
        except IndexError:
            return None
        return item

    @classmethod
    def get_active_configuration_links(cls):
        item = cls.get_active_configuration()
        result = []
        if not item:
            return result
        conf_keys = ['mail', 'phone', 'twitter', 'facebook', 'googleplus', 'linkedin', 'instagram', 'snapchat']

        for key in conf_keys:
            attr = getattr(item, key, None)
            if key == 'phone' or key == 'mail':
                attr_text = attr
            else:
                attr_text = getattr(item, '{}_text'.format(key), None)
            if attr:
                i = {
                    'id': key,
                }
                if key == 'mail':
                    i['url'] = 'mailto:{}'.format(attr)
                elif key == 'phone':
                    i['url'] = None
                else:
                    i['url'] = attr
                if attr_text:
                    i['text'] = attr_text
                result.append(i)
        return result

    @classmethod
    def get_active_contact_info(cls):
        item = cls.get_active_configuration()
        result = {}
        if not item:
            return result
        conf_keys = [
            'facebook', 'twitter', 'googleplus', 'linkedin', 'instagram', 'snapchat',
            'facebook_text', 'twitter_text', 'googleplus_text', 'linkedin_text', 'instagram_text', 'snapchat_text',
            'mail', 'name', 'phone',
            'contact_description', 'nip', 'regon', 'address',
        ]

        for key in conf_keys:
            attr = getattr(item, key, None)
            if key in ('facebook_text', 'twitter_text', 'googleplus_text', 'linkedin_text', 'instagram_text', 'snapchat_text'):
                pass
            elif key in ('facebook', 'twitter', 'googleplus', 'linkedin', 'instagram', 'snapchat'):
                if attr:
                    result[key] = {
                        'url': attr,
                        'text': getattr(item, '{}_text'.format(key), None)
                    }
            elif key == 'contact_description':
                result[key] = TopicParser.parse_text(attr)
            elif key == 'nip':
                result[key] = format_nip(attr)
            elif key == 'phone':
                result[key] = format_phone(attr, with_country_code=True)
            else:
                result[key] = attr
        return result

    @classmethod
    def get_active_invoice_data(cls):
        item = cls.get_active_configuration()
        result = {}
        if not item:
            return result
        conf_keys = [
            'mail', 'name', 'phone', 'nip', 'regon', 'address',
        ]

        for key in conf_keys:
            attr = getattr(item, key, None)
            if attr:
                if key == 'nip':
                    result[key] = format_nip(attr)
                elif key == 'phone':
                    result[key] = format_phone(attr, with_country_code=True)
                else:
                    result[key] = attr
        return result

    @classmethod
    def get_active_certificate_issuer(cls):
        item = cls.get_active_configuration()
        result = {
            'person': CONFIG.CERTIFICATE.DEFAULT_ISSUER,
        }
        if not item:
            return result
        conf_keys = [
            'mail', 'name', 'nip', 'regon', 'address',
        ]

        for key in conf_keys:
            attr = getattr(item, key, None)
            if attr:
                if key == 'nip':
                    result[key] = format_nip(attr)
                else:
                    result[key] = attr
        return result

    @classmethod
    def get_active_info(cls):
        item = cls.get_active_configuration()
        result = {}
        if not item:
            return result
        conf_keys = [
            'name', 'info', 'terms', 'mail', 'facebook', 'facebook_text',
        ]

        for key in conf_keys:
            attr = getattr(item, key, None)
            if key in ('facebook_text',):
                pass
            elif key in ('facebook',):
                if attr:
                    result[key] = {
                        'url': attr,
                        'text': getattr(item, '{}_text'.format(key), None)
                    }
            elif key in ('terms', 'info'):
                result[key] = TopicParser.parse_text(attr)
            elif attr:
                result[key] = attr
        return result
