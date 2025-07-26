from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.db.models import Count, Avg
from django.utils.translation import activate

from assessments.models import ComplianceScore
from checklist.models import Checklist
from training.models import UserTrainingProgress
from registration.models import Registration
from standards.models import Standard
from users.models import User
from assessments.models import Quiz


# ✅ Class-Based Views

class RoadmapDashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/roadmap.html'
    login_url = '/users/login/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['scores'] = ComplianceScore.objects.filter(user=self.request.user)
        context['checklists'] = Checklist.objects.filter(standard__userselection__user=self.request.user)
        context['trainings'] = UserTrainingProgress.objects.filter(user=self.request.user)
        return context


class AdminDashboardView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'dashboard/admin.html'
    login_url = '/users/login/'

    def test_func(self):
        return self.request.user.role == 'admin'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_users'] = User.objects.count()
        context['auditors'] = User.objects.filter(role='auditor').count()
        context['admins'] = User.objects.filter(role='admin').count()
        context['scores'] = ComplianceScore.objects.values('quiz__title').annotate(avg_score=Count('score'))
        return context


class AuditorDashboardView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'dashboard/auditor.html'
    login_url = '/users/login/'

    def test_func(self):
        return self.request.user.role == 'auditor'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['companies'] = Registration.objects.filter(user__role='user')
        context['overdue_tasks'] = Checklist.objects.filter(standard__userselection__user=self.request.user).count()
        return context


class UserDashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/user.html'
    login_url = '/users/login/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['scores'] = ComplianceScore.objects.filter(user=self.request.user)
        context['tasks'] = Checklist.objects.filter(standard__userselection__user=self.request.user)[:5]
        return context


# ✅ Function-Based View

@login_required
def user_dashboard(request):
    language = request.GET.get('language', 'en')
    activate(language)

    scores = ComplianceScore.objects.filter(user=request.user)
    average_score = scores.aggregate(Avg('score'))['score__avg'] or 0

    standards = Standard.objects.filter(userselection__user=request.user)
    checklists = Checklist.objects.filter(standard__in=standards)
    quizzes = Quiz.objects.filter(standard__in=standards)

    return render(request, 'dashboard/user.html', {
        'scores': scores,
        'average_score': round(average_score, 2),
        'checklists': checklists,
        'standards': standards,
        'quizzes': quizzes,
    })
