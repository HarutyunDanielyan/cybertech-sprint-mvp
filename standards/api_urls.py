from django.urls import path
from .views import SomeAPIView

urlpatterns = [
    path('some-endpoint/', SomeAPIView.as_view(), name='some-api'),
]