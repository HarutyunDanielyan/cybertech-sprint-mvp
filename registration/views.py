from rest_framework import viewsets
from django.views.generic import ListView, FormView
from django.urls import reverse_lazy
from django import forms

from .models import PricingPlan, Registration
from .serializers import PricingPlanSerializer, RegistrationSerializer
from standards.models import UserSelection

from assessments.models import Quiz


# API ViewSets
class PricingPlanViewSet(viewsets.ModelViewSet):
    queryset = PricingPlan.objects.all()
    serializer_class = PricingPlanSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer


# ListView
class PricingPlanListView(ListView):
    model = PricingPlan
    template_name = 'registration/pricing_plans.html'
    context_object_name = 'plans'


# Form and FormView
class RegisterPlanForm(forms.Form):
    plan_id = forms.IntegerField(widget=forms.HiddenInput)


class RegisterPlanView(FormView):
    template_name = 'registration/register_plan.html'
    form_class = RegisterPlanForm
    success_url = reverse_lazy('assessments:quiz_list')

    def get_initial(self):
        initial = super().get_initial()
        initial['plan_id'] = self.kwargs['pk']
        return initial

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['plan'] = PricingPlan.objects.get(pk=self.kwargs['pk'])
        return context

    def form_valid(self, form):
        plan = PricingPlan.objects.get(pk=form.cleaned_data['plan_id'])
        user_selection = UserSelection.objects.filter(user=self.request.user).latest('selected_at')
        Registration.objects.create(
            user=self.request.user,
            plan=plan,
            standard=user_selection.standard
        )
        return super().form_valid(form)
