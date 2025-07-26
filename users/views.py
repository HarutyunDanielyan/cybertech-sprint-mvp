from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic.edit import CreateView, UpdateView
from django.urls import reverse_lazy
from django.contrib.auth.decorators import user_passes_test
from django.shortcuts import render
from .forms import CustomUserCreationForm, ProfileUpdateForm
from .models import User

class CustomLoginView(LoginView):
    template_name = 'users/login.html'

class CustomLogoutView(LogoutView):
    next_page = reverse_lazy('users:login')

class CustomRegisterView(CreateView):
    form_class = CustomUserCreationForm
    template_name = 'users/register.html'
    success_url = reverse_lazy('users:login')

class ProfileUpdateView(UpdateView):
    model = User
    form_class = ProfileUpdateForm
    template_name = 'users/profile_update.html'
    success_url = reverse_lazy('dashboard:roadmap')  # Ստուգեք, որ URL-ը գոյություն ունի

    def get_object(self):
        return self.request.user

@user_passes_test(lambda u: u.role == 'auditor')
def auditor_only_view(request):
    return render(request, 'users/auditor_only.html')