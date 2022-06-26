from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import response
from .serializers import MemberSerializer, MemberSerializerMini
from .models import Member


class MemberViewSet(ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    @action(detail=False, methods=["GET"])
    def me(self, request):
        if request.user.is_anonymous:
            return Response({"err": "wtf men"})
        
        return Response(MemberSerializerMini(instance=request.user, many=False).data)

    @action(detail=False, methods=["GET"])
    def sort(self, request):
        # Alias I don't want to type this each line
        params = request.query_params
        qs = Member.objects.all()

        if "username_substr" in params:
            qs = qs.filter(username__icontains=params.get("username_substr"))
        
        if "email_substr" in params:
            qs = qs.filter(email__icontains=params.get("email_substr"))
        
        return Response(MemberSerializer(instance=qs, many=True).data)
    
