from django.urls import path
from . import views

urlpatterns = [
    path('', views.reservation, name="reservation"),
    path('reservations/', views.reservations, name="reservations"),
    path('patient/', views.patient, name="patient"),
]