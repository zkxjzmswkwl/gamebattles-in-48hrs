from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

PLATFORM_CHOICES = (
    ("PC", u"PC"),
    ("Xbox", u"Xbox"),
    ("PlayStation", u"PlayStation")
)

class Member(AbstractUser):
    platform = models.CharField(max_length=32, choices=PLATFORM_CHOICES, default="PC")
    picture = models.ImageField(upload_to="huge_dicks/", null=True, blank=True)

    def __str__(self):
        return self.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
