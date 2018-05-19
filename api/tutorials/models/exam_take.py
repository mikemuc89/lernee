from django.db import models

from tutorials.models.exam import Exam
from tutorials.models.user_info import UserInfo


class ExamTake(models.Model):
    exam = models.ForeignKey(Exam)
    user_info = models.ForeignKey(UserInfo)
    start_time = models.DateTimeField(auto_now_add=True)
    score = models.FloatField()
    finished = models.BooleanField()
    success = models.BooleanField()
