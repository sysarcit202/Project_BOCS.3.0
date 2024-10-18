from django.urls import path
from . import views
from .views import (
    ResetView,
    ResetConfirmView,
    ResetDoneView,
    ResetCompleteView,
)
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.home, name="home"),
    path('signup/', views.signup, name="signup"),
    path('insertuser/', views.insertuser, name="insertuser"),  
    path('signout/', views.signout, name="signout"),
    path('activate/<uidb64>/<token>', views.activate, name="activate"),

#For Reset Paths
    path('reset/', ResetView.as_view(), name="reset"),
    path('reset/<uidb64>/<token>/', ResetConfirmView.as_view(), name="reset_confirm"),
    path('reset/done/', ResetDoneView.as_view(), name="reset_done"),
    path('reset/done/', ResetCompleteView.as_view(), name="reset_complete"),
]

urlpatterns += staticfiles_urlpatterns()
