import uuid

from django.contrib.auth.models import User
from django.utils import timezone

from framework.errors import (
    ERR_REQ_IVLD_REQUEST,
    ERR_REQ_LINK_EXPIRED,
    ERR_REQ_PROCESSING_FAIL,
)
from framework.views import FlowView
from tutorials.forms import ConfirmRecoverForm
from tutorials.models import UserInfo


class ConfirmRecoverView(FlowView):
    name = 'authorization.confirm_recover'

    STEP_1 = 'step_1'
    END = '_end_'

    step_keys = [STEP_1]
    next_states = {
        STEP_1: END,
    }
    default_step = STEP_1

    def step_1(self, request, body, type, **kwargs):
        params = self.get_body_params(body, ('key', 'token'))
        if params is None:
            return ERR_REQ_IVLD_REQUEST()

        try:
            user_info = UserInfo.objects.filter(
                key=params['key'],
                token=params['token'],
                token_expires__gte=timezone.now()
            )[0]
        except IndexError:
            return ERR_REQ_LINK_EXPIRED()

        request.session['change_password_user_additional'] = user_info.id

        form = ConfirmRecoverForm({
            'email': user_info.user.email
        })
        return {
            'fields': form.render(),
            'step': self.STEP_1,
        }

    def step_1_submit(self, request, body, type, **kwargs):
        data = body.get('data', {})
        form = ConfirmRecoverForm(data)

        errors = form.validate()

        if errors:
            return {
                'fields': form.render(),
                'step': self.STEP_1,
            }

        try:
            user_info = UserInfo.objects.filter(
                id=request.session['change_password_user_additional']
            )[0]
        except IndexError:
            return {
                errors: ERR_REQ_PROCESSING_FAIL()
            }

        user_info.token_expires = timezone.now()
        user_info.save()

        user = user_info.user
        user.set_password(data['password'])

        return {
            'step': self.END
        }
