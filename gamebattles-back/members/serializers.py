from rest_framework.serializers import ModelSerializer
from .models import Member


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        exclude = ["password",]


class MemberSerializerMini(ModelSerializer):
    class Meta:
        model = Member
        fields = [
            "username", "picture", "id"
        ]
