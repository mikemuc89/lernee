import django.contrib.auth

from framework.notices import NTC_002
from framework.views import FlowView


class LogoutView(FlowView):
    name = 'authorization.logout'

    END = '_end_'

    step_keys = [END]
    next_states = {}
    default_step = END

    def _end_(self):
        django.contrib.auth.logout(self.request)
        return {
            'notice': NTC_002(),
            'user': None,
            'step': self.END,
        }
