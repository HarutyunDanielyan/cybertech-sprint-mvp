from django.db import models
from users.models import User
from standards.models import Standard

class PricingPlan(models.Model):
    name = models.CharField(max_length=100)       # օրինակ՝ Basic, Pro
    price = models.DecimalField(max_digits=10, decimal_places=2)
    features = models.TextField()

    def __str__(self):
        return self.name

class Registration(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey(PricingPlan, on_delete=models.CASCADE)
    standard = models.ForeignKey(Standard, on_delete=models.CASCADE)
    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.plan.name}"

