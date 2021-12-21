from django.shortcuts import get_object_or_404, render
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
from django.contrib.auth import (
    authenticate,
)
import re
from utils import generate_password

class UserListCreateAPIView(ListCreateAPIView):

    queryset = User.objects.all().order_by('-id')
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['username']
    ordering_fields = ['username']

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return UserCreateSerializer
        return UsersListSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            first_name = serializer.validated_data["firstname"]
            last_name = serializer.validated_data["lastname"]
            is_staff = serializer.validated_data["is_staff"]
            password = serializer.validated_data["password"]
            confirm_password = serializer.validated_data["confirm_password"]
            if password != confirm_password:
                raise ValidationError({"password": ["passwords must match"]})
            if re.search(username, password, re.IGNORECASE):
                raise ValidationError(
                    {"pasword": ['password contains username']})
            instance = User.objects.create_user(
                username=username, password=password, first_name=first_name, last_name=last_name, is_staff=is_staff)
            instance_serialized = UserRetrieveUpdateDestroySerializer(instance=instance, context={'request': request})
            return Response(data=instance_serialized.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    queryset = User.objects.all()
    serializer_class = UserRetrieveUpdateDestroySerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'
    
@api_view(['POST'])
def change_password(request, id):
    serializer = ChangePasswordSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        existing_password = serializer.validated_data['existing_password']
        new_password = serializer.validated_data['new_password']
        confirm_password = serializer.validated_data['confirm_password']
        user = get_object_or_404(User, id=id)
        if confirm_password != new_password:
            print("is inside")
            raise ValidationError(
                {"confirm_password": ['Both passwords do not match']})
        if new_password == existing_password:
            raise ValidationError(
                {"new_password": ['New password cant be same as last password']})
        if not user.check_password(existing_password):
            raise ValidationError(
                {"existing_password": ['Incorrect existing password']})
        if re.search(username, new_password, re.IGNORECASE):
            raise ValidationError({"pasword": ['password contains username']})
        user.set_password(new_password)
        user.save()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def reset_password(request, id):
    user = get_object_or_404(User, id=id)
    new_password = generate_password(20)
    user.set_password(new_password)
    user.save()
    return Response({'new_password': new_password}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)
        if not user:
            user = User.objects.filter(username=username).first()
            return Response(data={"password": "Incorrect Username or Password"}, status=status.HTTP_401_UNAUTHORIZED)
        Token.objects.filter(user=user).delete()
        token, created = Token.objects.get_or_create(user=user)
        instance_serialized = UserRetrieveUpdateDestroySerializer(
            instance=user, context={'request': request})
        return_data = {
            'token': token.key,
            'user': instance_serialized.data,
        }
        return Response(data=return_data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)