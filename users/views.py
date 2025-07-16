from django.contrib.auth.views import LoginView, LogoutView
from django.urls import reverse_lazy

class CustomLoginView(LoginView):
    template_name = 'users/login.html'  # Login ձևի template-ը
    redirect_authenticated_user = True  # Եթե օգտատերն արդեն մուտք է գործել, redirect անի
    success_url = reverse_lazy('dashboard:roadmap')  # Հաջող մուտքից հետո redirect

class CustomLogoutView(LogoutView):
    next_page = reverse_lazy('users:login')  # Դուրս գալուց հետո redirect
