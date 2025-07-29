from django.urls import path
from .views import RegisterView, LoginView, UserInfoView, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='api_register'),
    path('login/', LoginView.as_view(), name='api_login'),
    path('me/', UserInfoView.as_view(), name='api_user_info'),
    path('logout/', LogoutView.as_view(), name='api_logout'),
]