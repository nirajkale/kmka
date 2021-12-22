from django.urls import path, include
from .views import *

urlpatterns = [
    path('', InquiryListCreateAPIView.as_view(), name='list'),
    path('<int:id>', InquiryRetrieveUpdateDestroyAPIView.as_view(), name='rud'),
]
