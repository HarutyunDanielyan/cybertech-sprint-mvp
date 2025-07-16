from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StandardViewSet, UserSelectionViewSet

router = DefaultRouter()
router.register(r'standards', StandardViewSet)
router.register(r'selections', UserSelectionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]