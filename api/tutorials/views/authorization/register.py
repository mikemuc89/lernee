import hashlib
import uuid

from django.contrib.auth import login
from django.contrib.auth.models import User

from framework.errors import ERR_REQ_PROCESSING_FAIL
import framework.utils.send_email
from framework.views import FlowView
from tutorials.config import CONFIG
from tutorials.forms import RegisterForm
from tutorials.models import UserInfo


class RegisterView(FlowView):
    name = 'authorization.register'

    STEP_1 = 'step_1'
    STEP_2 = 'step_2'
    END = '_end_'

    step_keys = [STEP_1, STEP_2]
    next_states = {
        STEP_1: STEP_2,
        STEP_2: END,
    }
    default_step = STEP_1

    def step_1(self, request, body, type, **kwargs):
        form = RegisterForm()
        return {
            'fields': form.render(),
            'step': self.STEP_1,
        }

    def step_1_submit(self, request, body, type, **kwargs):
        data = body.get('data', {})
        form = RegisterForm(data)

        errors = form.validate()

        if errors:
            return {
                'fields': form.render(),
                'step': self.STEP_1,
            }

        return {
            'data': form.get_data(),
            'step': self.STEP_2,
        }

    def step_2_submit(self, request, body, type, **kwargs):
        data = self.get_saved_data('step_1_submit')['data']
        new_user = User.objects.create_user(
            data[u'login'],
            data[u'email'],
            data[u'password']
        )
        new_user.last_name = data[u'last_name']
        new_user.first_name = data[u'first_name']
        new_user.is_active = False
        new_user.save()

        if new_user is not None:
            user_info = UserInfo(user=new_user,
                                 token=uuid.uuid4().hex,
                                 key=hashlib.md5(new_user.email).hexdigest())
            user_info.save()
            framework.utils.send_email(CONFIG.MAIL.REGISTRATION_TEMPLATE,
                                       {'user': new_user, 'user_info': user_info},
                                       CONFIG.MAIL.REGISTRATION_TITLE,
                                       CONFIG.MAIL.REPLY_TO,
                                       [new_user.email])

            return {
                'step': self.END,
            }
        else:
            return {
                'step': self.END,
                'errors': ERR_REQ_PROCESSING_FAIL(),
            }
