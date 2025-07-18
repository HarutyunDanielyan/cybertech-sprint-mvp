from django.views.generic import ListView, CreateView
from django.urls import reverse_lazy
from .models import Report

class ReportListView(ListView):
    model = Report
    template_name = 'reports/report_list.html'
    context_object_name = 'reports'

    def get_queryset(self):
        return Report.objects.filter(user=self.request.user)

class ReportCreateView(CreateView):
    model = Report
    template_name = 'reports/report_form.html'
    fields = ['title', 'description', 'file']
    success_url = reverse_lazy('reports:report_list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)