from django.urls import path 
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.landing, name="landing"),
    path('loginpage/', views.loginpage, name="loginpage"),
    path('logoutUser/', views.logoutUser, name="logoutUser"),
    path('signup/', views.signup, name="signup"),
    path('user/', views.user, name="user"),
    path('choice/', views.choice, name="choice"),
    path('invite/', views.invite, name="invite"),
    path('myprofile/', views.profile, name="profile"),
    path('editMyProfile/', views.editProfile, name="editProfile"),
    path('createCard/', views.createCard, name="createCard"),
    path('game/', views.game, name="game"),
    
    path('resetPassword/', auth_views.PasswordResetView.as_view(template_name="main/password_reset.html"), name="reset_password"),
    path('resetPassword_sent/', auth_views.PasswordResetDoneView.as_view(template_name="main/password_reset_sent.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="main/password_reset_form.html"), name="password_reset_confirm"),
    path('resetPassword_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="main/password_reset_done.html"), name="password_reset_complete"),

]
