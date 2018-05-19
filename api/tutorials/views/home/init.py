from framework.views import ResourceView
from tutorials.fields import SearchField
from tutorials.models import (
    About,
    Menu,
    Notice,
    UserInfo
)


class InitView(ResourceView):
    name = 'home.init'

    def admin_render(self):
        return {
            'menu': Menu.admin_menu(),
            'notices': Notice.admin_notices(),
            'fields': self._get_fields(),
            'links': self._get_links(),
            'user': self._get_user_info(),
        }

    def guest_render(self):
        return {
            'menu': Menu.guest_menu(),
            'notices': Notice.guest_notices(),
            'fields': self._get_fields(),
            'links': self._get_links(),
            'user': None,
        }

    def login_render(self):
        return {
            'menu': Menu.login_menu(),
            'notices': Notice.login_notices(),
            'fields': self._get_fields(),
            'links': self._get_links(),
            'user': self._get_user_info(),
        }

    def _get_fields(self):
        search_field = SearchField()
        return {
            'search': search_field.render(),
        }

    def _get_links(self):
        return About.get_active_configuration_links()

    def _get_user_info(self, request):
        return UserInfo.get_for_user(self.request.user).short()
