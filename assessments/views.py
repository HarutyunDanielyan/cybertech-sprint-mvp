from django import forms
from django.views.generic import FormView, ListView
from django.urls import reverse_lazy
from rest_framework import viewsets
from .models import Quiz, ComplianceScore
from .serializers import QuizSerializer, ComplianceScoreSerializer

# API ViewSets
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class ComplianceScoreViewSet(viewsets.ModelViewSet):
    queryset = ComplianceScore.objects.all()
    serializer_class = ComplianceScoreSerializer

# Django Form
class QuizForm(forms.Form):
    def __init__(self, *args, **kwargs):
        quiz = kwargs.pop('quiz')
        super().__init__(*args, **kwargs)
        for i, question in enumerate(quiz.questions):
            self.fields[f'question_{i}'] = forms.ChoiceField(
                label=question['text'],
                choices=[(i, opt) for i, opt in enumerate(question['options'])]
            )

# Form-based View
class QuizView(FormView):
    template_name = 'assessments/quiz.html'
    form_class = QuizForm

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        quiz = Quiz.objects.get(pk=self.kwargs['pk'])
        kwargs['quiz'] = quiz
        return kwargs

    def form_valid(self, form):
        # Պահպանել օգտատիրոջ պատասխանները (օրինակ՝ ComplianceScore-ում)
        quiz = Quiz.objects.get(pk=self.kwargs['pk'])
        score = 0  # Հաշվեք score-ը Ձեր տրամաբանության հիման վրա
        ComplianceScore.objects.create(
            user=self.request.user,
            quiz=quiz,
            score=score
        )
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy('assessments:quiz_list')

class QuizListView(ListView):
    model = Quiz
    template_name = 'assessments/quiz_list.html'
    context_object_name = 'quizzes'