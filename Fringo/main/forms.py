from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import *


class CreateUserForm(UserCreationForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

class UserUpdateForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']

class PlayerUpdateForm(ModelForm):
    class Meta:
        model = Player
        fields = ['profile_pic']