from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Player(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    profile_pic = models.ImageField(default='profile.png',null=True, blank=True)
    total_score = models.IntegerField(default=0, null=True)

    def __str__(self):
        return str(self.user.username)


class Matches(models.Model):
    players = models.ManyToManyField(Player)
    play_time = models.DateTimeField(auto_now=True, null = True)
    win = models.CharField(max_length=200, null=True, blank=True)
    loss = models.CharField(max_length=200, null=True, blank=True)
    draw = models.BooleanField(null=True)