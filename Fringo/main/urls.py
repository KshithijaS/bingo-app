from django.urls import path 
from . import views

urlpatterns = [
    path('', views.landing, name="landing"),
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('choice/', views.choice, name="choice"),
    path('invite/', views.invite, name="invite"),
    path('myprofile/', views.profile, name="profile"),
    path('game/', views.game, name="game"),
]