from datetime import datetime
import json

from django.http import JsonResponse
from django.views.generic import View

from framework.errors import (
    ERR_REQ_ACC_BLOCKED,
    ERR_REQ_IVLD_REQUEST,
    ERR_REQ_LINK_EXPIRED,
    ERR_REQ_NO_PERMISSION,
    ERR_REQ_PROCESSING_FAIL,
    ReqAccountBlockedException,
    ReqIvldRequestException,
    ReqLinkExpiredException,
    ReqNoPermissionException,
    ReqProcessingFailException,
)


def set_cookie(response, key, value, days_expire=21):
    if days_expire is None:
        max_age = 365 * 24 * 60 * 60  # one year
    else:
        max_age = days_expire * 24 * 60 * 60
    expires = datetime.datetime.strftime(
        datetime.datetime.utcnow() + datetime.timedelta(seconds=max_age),
        "%a, %d-%b-%Y %H:%M:%S GMT"
    )
    response.set_cookie(key, value, max_age=max_age, expires=expires)


class BaseView(View):
    need_authentication = False
    need_superuser_rights = False
    need_no_authentication = False
    need_no_superuser_rights = False

    request_keys = ()
    request_defaults = {}

    with_functions = False
    possible_functions = ()

    def get_body_params(self):
        result = {}
        for key in self.request_keys:
            if key in self.body:
                result[key] = self.body[key]
            elif key in self.request_defaults:
                result[key] = self.request_defaults[key]
            else:
                raise ReqIvldRequestException()
        return result

    def check_permissions(self):
        if self.need_authentication and not self.request.user.is_authenticated():
            raise ReqNoPermissionException()

        if self.need_superuser_rights and not self.request.user.is_superuser:
            raise ReqNoPermissionException()

        if self.need_no_authentication and self.request.user.is_authenticated():
            raise ReqNoPermissionException()

        if self.need_no_superuser_rights and self.request.user.is_superuser:
            raise ReqNoPermissionException()

        return None

    def process_request(self):
        NotImplementedError()

    def set_config(self):
        self.config = None

    def set_user_info(self):
        self.user_info = None

    def get_view_functions(self):
        key = item[0]
        result = []
        for item in self.possible_functions:
            try:
                validator = getattr(self, item[1], None)
            except IndexError:
                validator = None
            config_function = getattr(self.config.FUNCTIONS, key, None)
            if config_function and validator is None or validator(datetime.datetime.now()):
                result.append({
                    'id': key
                })
        return result

    def req(self, request, req_type):
        self.request = request
        self.req_type = req_type
        self.user = request.user

        try:
            self.body = json.loads(request.body)
        except ValueError:
            self.body = {}

        try:
            err_response = None
            self.set_config()
            self.set_user_info()
            self.req_params = self.get_body_params()
            if self.with_functions:
                data = {
                    'functions': self.get_view_functions()
                }
            else:
                data = {}
            data.update(self.process_request())
            self.check_permissions()
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
        # except BaseException:
        #     err_response = ERR_REQ_PROCESSING_FAIL()
        finally:
            if err_response is not None:
                return JsonResponse(err_response)

        cookie = data.pop('__set_cookie', None)
        if cookie:
            set_cookie(response, **cookie)

        response = JsonResponse(data)
        return response

    def get(self, request, **kwargs):
        return self.req(request, 'get')

    def post(self, request, **kwargs):
        return self.req(request, 'post')
