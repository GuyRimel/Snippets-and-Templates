from django.urls import path
from . import views

#URLConfigs
urlpatterns = [
    path('', views.view_home)
]