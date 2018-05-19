# -*- coding: utf-8 -*-

from framework.errors import (
    ReqIvldRequestException,
    ReqNoPermissionException,
)
from framework.views import PDFView
from tutorials.models import (
    About,
    UserCourse,
)


class CertificateView(PDFView):
    name = 'courses.certificate'
    template_name = 'pdfs/certificate.html'
    filename = 'certyfikat.pdf'
    title = 'Certyfikat'
    orientation = PDFView.ORIENTATION_LANDSCAPE

    def _get_certificate_context(self, user_course):
        return {
            'data': user_course.get_certificate_data(),
            'issuer': About.get_active_certificate_issuer(),
        }

    def admin_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(body, ('token',))
        if params is None:
            raise ReqIvldRequestException()

        item = UserCourse.get_certificate_by_token(params['token'])
        if not item:
            raise ReqIvldRequestException()

        return self._get_certificate_context(item)

    def login_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(body, ('token',))
        if params is None:
            raise ReqIvldRequestException()

        item = UserCourse.get_certificate_by_token(params['token'])
        if not item:
            raise ReqIvldRequestException()
        if request.user != item.user_info.user:
            raise ReqNoPermissionException()

        return self._get_certificate_context(item)

    def render(self, request, body, req_type, **kwargs):
        raise ReqNoPermissionException()
