from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

from tutorials.models import fields
from tutorials.models.user_info import UserInfo


def get_default_user():
    try:
        item = User.objects.filter(username='admin')[0]
    except IndexError:
        return None
    return item.id


class New(models.Model):
    title = fields.TitleField()
    short_text = models.TextField()
    text = models.TextField()
    visible = models.BooleanField()
    pub_date = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, default=get_default_user)

    @classmethod
    def get_news_feed(cls, count=10):
        items = cls.objects.filter(
            visible=True,
            pub_date__lte=timezone.now()
        ).order_by(
            '-pub_date'
        )[:count]
        return map(lambda x: x.short(), items)

    @classmethod
    def get_news_feed_admin(cls, count=10):
        items = cls.objects.all().order_by(
            '-pub_date'
        )[:count]
        return map(lambda x: x.short_admin(), items)

    def serialize(self):
        return {
            'title': self.title,
            'text': self.text,
            'pub_date': self.pub_date,
            'author': UserInfo.get_for_user(self.author).short(),
        }

    def short(self):
        return {
            'title': self.title,
            'text': self.short_text,
            'pub_date': self.pub_date,
            'author': UserInfo.get_for_user(self.author).short(),
        }

    def short_admin(self):
        return {
            'title': self.title,
            'text': self.short_text,
            'pub_date': self.pub_date,
            'author': UserInfo.get_for_user(self.author).short(),
            'visible': self.visible,
            'future': self.pub_date > timezone.now()
        }
