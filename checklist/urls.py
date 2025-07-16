from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChecklistViewSet

router = DefaultRouter()
router.register(r'checklists', ChecklistViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]