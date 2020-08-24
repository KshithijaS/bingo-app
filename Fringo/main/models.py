from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.

class Player(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    profile_pic = models.ImageField(null=True, blank=True)
    total_score = models.IntegerField(null=True)

    # def __str__(self):
    #     return self.user.username

# def create_playerProfile(sender, **kwargs):
#     if kwargs['created']:
#         player_profile = Player.objects.create(user=kwargs['instance'])

# post_save.connect(create_playerProfile, sender=User)

class Matches(models.Model):
    players = models.ManyToManyField(Player)
    play_time = models.DateTimeField(auto_now=True, null = True)
    win = models.CharField(max_length=200, null=True, blank=True)
    loss = models.CharField(max_length=200, null=True, blank=True)
    draw = models.BooleanField(null=True)