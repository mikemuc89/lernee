from framework.views import FlowView
from tutorials.models import Course


class RegisterView(FlowView):
    name = 'courses.register'

    def admin_render(self, request, body, req_type, **kwargs):
        pass

    def guest_render(self, request, body, req_type, **kwargs):
        pass

    def login_render(self, request, body, req_type, **kwargs):
        pass
