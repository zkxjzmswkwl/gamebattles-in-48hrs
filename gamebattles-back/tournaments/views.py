from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import TournamentSerializer
from .models import Tournament


class TournamentViewSet(ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

    @action(detail=False, methods=["GET"])
    def imgay(self, request):
        return Response({"gay": "obviously"})