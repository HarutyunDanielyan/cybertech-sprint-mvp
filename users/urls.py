from django.urls import path
from django.views.generic import RedirectView

from .views import CustomLoginView, CustomLogoutView

app_name = 'users'
urlpatterns = [
    path('', RedirectView.as_view(url='login/', permanent=False)),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
]