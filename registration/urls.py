from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PricingPlanViewSet, RegistrationViewSet, PricingPlanListView, RegisterPlanView

router = DefaultRouter()
router.register(r'plans', PricingPlanViewSet)
router.register(r'registrations', RegistrationViewSet)

app_name = 'registration'
urlpatterns = [
    path('api/', include(router.urls)),
    path('', PricingPlanListView.as_view(), name='pricing_plans'),
    path('plan/<int:pk>/', RegisterPlanView.as_view(), name='register_plan'),
]