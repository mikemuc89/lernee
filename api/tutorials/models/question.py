from django.db import models

from tutorials.models import fields
from tutorials.models.course import Course


class Question(models.Model):
    SINGLE = 'S'
    MULTI = 'M'
    OPEN = 'O'
    QUESTION_TYPE_CHOICES = (
        (SINGLE, 'Pytanie jednokrotnego wyboru'),
        (MULTI, 'Pytanie wielokrotnego wyboru'),
        (OPEN, 'Pytanie otwarte'),
    )

    text = models.TextField()
    question_type = models.CharField(
        max_length=1,
        choices=QUESTION_TYPE_CHOICES,
        default=SINGLE,
    )
    course = models.ForeignKey(Course)
    answer_a = models.TextField(blank=True, null=True)
    answer_b = models.TextField(blank=True, null=True)
    answer_c = models.TextField(blank=True, null=True)
    answer_d = models.TextField(blank=True, null=True)
    open_answer = models.TextField(blank=True, null=True)
    is_answer_a_correct = models.NullBooleanField(blank=True, null=True)
    is_answer_b_correct = models.NullBooleanField(blank=True, null=True)
    is_answer_c_correct = models.NullBooleanField(blank=True, null=True)
    is_answer_d_correct = models.NullBooleanField(blank=True, null=True)
    points = models.IntegerField(default=1)
    visible = models.BooleanField(default=True)

    def details(self):
        result = {
            'course': self.course.minimal(),
            'question_type': self.question_type,
            'question': self.question,
            'points': self.points,
            # !TODO answers, is_open
        }
