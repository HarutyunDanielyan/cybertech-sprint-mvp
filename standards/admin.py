from django.contrib import admin
from .models import Standard, UserSelection

@admin.register(Standard)
class StandardAdmin(admin.ModelAdmin):
    list_display = ('name', 'industry', 'company_size')
    search_fields = ('name',)
    list_filter = ('industry', 'company_size')

@admin.register(UserSelection)
class UserSelectionAdmin(admin.ModelAdmin):
    list_display = ('user', 'standard', 'selected_at')
    search_fields = ('user__username', 'standard__name')
    list_filter = ('standard', 'selected_at')