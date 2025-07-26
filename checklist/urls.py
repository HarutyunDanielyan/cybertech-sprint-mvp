from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChecklistViewSet, ChecklistView

router = DefaultRouter()
router.register(r'checklists', ChecklistViewSet)

app_name = 'checklist'
urlpatterns = [
    path('api/', include(router.urls)),
    path('', ChecklistView.as_view(), name='checklist'),
]