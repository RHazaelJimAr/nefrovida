from django.urls import path

from .views import BeneficiariosListView, BeneficiariosDetailView

urlpatterns = [
    path('', BeneficiariosListView.as_view()),
    path('<pk>', BeneficiariosDetailView.as_view())
]