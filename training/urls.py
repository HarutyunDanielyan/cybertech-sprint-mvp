from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainingModuleViewSet, UserTrainingProgressViewSet

router = DefaultRouter()
router.register(r'modules', TrainingModuleViewSet)
router.register(r'progress', UserTrainingProgressViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]