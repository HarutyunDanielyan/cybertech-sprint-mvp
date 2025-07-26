from rest_framework import viewsets
from django.views.generic import ListView, DetailView
from .models import TrainingModule, UserTrainingProgress
from .serializers import TrainingModuleSerializer, UserTrainingProgressSerializer

class TrainingModuleViewSet(viewsets.ModelViewSet):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer

class UserTrainingProgressViewSet(viewsets.ModelViewSet):
    queryset = UserTrainingProgress.objects.all()
    serializer_class = UserTrainingProgressSerializer

class TrainingListView(ListView):
    model = TrainingModule
    template_name = 'training/training_list.html'
    context_object_name = 'modules'

class TrainingDetailView(DetailView):
    model = TrainingModule
    template_name = 'training/training_detail.html'
    context_object_name = 'module'

    def post(self, request, *args, **kwargs):
        module = self.get_object()
        UserTrainingProgress.objects.update_or_create(
            user=self.request.user,
            training=module,
            defaults={'completed': True}
        )
        return redirect('training:training_list')