from django.db import models
from django.contrib.auth.models import User


class TagChoices(models.TextChoices):
    HEALTH = 'health'
    READ = 'read'
    FITNESS = 'fitness'
    STUDY = 'study'


class Habit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    tag = models.CharField(max_length=50, choices=TagChoices.choices, default=TagChoices.HEALTH)
    created_at = models.DateTimeField(auto_now_add=True)