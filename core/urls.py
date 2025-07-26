from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.landing, name='landing'),
    path('quick-start/', views.quick_start, name='quick_start'),
    path('frameworks/', views.frameworks, name='frameworks'),
]