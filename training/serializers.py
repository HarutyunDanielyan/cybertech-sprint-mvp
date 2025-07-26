from rest_framework import serializers
from .models import TrainingModule, UserTrainingProgress

class TrainingModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingModule
        fields = '__all__'

class UserTrainingProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTrainingProgress
        fields = '__all__'
