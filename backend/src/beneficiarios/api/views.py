from rest_framework.generics import ListAPIView, RetrieveAPIView

from beneficiarios.models import Beneficiarios
from .serializers import BeneficiariosSerializer

class BeneficiariosListView(ListAPIView):
    queryset = Beneficiarios.objects.all()
    serializer_class = BeneficiariosSerializer

class BeneficiariosDetailView(RetrieveAPIView):
    queryset = Beneficiarios.objects.all()
    serializer_class = BeneficiariosSerializer
