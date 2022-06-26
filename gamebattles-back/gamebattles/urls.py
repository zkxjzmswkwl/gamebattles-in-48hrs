from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from members.views import MemberViewSet
from tournaments.views import TournamentViewSet

r = routers.DefaultRouter()
r.register("members", MemberViewSet)
r.register("tournaments", TournamentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(r.urls)),
    path('api-auth/', include('rest_framework.urls'))
]
