# -*- coding: utf-8 -*-

import json
import os

from django.conf import settings
from django.http import JsonResponse
from django.template import TemplateDoesNotExist
from wkhtmltopdf.views import PDFTemplateView

from framework.errors import (
    ERR_REQ_PROCESSING_FAIL,
    ERR_REQ_NO_PERMISSION,
    ERR_REQ_IVLD_REQUEST,
    ReqNoPermissionException,
    ReqIvldRequestException,
    ReqProcessingFailException,
)
from framework.views.base import BaseView


class PDFViewError(Exception):
    pass


class PDFView(PDFTemplateView, BaseView):
    ORIENTATION_LANDSCAPE = 'Landscape'
    ORIENTATION_PORTRAIT = 'Portrait'

    margin_left = 0
    margin_right = 0
    margin_top = 0
    margin_bottom = 0
    orientation = ORIENTATION_PORTRAIT
    dpi = 96
    grayscale = False
    page_size = 'A4'

    def get_template_name(self):
        return getattr(self, 'template_name', None)

    def get_filename(self):
        return getattr(self, 'filename', None)

    def get_header(self):
        return getattr(self, 'header_template', None)

    def get_footer(self):
        return getattr(self, 'footer_template', None)

    def get_cmd_options(self):
        result = {
            'margin-left': self.margin_left,
            'margin-right': self.margin_right,
            'margin-top': self.margin_top,
            'margin-bottom': self.margin_bottom,
            'orientation': self.orientation,
            'dpi': self.dpi,
            'page_size': self.page_size,
        }
        if self.grayscale:
            result['grayscale'] = True
        if self.title:
            result['title'] = self.title
        return result

    def process_request(self):
        if self.req_type == 'get':
            self.body = {}
            for key in self.request.GET:
                self.body[key] = self.request.GET.get(key)
        else:
            try:
                self.body = json.loads(self.request.body)
            except ValueError:
                self.body = {}

        self.user = self.request.user

        auth = self.user.is_authenticated()

        view_method = (
            (not auth and getattr(self, 'guest_render', None))
            or (user.is_superuser and getattr(self, 'admin_render', None))
            or (auth and getattr(self, 'login_render', None))
            or getattr(self, 'render', None)
        )

        if view_method is None:
            raise ReqProcessingFailException()

        self.before_render()

        return view_method()

    def render_to_response(self, request, **kwargs):
        context = self.process_request()
        template_name = self.get_template_name(request)
        if template_name is None:
            raise ReqProcessingFailException()

        filename = self.get_filename(request)
        header = self.get_header(request)
        footer = self.get_footer(request)
        cmd_options = self.get_cmd_options(request)
        show_content_in_browser = filename is None

        return super(PDFTemplateView, self).render_to_response(
            context=context, filename=filename,
            show_content_in_browser=show_content_in_browser,
            header_template=header,
            footer_template=footer,
            cmd_options=cmd_options,
            **kwargs
        )

    def req(self, request, req_type):
        self.request = request
        self.req_type = req_type
        self.user = request.user

        try:
            self.body = json.loads(request.body)
        except ValueError:
            self.body = {}

        try:
            self.set_config()
            self.set_user_info()
            self.req_params = self.get_body_params()
            self.check_permissions()
            return self.render_to_response(self.request, **kwargs)
        except ReqAccountBlockedException:
            err_response = ERR_REQ_ACC_BLOCKED()
        except ReqIvldRequestException:
            err_response = ERR_REQ_IVLD_REQUEST()
        except ReqLinkExpiredException:
            err_response = ERR_REQ_LINK_EXPIRED()
        except ReqNoPermissionException:
            err_response = ERR_REQ_NO_PERMISSION()
        except ReqProcessingFailException:
            err_response = ERR_REQ_PROCESSING_FAIL()
        except TemplateDoesNotExist:
            err_response = ERR_REQ_PROCESSING_FAIL()
        # except BaseException:
        #     err_response = ERR_REQ_PROCESSING_FAIL()
        finally:
            return JsonResponse(data)

        cookie = data.pop('__set_cookie')
        if cookie:
            set_cookie(response, **cookie)

        response = JsonResponse(data)
        return response

    def get(self, request, **kwargs):
        return self.req(request, 'get')

    def post(self, request, **kwargs):
        return self.req(request, 'post')
