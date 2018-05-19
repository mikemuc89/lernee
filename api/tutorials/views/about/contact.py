from framework.views import ResourceView
from tutorials.models import About


class ContactView(ResourceView):
    name = 'about.contact'

    def render(self):
        return About.get_active_contact_info()
