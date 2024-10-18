from django.urls import path
from . import views

urlpatterns = [
    path('', views.sumrep, name="sumrep"),
    path('', views.summary, name="summary"),
]