from rest_framework import viewsets
from django.views.generic import ListView, FormView
from django.urls import reverse_lazy
from django import forms

from .models import Standard, UserSelection
from .serializers import StandardSerializer, UserSelectionSerializer


class StandardViewSet(viewsets.ModelViewSet):
    queryset = Standard.objects.all()
    serializer_class = StandardSerializer


class UserSelectionViewSet(viewsets.ModelViewSet):
    queryset = UserSelection.objects.all()
    serializer_class = UserSelectionSerializer


class StandardListView(ListView):
    model = Standard
    template_name = 'standards/standard_list.html'
    context_object_name = 'standards'

    def get_queryset(self):
        queryset = super().get_queryset()
        industry = self.request.GET.get('industry')
        size = self.request.GET.get('company_size')
        if industry:
            queryset = queryset.filter(industry=industry)
        if size:
            queryset = queryset.filter(company_size=size)
        return queryset


class StandardSelectForm(forms.Form):
    standard_id = forms.IntegerField(widget=forms.HiddenInput)


class StandardSelectView(FormView):
    template_name = 'standards/standard_select.html'
    form_class = StandardSelectForm
    success_url = reverse_lazy('registration:pricing_plans')

    def get_initial(self):
        initial = super().get_initial()
        initial['standard_id'] = self.kwargs['pk']
        return initial

    def form_valid(self, form):
        UserSelection.objects.create(
            user=self.request.user,
            standard_id=form.cleaned_data['standard_id']
        )
        return super().form_valid(form)
