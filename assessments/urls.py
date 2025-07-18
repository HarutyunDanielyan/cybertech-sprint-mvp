from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuizListView, QuizView
from django.views.generic import RedirectView

router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)

app_name = 'assessments'
urlpatterns = [
    path('', RedirectView.as_view(url='quizzes/', permanent=False), name='index'),
    path('api/', include(router.urls)),
    path('quiz/<int:pk>/', QuizView.as_view(), name='quiz'),
    path('quizzes/', QuizListView.as_view(), name='quiz_list'),
]