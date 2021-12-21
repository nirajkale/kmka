from rest_framework.serializers import ModelSerializer, SerializerMethodField, Serializer, ValidationError
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from utils.uri_meta import define_uri
from rest_framework.reverse import reverse

User = get_user_model()

class CommonUserMethods:

    def get_uri(self, obj):
        return define_uri(reverse("user:rud", args=[obj.id], request=self.context["request"]), relation="self", type=["GET", "PUT"], id=obj.id,)

class UsersListSerializer(ModelSerializer, CommonUserMethods):
    uri = SerializerMethodField()

    class Meta:
        model = User
        fields = ['uri', 'username', 'first_name','last_name', 'is_staff', 'is_active']
        
class UserCreateSerializer(Serializer, CommonUserMethods):
    
    passowrd_match=SerializerMethodField()
    username = serializers.CharField(required=True, min_length=4, max_length=30)
    firstname = serializers.CharField(min_length=3, max_length=50,
                          allow_null=False, allow_blank=False)
    lastname = serializers.CharField(min_length=3, max_length=50,
                         allow_null=False, allow_blank=False)
    password = serializers.CharField(write_only=True, required=True,
                         min_length=4, max_length=30, style={"input_type": "password"})
    confirm_password = serializers.CharField(write_only=True, required=True, min_length=4, max_length=30, style={"input_type": "password"})
    is_staff = serializers.BooleanField(default=False)

    def validate_username(self, value):
        queryset = User.objects.filter(username=value)
        if queryset is not None and queryset.count() != 0:
            raise ValidationError("User with same name [{0}] already exists".format(value))
        return value
    
class UserRetrieveUpdateDestroySerializer(ModelSerializer, CommonUserMethods):
    
    uri = SerializerMethodField()

    class Meta:
        model = User
        fields = ["uri", "username", "first_name", "last_name",'is_staff', 'is_active']


class ChangePasswordSerializer(Serializer, CommonUserMethods):
    '''Serializer for password change endpoint.'''
    passowrd_match=SerializerMethodField()
    username = serializers.CharField(min_length=4, max_length=30, required=True)
    existing_password = serializers.CharField(required=True, max_length=30)
    new_password = serializers.CharField(required=True, min_length=4, max_length=30)
    confirm_password = serializers.CharField(required=True, min_length=4, max_length=30)
  
class LoginSerializer(Serializer):
    '''Serializer for Login  endpoint.'''

    username = serializers.CharField(min_length=4, max_length=30, required=True)
    password = serializers.CharField(required=True, max_length=30)