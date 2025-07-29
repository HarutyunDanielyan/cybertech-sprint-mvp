from django.contrib import admin
from django.urls import path, include
from django.views.i18n import set_language

urlpatterns = [
    path('i18n/setlang/', set_language, name='set_language'),
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
    path('standards/', include('standards.urls')),
    path('registration/', include('registration.urls')),
    path('assessments/', include('assessments.urls')),
    path('dashboard/', include('dashboard.urls')),
    path('training/', include('training.urls')),
    path('checklist/', include('checklist.urls')),
    path('reports/', include('reports.urls')),
    path('core/', include('core.urls')),
    path('accounts/', include('allauth.urls')),
    path('magiclink/', include('magiclink.urls')),
    # path('api/standards/', include('standards.api_urls')),
    # path('api/assessments/', include('assessments.api_urls')),
    path('api/users/', include('users.api_urls')),  # API endpoints
]