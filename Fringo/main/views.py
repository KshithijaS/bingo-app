from django.shortcuts import render

# Create your views here.


def landing(request):
    context = {}
    return render(request, 'main/landing.html', context)


def login(request):
    context = {}
    return render(request, 'main/login.html', context)


def signup(request):
    context = {}
    return render(request, 'main/signup.html', context)


def choice(request):
    context = {}
    return render(request, 'main/choice.html', context)


def invite(request):
    context = {}
    return render(request, 'main/invite.html', context)


def profile(request):
    context = {}
    return render(request, 'main/profile.html', context)


def game(request):
    context = {}
    return render(request, 'main/game.html', context)
