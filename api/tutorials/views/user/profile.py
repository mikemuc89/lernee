from framework.views import ResourceView


class ProfileView(ResourceView):
    name = 'user.profile'

    def render(self, request, body, req_type, **kwargs):
        return {}
