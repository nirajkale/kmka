from django.urls import path, include
from .views import *

urlpatterns = [
    path('', UserListCreateAPIView.as_view(), name='list'),
    path('<int:id>', UserRetrieveUpdateDestroyAPIView.as_view(), name='rud'),
    path('<int:id>/change_password', change_password, name='change_password'),
    path('<int:id>/reset_password', reset_password, name='reset_password'),
    path('token-auth', login, name='token-auth')
]
