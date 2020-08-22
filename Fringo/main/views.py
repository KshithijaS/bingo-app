from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import CreateUserForm
from django.contrib.auth.decorators import login_required
from .decorators import unauthenticated_user

# Create your views here.


def landing(request):
    context = {}
    return render(request, 'main/landing.html', context)

@unauthenticated_user
def loginpage(request):
    if request.method =='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')

        user = authenticate(request,username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('choice')
        else:
            messages.info(request,'Username or password is incorrect')
    context = {}
    return render(request, 'main/loginpage.html', context)

def signup(request):
    form=CreateUserForm()
    if request.method == 'POST':
        form=CreateUserForm(request.POST)
        if form.is_valid():
            User = form.save()
            return redirect('choice')

    context={'form':form}
    return render(request,'main/signup.html',context)

def logoutUser(request):
    logout(request)
    return redirect('loginpage')

def user(request):
    context = {}
    return render(request, 'main/user.html', context)

@login_required(login_url='loginpage')
def choice(request):
    context = {}
    return render(request, 'main/choice.html', context)

@login_required(login_url='loginpage')
def invite(request):
    context = {}
    return render(request, 'main/invite.html', context)

@login_required(login_url='loginpage')
def profile(request):
    context = {}
    return render(request, 'main/profile.html', context)

@login_required(login_url='loginpage')
def game(request):
    context = {}
    return render(request, 'main/game.html', context)
