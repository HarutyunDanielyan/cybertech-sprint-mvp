from rest_framework import viewsets
from .models import Standard, UserSelection
from .serializers import StandardSerializer, UserSelectionSerializer

class StandardViewSet(viewsets.ModelViewSet):
    queryset = Standard.objects.all()
    serializer_class = StandardSerializer

class UserSelectionViewSet(viewsets.ModelViewSet):
    queryset = UserSelection.objects.all()
    serializer_class = UserSelectionSerializer