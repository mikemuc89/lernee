from framework.utils.topic_parser import TopicParser
from framework.views import DetailsView
from tutorials.models import Topic


class TopicView(DetailsView):
    name = 'courses.topic'

    def admin_render(self, request, body, req_type, **kwargs):
        # TODO get topic data (parsed text), next, previous, course general
        # TODO get topic omments
        pass

    def guest_render(self, request, body, req_type, **kwargs):
        pass

    def login_render(self, request, body, req_type, **kwargs):
        pass
