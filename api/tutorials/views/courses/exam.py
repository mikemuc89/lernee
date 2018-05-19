from framework.views import DetailsView
from tutorials.models import (
    Course,
    Exam,
)


class ExamView(DetailsView):
    name = 'courses.exam'

    def admin_render(self, request, body, req_type, **kwargs):
        pass

    def guest_render(self, request, body, req_type, **kwargs):
        pass

    def login_render(self, request, body, req_type, **kwargs):
        pass
