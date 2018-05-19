from framework.errors import ERR_REQ_IVLD_REQUEST
from framework.views import PagerView
from tutorials.config import CONFIG
from tutorials.models import Course


class PremiumView(PagerView):
    name = 'courses.premium'
    _body_params_keys = ('navigation', 'sorting', 'filters')

    def admin_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        return Course.get_pager_premium(
            mode=CONFIG.MODES.ADMIN, user=request.user, page=params['navigation']['page'],
            sorting=params['sorting'], filters=params['filters']
        )

    def guest_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        return Course.get_pager_premium(
            mode=CONFIG.MODES.GUEST, user=None, page=params['navigation']['page'],
            sorting=params['sorting'], filters=params['filters']
        )

    def login_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        return Course.get_pager_premium(
            mode=CONFIG.MODES.USER, user=request.user, page=params['navigation']['page'],
            sorting=params['sorting'], filters=params['filters']
        )
