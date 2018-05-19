from framework.errors import (
    ERR_REQ_IVLD_REQUEST,
    ERR_REQ_NO_PERMISSION,
)
from framework.views import PagerView

from tutorials.models import Payment


class PaymentsView(PagerView):
    name = 'administration.payments'
    _body_params_keys = ('navigation', 'sorting', 'filters')

    def admin_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        return Payment.get_pager_all(
            mode=CONFIG.MODES.ADMIN, user=request.user, page=params['navigation']['page'],
            sorting=params['sorting'], filters=params['filters']
        )

    def render(self, request, body, req_type, **kwargs):
        return ERR_REQ_NO_PERMISSION()
