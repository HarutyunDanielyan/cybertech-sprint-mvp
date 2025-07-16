from django.urls import path
from .views import RoadmapDashboardView

app_name = 'dashboard'
urlpatterns = [
    path('', RoadmapDashboardView.as_view(), name='roadmap'),
]