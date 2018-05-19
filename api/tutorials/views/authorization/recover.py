import uuid

from django.contrib.auth import login
from django.utils import timezone

from framework.errors import ERR_REQ_PROCESSING_FAIL
from framework.views import FlowView
import framework.utils.send_email
from tutorials.config import CONFIG
from tutorials.forms import RecoverForm
from tutorials.models import UserInfo


class RecoverView(FlowView):
    name = 'authorization.recover'

    STEP_1 = 'step_1'
    END = '_end_'

    step_keys = [STEP_1]
    next_states = {
        STEP_1: END,
    }
    default_step = STEP_1

    def step_1(self, request, body, type, **kwargs):
        form = RecoverForm()
        return {
            'fields': form.render(),
            'step': self.STEP_1,
        }

    def step_1_submit(self, request, body, type, **kwargs):
        data = body.get('data', {})
        form = RecoverForm(data)

        errors = form.validate()

        if errors:
            return {
                'fields': form.render(),
                'step': self.STEP_1,
            }

        user = form.get_auth_user()
        try:
            user_info = UserInfo.objects.filter(user=user)[0]
        except IndexError:
            return {
                errors: ERR_REQ_PROCESSING_FAIL()
            }

        user_info.token = uuid.uuid4().hex
        user_info.token_expires = timezone.now() + timezone.timedelta(
            days=CONFIG.USERS.TOKEN_TIME_LIMIT
        )
        user_info.save()

        framework.utils.send_email(CONFIG.MAIL.RECOVER_TEMPLATE,
                                   {'user': user, 'user_info': user_info},
                                   CONFIG.MAIL.RECOVER_TITLE,
                                   CONFIG.MAIL.REPLY_TO,
                                   [user.email])

        return {
            'step': self.END
        }
