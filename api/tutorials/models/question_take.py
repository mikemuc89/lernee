from django.db import models

from tutorials.models.exam_take import ExamTake
from tutorials.models.question import Question
from tutorials.models.user_info import UserInfo


class QuestionTake(models.Model):
    question = models.ForeignKey(Question)
    user_info = models.ForeignKey(UserInfo)
    start_time = models.DateTimeField(auto_now_add=True)
    answered = models.BooleanField()
    success = models.BooleanField()
    exam_take = models.ForeignKey(ExamTake, blank=True, null=True)
