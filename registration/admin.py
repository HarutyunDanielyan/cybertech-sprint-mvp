from django.contrib import admin
from .models import PricingPlan, Registration

@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    search_fields = ('name',)

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('user', 'plan', 'standard', 'registered_at')
    search_fields = ('user__username', 'plan__name', 'standard__name')
    list_filter = ('plan', 'standard', 'registered_at')
