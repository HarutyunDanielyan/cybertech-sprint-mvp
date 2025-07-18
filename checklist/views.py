from rest_framework import viewsets
from django.views.generic import ListView
from .models import Checklist
from .serializers import ChecklistSerializer

class ChecklistViewSet(viewsets.ModelViewSet):
    queryset = Checklist.objects.all()
    serializer_class = ChecklistSerializer

class ChecklistView(ListView):
    model = Checklist
    template_name = 'checklist/checklist.html'
    context_object_name = 'checklists'

    def get_queryset(self):
        return Checklist.objects.filter(standard__userselection__user=self.request.user)