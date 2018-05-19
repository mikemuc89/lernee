from django.http import Http404
from django.shortcuts import render

from framework.errors import *
from framework.views.base import BaseView


class RenderCSView(BaseView):
    template = None
    context = {}

    def get_render_context(self):
        return self.context

    def get(self, request, **kwargs):
        if not self.template:
            return Http404()
        return render(request, self.template, self.get_render_context())

    def post(self, request, **kwargs):
        if not self.template:
            return Http404()
        return render(request, self.template, self.get_render_context())
