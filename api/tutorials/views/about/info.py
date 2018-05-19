from framework.views import ResourceView
from tutorials.models import About


class InfoView(ResourceView):
    name = 'about.info'

    def render(self):
        return About.get_active_info()
