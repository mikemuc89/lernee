from django.contrib.auth.models import User
from django.utils import timezone

from framework.errors import (
    ERR_REQ_IVLD_REQUEST,
    ERR_REQ_LINK_EXPIRED,
)
from framework.views import FlowView
from tutorials.models import UserInfo


class ConfirmMailView(FlowView):
    name = 'authorization.confirm_mail'

    END = '_end_'

    step_keys = [END]
    next_states = {}
    default_step = END

    def _activate_user(self, request, body):
        params = self.get_body_params(body, ('key', 'token'))
        if params is None:
            return ERR_REQ_IVLD_REQUEST()

        try:
            user_info = UserInfo.objects.filter(
                token=params['token'],
                key=params['key'],
                token_expires__gte=timezone.now(),
                user__is_active=False
            )[0]
        except IndexError:
            return ERR_REQ_LINK_EXPIRED()

        user = user_info.user
        user.is_active = True
        user.save()

        return None

    def _end_(self, request, body, type, **kwargs):
        activate_user_errors = self._activate_user(request, body)
        if activate_user_errors:
            return {
                'errors': activate_user_errors,
                'step': self.END,
            }

        return {
            'step': self.END,
        }
