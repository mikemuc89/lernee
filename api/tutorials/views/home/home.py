from framework.views import ResourceView
from tutorials.models import New


class HomeView(ResourceView):
    name = 'home.home'

    def admin_render(self, request, body, req_type, **kwargs):
        return {
            'news': New.get_news_feed_admin(),
        }

    def render(self, request, body, req_type, **kwargs):
        return {
            'news': New.get_news_feed(),
        }
