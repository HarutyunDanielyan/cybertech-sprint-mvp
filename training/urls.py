from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainingModuleViewSet, UserTrainingProgressViewSet, TrainingListView, TrainingDetailView

router = DefaultRouter()
router.register(r'modules', TrainingModuleViewSet)
router.register(r'progress', UserTrainingProgressViewSet)

app_name = 'training'
urlpatterns = [
    path('api/', include(router.urls)),
    path('', TrainingListView.as_view(), name='training_list'),
    path('<int:pk>/', TrainingDetailView.as_view(), name='module_detail'),
]