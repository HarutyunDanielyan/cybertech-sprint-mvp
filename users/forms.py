from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.conf import settings
from .models import User

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    role = forms.ChoiceField(choices=User.ROLES, required=True)
    username = forms.CharField(required=True)

    def clean_email(self):
        email = self.cleaned_data['email']
        role = self.cleaned_data.get('role')
        if role == 'auditor':
            domain = email.split('@')[-1]
            allowed_domains = settings.ALLOWED_EMAIL_DOMAINS
            if domain not in allowed_domains:
                raise forms.ValidationError("Գրանցումը թույլատրված է միայն ընկերության էլ. փոստերով։")
        return email

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2', 'role']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']