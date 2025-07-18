from django.urls import path
from django.views.generic import RedirectView, TemplateView
from .views import CustomLoginView, CustomLogoutView, CustomRegisterView

app_name = 'users'
urlpatterns = [
    path('', RedirectView.as_view(url='login/', permanent=False)),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('register/', CustomRegisterView.as_view(), name='register'),
    path('password_reset/', TemplateView.as_view(template_name='users/password_reset.html'), name='password_reset'),
]