from django.urls import path
from django.contrib.auth import views as auth_views
from .views import CustomLoginView, CustomLogoutView, CustomRegisterView, ProfileUpdateView, auditor_only_view
from django.views.generic import RedirectView

app_name = 'users'

urlpatterns = [
    path('', RedirectView.as_view(url='/core/', permanent=False), name='home'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('register/', CustomRegisterView.as_view(), name='register'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile_update'),
    path('auditor-only/', auditor_only_view, name='auditor_only'),
    # Password reset URLs
    path('password_reset/', auth_views.PasswordResetView.as_view(
        template_name='users/password_reset.html',
        email_template_name='users/password_reset_email.html',
        subject_template_name='users/password_reset_subject.txt'
    ), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(
        template_name='users/password_reset_done.html'
    ), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(
        template_name='users/password_reset_confirm.html'
    ), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(
        template_name='users/password_reset_complete.html'
    ), name='password_reset_complete'),
]