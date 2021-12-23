from django.urls import path, include
from .views import (
    InquiryRetrieveUpdateDestroyAPIView, 
    InquiryListCreateAPIView,
    download_brouchre
)

urlpatterns = [
    path('', InquiryListCreateAPIView.as_view(), name='list'),
    path('<int:id>', InquiryRetrieveUpdateDestroyAPIView.as_view(), name='rud'),
    path('download-brochure', download_brouchre, name='download'),
]
