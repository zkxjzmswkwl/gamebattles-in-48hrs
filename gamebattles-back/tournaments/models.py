from django.db import models


class Game(models.Model):
    title = models.CharField(max_length=42, default="Breastmilk Thieves", unique=True)
    developer = models.CharField(max_length=32, default="Activision Blizzard")
    publisher = models.CharField(max_length=32, default="Activision Blizzard")
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id} - {self.title} - {self.developer}"


class Tournament(models.Model):
    title = models.CharField(max_length=72, null=False, blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)         # who cares no one cares 
    starts_at = models.DateTimeField()
    ends_at = models.DateTimeField()
    prizing = models.IntegerField(default=69)
    last_edited = models.DateTimeField(auto_now_add=True)
    revision_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.id} - {self.title}"