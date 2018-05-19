from framework.errors import ReqProcessingFailException
from framework.views.base import BaseView


class FlowView(BaseView):
    step_keys = []
    next_states = {}
    default_step = None

    step_request_keys = {}
    step_request_defaults = {}

    def get_body_params(self):
        self.action = self.body.get('action', None)
        self.step = self.body.get('step', self.default_step)
        if self.step is None:
            raise ReqProcessingFailException()
        elif self.step not in self.step_keys:
            raise ReqProcessingFailException()

        result = {}
        specific_step_request_keys = self.step_request_keys.get(self.step, {})
        specific_step_request_defaults = self.step_request_defaults.get(self.step, {})

        for key in specific_step_request_keys:
            if key in self.body:
                result[key] = self.body[key]
            elif key in specific_step_request_defaults:
                result[key] = specific_step_request_defaults[key]
            else:
                raise ReqIvldRequestException()
        return result

    def get_next_state(self, state=None):
        if state is None:
            return None
        next_state = self.next_states.get(state, None)
        return next_state

    def end_flow(self, request, **kwargs):
        request.session['current_flow'] = {}

    def save_step_data(self, data, key):
        if ('current_flow' not in self.request.session
                or self.step == self.default_step and self.action is None):
            self.request.session['current_flow'] = {}

        self.request.session['current_flow'].update({
            key: data
        })
        self.request.session.modified = True

    def process_request(self):
        step_method_name = '{}_{}'.format(self.step, self.action) if self.action else self.step
        step_method = getattr(self, step_method_name, None)

        if step_method is None:
            raise ReqProcessingFailException()

        result = step_method()

        self.save_step_data(result, step_method_name)

        return result

    def get_saved_data(self, step_name=None):
        if step_name:
            return self.request.session['current_flow'][step_name]
        return self.request.session['current_flow']
