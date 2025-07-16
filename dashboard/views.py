from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from assessments.models import ComplianceScore
from checklist.models import Checklist
from training.models import UserTrainingProgress

class RoadmapDashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/roadmap.html'
    login_url = '/users/login/' # Redirect-ի URL, եթե օգտատերը մուտք չի գործել

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['scores'] = ComplianceScore.objects.filter(user=self.request.user)
        context['checklists'] = Checklist.objects.filter(standard__userselection__user=self.request.user)
        context['trainings'] = UserTrainingProgress.objects.filter(user=self.request.user)
        return context
