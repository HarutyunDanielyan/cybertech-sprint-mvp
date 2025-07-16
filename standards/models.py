from django.db import models
from users.models import User

class Standard(models.Model):
    name = models.CharField(max_length=100)        # օրինակ՝ ISO 27001
    description = models.TextField()
    industry = models.CharField(max_length=100)    # Ֆիլտր՝ ոլորտ
    company_size = models.CharField(max_length=50) # Ֆիլտր՝ չափ

    def __str__(self):
        return self.name

class UserSelection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    standard = models.ForeignKey(Standard, on_delete=models.CASCADE)
    selected_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} → {self.standard.name}"

