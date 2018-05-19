import json

from django.http import JsonResponse

from framework.errors import ReqProcessingFailException
from framework.views.resource import ResourceView


class DetailsView(ResourceView):
    model = None

    def before_render(self, request, body, req_type, **kwargs):
        pass

    def render(self, request, body, req_type, **kwargs):
        return {}

    def process_request(self):
        auth = self.user.is_authenticated()

        if self.model is None:
            raise ReqProcessingFailException()

        model_method = (
            (not auth and getattr(self.model, 'guest_details', None))
            or (user.is_superuser and getattr(self.model, 'admin_details', None))
            or (auth and getattr(self.model, 'login_details', None))
            or getattr(self.model, 'details', None)
        )

        if model_method is None:
            raise ReqProcessingFailException()

        view_method = (
            (not auth and getattr(self, 'guest_render', None))
            or (user.is_superuser and getattr(self, 'admin_render', None))
            or (auth and getattr(self, 'login_render', None))
            or getattr(self, 'render', None)
        )

        self.before_render()

        result = {
            'data': model_method()
        }

        if view_method:
            result.update(view_method())

        return result
