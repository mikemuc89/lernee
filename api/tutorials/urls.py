from django.conf.urls import url

from tutorials.routes import app_routes


urlpatterns = [
    url(path, resource.as_view(), name=resource.name) for (path, resource) in app_routes
]
