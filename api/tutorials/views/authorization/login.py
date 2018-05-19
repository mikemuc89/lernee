import django.contrib.auth

from framework.notices import NTC_001
from framework.views import FlowView

from tutorials.forms import LoginForm


class LoginView(FlowView):
    name = 'authorization.login'

    STEP_1 = 'step_1'
    END = '_end_'

    step_keys = [STEP_1]
    next_states = {
        STEP_1: END,
    }
    default_step = STEP_1

    def step_1(self, request, body, type, **kwargs):
        form = LoginForm()
        return {
            'fields': form.render(),
            'step': self.STEP_1,
        }

    def step_1_submit(self, request, body, type, **kwargs):
        data = body.get('data', {})
        form = LoginForm(data)

        errors = form.validate()

        if errors:
            return {
                'fields': form.render(),
                'step': self.STEP_1,
            }

        user = form.get_auth_user()
        django.contrib.auth.login(request, user)

        return {
            'notice': NTC_001(),
            'step': self.END,
            'user': {
                'name': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            }
        }
