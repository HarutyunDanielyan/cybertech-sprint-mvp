from django.shortcuts import render
from standards.models import Standard
from assessments.models import ComplianceScore
from django.utils.translation import gettext as _
import math

def landing(request):
    standards = Standard.objects.all()
    scores = ComplianceScore.objects.filter(user=request.user) if request.user.is_authenticated else []

    # Precompute spider chart label coordinates
    standard_labels = []
    for index, standard in enumerate(standards):
        angle = (index / len(standards)) * 360 + 90  # Calculate angle in degrees
        x = math.cos(math.radians(angle)) * 180 + 200
        y = math.sin(math.radians(angle)) * 180 + 200
        standard_labels.append({
            'name': standard.name,
            'x': x,
            'y': y,
        })

    return render(request, 'index.html', {
        'slogan': _('Streamline Your Compliance Journey with Moderat'),
        'about': _('Moderat provides automated compliance tools for GDPR, ISO 27001, and more.'),
        'standards': standards,
        'scores': scores,
        'standard_labels': standard_labels,
    })

def quick_start(request):
    return render(request, 'core/quick_start.html', {
        'slogan': _('Get Started with Moderat Compliance'),
        'about': _('Our platform simplifies compliance with automated assessments and training.'),
    })

def frameworks(request):
    standards = Standard.objects.all()
    return render(request, 'core/frameworks.html', {
        'standards': standards,
    })