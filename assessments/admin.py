from django.contrib import admin
from .models import Quiz, ComplianceScore

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('title', 'standard')
    search_fields = ('title',)
    list_filter = ('standard',)

@admin.register(ComplianceScore)
class ComplianceScoreAdmin(admin.ModelAdmin):
    list_display = ('user', 'quiz', 'score', 'completed_at')
    search_fields = ('user__username', 'quiz__title')
    list_filter = ('quiz', 'completed_at')