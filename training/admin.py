from django.contrib import admin
from .models import TrainingModule, UserTrainingProgress

@admin.register(TrainingModule)
class TrainingModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)

@admin.register(UserTrainingProgress)
class UserTrainingProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'training', 'completed')
    search_fields = ('user__username', 'training__title')
    list_filter = ('completed',)