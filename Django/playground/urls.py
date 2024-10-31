from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('hello/', views.view_say_hello)
]