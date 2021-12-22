from .models import Inquiry
from rest_framework.serializers import ModelSerializer, Serializer, SerializerMethodField, ValidationError
from rest_framework.reverse import reverse
from utils.uri_meta import define_uri

class CommonInquiryMethods:

    def get_uri(self, obj):
        url = reverse('dataset:rud', args=[obj.id], request=self.context['request'])
        return define_uri(url, type=['GET', 'PATCH', 'DELETE'], relation='self', id=obj.id)

class InquiryCreateSerializer(ModelSerializer):

    class Meta:
        model = Inquiry
        fields = ['name', 'phone', 'email', 'purpose', 'desc']
        
class InquiryPatchSerializer(ModelSerializer):

    class Meta:
        model = Inquiry
        fields = ['acknowledged']

class InquirySerializer(ModelSerializer):

    class Meta:
        model = Inquiry
        fields = '__all__'
        

