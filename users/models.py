from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLES = (
        ('user', 'User'),
        ('auditor', 'Auditor'),
    )
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLES, default='user')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email