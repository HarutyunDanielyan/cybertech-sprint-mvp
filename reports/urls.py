from django.urls import path
from .views import ReportListView, ReportCreateView

app_name = 'reports'
urlpatterns = [
    path('', ReportListView.as_view(), name='report_list'),
    path('create/', ReportCreateView.as_view(), name='report_create'),
]