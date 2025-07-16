from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PricingPlanViewSet, RegistrationViewSet

router = DefaultRouter()
router.register(r'plans', PricingPlanViewSet)
router.register(r'registrations', RegistrationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]