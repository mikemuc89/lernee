import json

from django.http import JsonResponse

from framework.errors import ReqProcessingFailException
from framework.views.base import BaseView


class ResourceView(BaseView):
    def before_render(self):
        pass

    def render(self):
        return {}

    def process_request(self):
        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_render', None))
            or (self.user.is_superuser and getattr(self, 'admin_render', None))
            or (auth and getattr(self, 'login_render', None))
            or getattr(self, 'render', None)
        )

        if view_method is None:
            raise ReqProcessingFailException()

        self.before_render()

        return view_method()
