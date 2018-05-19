# -*- coding: utf-8 -*-

from framework.errors import (
    ReqIvldRequestException,
    ReqNoPermissionException,
)
from framework.views import PDFView
from tutorials.models import (
    About,
    Account,
    Payment,
)


class InvoiceView(PDFView):
    name = 'administration.invoice'
    template_name = 'pdfs/invoice.html'
    filename = 'faktura.pdf'
    title = 'Faktura'

    def _get_invoice_context(self, payment):
        return {
            'data': payment.get_invoice_data(),
            'seller': About.get_active_invoice_data(),
            'buyer': payment.user_course.user_info.get_invoice_data(),
            'items': payment.get_invoice_items(),
            'summary_items': payment.get_summary_items(),
            'summary': payment.get_summary(),
            'bank': Account.get_invoice_account(),
        }

    def admin_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(body, ('token',))
        if params is None:
            raise ReqIvldRequestException()

        item = Payment.get_invoice_by_token(params['token'])
        if not item:
            raise ReqIvldRequestException()

        return self._get_invoice_context(item)

    def login_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(body, ('token',))
        if params is None:
            raise ReqIvldRequestException()

        item = Payment.get_invoice_by_token(params['token'])
        if not item:
            raise ReqIvldRequestException()
        if request.user != item.user_course.user_info.user:
            raise ReqNoPermissionException()

        return self._get_invoice_context(item)

    def render(self, request, body, req_type, **kwargs):
        raise ReqNoPermissionException()
