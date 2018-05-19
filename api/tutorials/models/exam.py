from django.db import models

from tutorials.models import fields
from tutorials.models.course import Course
from tutorials.models.question import Question


class Exam(models.Model):
    title = fields.TitleField()
    course = models.ForeignKey(Course)
    questions = models.ManyToManyField(Question)
