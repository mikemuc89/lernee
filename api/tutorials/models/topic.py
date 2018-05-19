from django.db import models

from tutorials.models import fields
from tutorials.models.course import Course
from tutorials.models.question import Question


class Topic(models.Model):
    course = models.ForeignKey(Course)
    title = fields.TitleField()
    text = models.TextField()
    questions = models.ManyToManyField(Question)
    has_to_answer_questions = models.BooleanField(default=False)
    order = models.IntegerField()
    visible = models.BooleanField(default=True)

    def minimal(self):
        return {
            'id': self.id,
            'title': self.title,
        }

    def short(self):
        result = self.minimal()
        result.update({
            'course': self.course.minimal(),
            'navigation': {
                'previous': '',  # !TODO Get previous topic id
                'next': '',  # !TODO Get next topic id
            }
        })
        return result

    def details(self):
        result = self.short()
        result.update({
            'content': '',  # !TODO Parse text
            'questions': '',  # !TODO Get all questions
            'has_to_answer_questions': self.has_to_answer_questions,
            'comments': '',  # !TODO Get all coments
        })
        return result
