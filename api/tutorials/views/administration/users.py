from framework.errors import (
    ERR_REQ_IVLD_REQUEST,
    ERR_REQ_NO_PERMISSION,
)
from framework.views import PagerView
from tutorials.models import UserInfo


class UsersView(PagerView):
    name = 'administration.users'

    def admin_render(self, request, body, req_type, **kwargs):
        return {}

    def render(self, request, body, req_type, **kwargs):
        return ERR_REQ_NO_PERMISSION()
