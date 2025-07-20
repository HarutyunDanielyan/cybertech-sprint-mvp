from django.contrib import admin
from .models import Checklist

@admin.register(Checklist)
class ChecklistAdmin(admin.ModelAdmin):
    list_display = ('standard', 'created_at')
    search_fields = ('standard__name',)
    list_filter = ('standard', 'created_at')