# Այս app-ը կպարունակի գնահատման հետ կապված մոդելներ, ինչպիսիք են Quiz և ComplianceScore։
from django.db import models
from users.models import User
from standards.models import Standard

class Quiz(models.Model):
    standard = models.ForeignKey(Standard, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    questions = models.JSONField()

class ComplianceScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.FloatField()
    completed_at = models.DateTimeField(auto_now_add=True)
