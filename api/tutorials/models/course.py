# -*- coding: utf-8 -*-

from django.db import models
from math import ceil

from framework.models.pager import PagerModel
from tutorials.config import CONFIG
from tutorials.models import fields


PAGER_PAGE_SIZE = 50
ACTION_COURSE_SIGNUP = 'course.signup'
ACTION_COURSE_START = 'course.start'
ACTION_COURSE_CONTINUE = 'course.continue'
ACTION_COURSE_EXAM = 'course.exam'
ACTION_COURSE_CERTIFICATE = 'course.certificate'


class Course(models.Model, PagerModel):
    ident = fields.IdentField()
    title = fields.TitleField()
    short_description = models.TextField()
    long_description = models.TextField()
    icon = fields.IconField()
    image = fields.ImageField()
    is_free = models.BooleanField(default=False)
    has_certificate = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    price_with_certificate = models.DecimalField(max_digits=6, decimal_places=2)
    visible = models.BooleanField(default=True)
    certificate_title = fields.TitleField(blank=True, null=True)
    certificate_background = models.URLField(blank=True, null=True)
    theory = models.TextField(blank=True, null=True)
    practice = models.TextField(blank=True, null=True)

    @classmethod
    def get_pager_free(cls, page, mode, user, sorting=None, filters=None, navigation=None):
        filters = filters or {}
        filters.update({
            'is_free': True,
        })
        return cls.get_pager(page, mode, user, navigation, sorting, filters)

    @classmethod
    def get_pager_premium(cls, page, mode, user, sorting=None, filters=None, navigation=None):
        filters = filters or {}
        filters.update({
            'is_free': False,
        })
        return cls.get_pager(page, mode, user, navigation, sorting, filters)

    def minimal(self):
        result = {
            'id': self.id,
            'ident': self.ident,
            'title': self.title,
        }
        if self.icon:
            result['icon'] = self.icon
        if self.image:
            result['image'] = self.image
        return result

    def short(self):
        result = self.minimal()
        result.update({
            'is_free': self.is_free,
            'has_certificate': self.has_certificate,
            'short_description': self.short_description,
        })
        if not self.is_free:
            result['price'] = {
                'with_certificate': self.price_with_certificate,
                'without_certificate': self.price,
            }
        return result

    def serialize(self):
        result = self.short()
        result.update({
            'theory': self.theory,
            'practice': self.practice,
            'long_description': self.long_description,
        })
        return result

    def details(self):
        return self.serialize()
