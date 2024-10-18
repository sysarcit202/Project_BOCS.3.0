from django.urls import path
from . import views

urlpatterns = [
    path('', views.inventory, name="inventory"),
    path('instock/', views.instock, name="instock"),
    path('used/', views.used, name="used"),
    path('donor/', views.donor, name="donor"),
]