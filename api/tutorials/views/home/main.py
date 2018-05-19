from framework.views import RenderCSView


class MainView(RenderCSView):
    name = 'home.main'
    template = 'cs/index.html'

    def get_render_context(self):
        return {
            'seo': {}
        }
