from django.views.generic import TemplateView

class LandingPageView(TemplateView):
    template_name = "core/landing.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['slogan'] = "Mediant Compliance: Your Path to Security"
        context['about'] = "Mediant helps organizations achieve compliance with industry standards."
        return context