from rest_framework import viewsets
from .models import TrainingModule, UserTrainingProgress
from .serializers import TrainingModuleSerializer, UserTrainingProgressSerializer

class TrainingModuleViewSet(viewsets.ModelViewSet):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer

class UserTrainingProgressViewSet(viewsets.ModelViewSet):
    queryset = UserTrainingProgress.objects.all()
    serializer_class = UserTrainingProgressSerializer