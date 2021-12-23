from os import read
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.filters import SearchFilter, OrderingFilter
from django.http.response import HttpResponse
from .models import Inquiry
from .serializers import (InquiryCreateSerializer, InquirySerializer, InquiryPatchSerializer)
from rest_framework.response import Response
from rest_framework import status
from utils.io import read_safe
from api.settings import MEDIA_DIR
from os import path
from rest_framework.decorators import api_view

class InquiryListCreateAPIView(ListCreateAPIView):

    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ["name"]
    ordering_fields = ["name", "submitted_on", "acknowledged"]
    
    def get_queryset(self):
        queryset = Inquiry.objects.all()
        record_type = self.request.GET.get("type", "").strip().lower()
        if record_type == "pending":
            return queryset.filter(acknowledged=False)
        return queryset
    
    def get_serializer_class(self):
        if self.request.method == "POST":
            return InquiryCreateSerializer
        return InquirySerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            instance_serialized = InquirySerializer(instance=instance, context={"request": request})
            return Response(data=instance_serialized.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class InquiryRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    
    queryset = Inquiry.objects.all()
    lookup_field = "id"
    lookup_url_kwarg = "id"
    
    def get_serializer_class(self):
        if self.request.method in ["PATCH"]:
            return InquiryPatchSerializer
        return InquirySerializer
    
    def update(self, request, *args, **kwargs):
        return Response({}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    def partial_update(self, request, *args, **kwargs):
        inquiry = self.get_object()
        serializer = self.get_serializer(instance=inquiry, data=request.data)
        if serializer.is_valid():
            serializer.save(update_fields=["acknowledged"])
            return Response({}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"]) 
def download_brouchre(request):
    bytes = read_safe(path.join(MEDIA_DIR, 'KMK Profile.pdf'))
    response = HttpResponse(bytes, content_type="application/pdf")
    response['Content-Disposition'] = 'inline; filename=KMK Profile.pdf'
    return response