from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StandardViewSet, UserSelectionViewSet, StandardListView, StandardSelectView

router = DefaultRouter()
router.register(r'standards', StandardViewSet)
router.register(r'selections', UserSelectionViewSet)

app_name = 'standards'
urlpatterns = [
    path('api/', include(router.urls)),
    path('', StandardListView.as_view(), name='standard_list'),
    path('select/<int:pk>/', StandardSelectView.as_view(), name='standard_select'),
]