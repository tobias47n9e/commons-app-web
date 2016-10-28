from django.conf.urls import url

from . import views

app_name = 'main_site'

urlpatterns = [
    url(r'^', views.index, name='index'),
]

