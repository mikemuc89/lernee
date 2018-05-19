from framework.views import DetailsView
from tutorials.models import (
    Course,
    UserCourse,
)
from tutorials.config import CONFIG
from tutorials.constants import *


class DetailsView(DetailsView):
    name = 'courses.details'
    _body_params_keys = ('id',)

    def _get_course(params):
        try:
            return Course.objects.filter(id=params['id'])[0]
        except IndexError:
            return None

    def _get_user_course(params, user):
        try:
            return UserCourse.objects.filter(user_info__user=user, course__id=params['id'])[0]
        except IndexError:
            return None

    def admin_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        course = self._get_course_data(params)
        if course is None:
            return ERR_REQ_IVLD_REQUEST()
        user_course = self._get_user_course(params, request.user)
        functions = []
        return {
            'data': course.details(),
            'functions': functions,
        }

    def guest_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        data = self._get_course_data(params)
        if data is None:
            return ERR_REQ_IVLD_REQUEST()
        functions = []
        if CONFIG.FUNCTIONS.COURSES_DETAILS[COURSES_DETAILS_SAMPLE]:
            functions.append({
                'id': COURSES_DETAILS_SAMPLE,
            })
        if CONFIG.FUNCTIONS.COURSES_DETAILS[COURSES_DETAILS_SIGNUP]:
            functions.append({
                'id': COURSES_DETAILS_SIGNUP
            })
        return {
            'data': data,
            'functions': functions,
        }

    def login_render(self, request, body, req_type, **kwargs):
        params = self.get_body_params(
            body,
            _body_params_keys,
            navigation={'page': 0}, sorting=None, filters={}
        )
        if params is None:
            return ERR_REQ_IVLD_REQUEST()
        data = self._get_course_data(params)
        if data is None:
            return ERR_REQ_IVLD_REQUEST()
        return {
            'data': data,
            'functions': [],
        }
