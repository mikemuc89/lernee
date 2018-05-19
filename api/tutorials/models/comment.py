from django.db import models

from tutorials.models.topic import Topic
from tutorials.models.user_info import UserInfo


class Comment(models.Model):
    author = models.ForeignKey(UserInfo)
    topic = models.ForeignKey(Topic)
    text = models.TextField
    parent = models.ForeignKey('self', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    edited = models.BooleanField(default=False)
    private = models.BooleanField(default=False)
    hidden = models.BooleanField(default=False)

    def serialize(self, show_hidden=False):
        return {
            'author': self.author,
            'comments': [item.serialize(
                show_hidden=show_hidden
            ) for item in self.__class__.objects.filter(
                parent=self, hidden=show_hidden
            ).order_by(
                'pub_date'
            )],
            'is_edited': self.edited,
            'is_private': self.private,
            'pub_date': self.pub_date,
            'text': self.text,
            'topic': self.topic,
        }

    def details(self, show_hidden=False):
        return self.serialize(show_hidden=show_hidden)
