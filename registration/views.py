from rest_framework import viewsets
from .models import PricingPlan, Registration
from .serializers import PricingPlanSerializer, RegistrationSerializer

class PricingPlanViewSet(viewsets.ModelViewSet):
    queryset = PricingPlan.objects.all()
    serializer_class = PricingPlanSerializer

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer