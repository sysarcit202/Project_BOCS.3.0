from django.urls import path
from . import views

urlpatterns = [
    path('', views.colndistrib, name="colndistrib"),
    path('collection/', views.collection, name="collection"),
    path('distribution/', views.distribution, name="distribution"),
]