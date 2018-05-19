from framework.errors import ERR_REQ_NO_PERMISSION
from framework.views import ResourceView
from tutorials.config import CONFIG
from tutorials import functions


class DashboardView(ResourceView):
    name = 'administration.dashboard'
    possible_functions = (
        (functions.ADMINISTRATION_DASHBOARD_PAYMENTS,),
        (functions.ADMINISTRATION_DASHBOARD_EXAMS,),
        (functions.ADMINISTRATION_DASHBOARD_QUESTIONS,),
        (functions.ADMINISTRATION_DASHBOARD_USERS,),
    )

    def admin_render(self, request, body, req_type, **kwargs):
        cfg_value = CONFIG.FUNCTIONS.ADMINISTRATION_DASHBOARD_ADMIN
        return {
            'functions': [{
                'id': key
            } for key in cfg_value if cfg_value[key]]
        }

    def render(self, request, body, req_type, **kwargs):
        return ERR_REQ_NO_PERMISSION()
