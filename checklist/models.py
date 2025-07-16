# Այս app-ը կպարունակի ստուգաթերթեր, որոնք կապված են ստանդարտների հետ։
from django.db import models
from standards.models import Standard

class Checklist(models.Model):
    standard = models.ForeignKey(Standard, on_delete=models.CASCADE)
    tasks = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
