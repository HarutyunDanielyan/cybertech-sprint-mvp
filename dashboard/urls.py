from django.urls import path
from .views import RoadmapDashboardView, AdminDashboardView, AuditorDashboardView, UserDashboardView

app_name = 'dashboard'
urlpatterns = [
    path('', RoadmapDashboardView.as_view(), name='roadmap'),
    path('admin/', AdminDashboardView.as_view(), name='admin'),
    path('auditor/', AuditorDashboardView.as_view(), name='auditor'),
    path('user/', UserDashboardView.as_view(), name='user'),
]