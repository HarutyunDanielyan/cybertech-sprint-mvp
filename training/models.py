# Այս app-ը կպարունակի ուսուցման մոդուլներ և օգտատերերի առաջընթաց։
from django.db import models
from users.models import User

class TrainingModule(models.Model):
    title = models.CharField(max_length=200)
    video_url = models.URLField()
    quiz = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class UserTrainingProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    training = models.ForeignKey(TrainingModule, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
