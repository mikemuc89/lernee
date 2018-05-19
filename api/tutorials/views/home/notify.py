from framework.views import (
    ResourceView,
    set_cookie,
)


class NotifyView(ResourceView):
    name = 'home.notify'
    _body_params_keys = ('id', 'action')

    def render(self):
        params = self.get_body_params(
            self.body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            params = {}
        return {
            '__set_cookie': params,
        }
