# -*- coding: utf-8 -*-

from datetime import (
    datetime,
    timedelta,
)
from django.db import models

from framework.models.pager import PagerModel
from tutorials.config import CONFIG
from tutorials.models.course import Course
from tutorials.models.exam_take import ExamTake
from tutorials.models.topic import Topic
from tutorials.models.user_info import UserInfo


def get_course_time_limit():
    return datetime.now() + timedelta(days=CONFIG.COURSES.TIME_LIMIT)


class UserCourse(models.Model, PagerModel):
    user_info = models.ForeignKey(UserInfo)
    course = models.ForeignKey(Course)
    current_topic = models.ForeignKey(Topic, blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    with_certificate = models.BooleanField(default=False)
    course_completed = models.BooleanField(default=False)
    exam_passed = models.BooleanField(default=False)
    certificate_token = models.CharField(max_length=32)
    certificate_generated = models.BooleanField(default=False)
    certificate_sent = models.BooleanField(default=False)
    time_limit = models.DateTimeField(default=get_course_time_limit)

    @classmethod
    def get_pager_user(cls, page, mode, user, sorting=None, filters=None, navigation=None):
        filters = filters or {}
        filters.update({
            'user_info__user': user,
        })
        return cls.get_pager(page, mode, user, navigation, sorting, filters)

    @classmethod
    def get_certificate_by_token(cls, token):
        try:
            item = cls.objects.filter(certificate_token=token)[0]
        except IndexError:
            return None
        return item

    @classmethod
    def get_pager_all(cls, page, mode, user, sorting=None, filters=None, navigation=None):
        filters = filters or {}
        return cls.get_pager(page, mode, user, navigation, sorting, filters)

    def get_certificate_data(self):
        user = self.user_info.user
        return {
            'issued_to': user.first_name + ' ' + user.last_name,
            'course_name': self.course.title,
        }
