from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Player
from django.core.exceptions import ObjectDoesNotExist

@receiver(post_save, sender=User)
def create_playerProfile(sender, instance, created, **kwargs):
    if created:
        Player.objects.create(user=instance)

# post_save.connect(create_playerProfile, sender=User)

@receiver(post_save, sender=User)
def update_playerProfile(sender, instance, created, **kwargs):
    if created == False:
        try:
            instance.player.save()
        except ObjectDoesNotExist:
            Player.objects.create(user=instance)

# post_save.connect(update_playerProfile, sender=User)
