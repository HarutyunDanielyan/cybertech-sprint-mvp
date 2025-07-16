from rest_framework import viewsets
from .models import Quiz, ComplianceScore
from .serializers import QuizSerializer, ComplianceScoreSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class ComplianceScoreViewSet(viewsets.ModelViewSet):
    queryset = ComplianceScore.objects.all()
    serializer_class = ComplianceScoreSerializer