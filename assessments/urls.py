from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, ComplianceScoreViewSet

router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)
router.register(r'scores', ComplianceScoreViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]