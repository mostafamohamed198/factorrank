import bcrypt
from django.shortcuts import render
from rest_framework import generics, status
from .models import MailingList, Users
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MailingListSerializer, CheckSubscriberSerializer, UsersSerializer, CheckUserSerializer


class SubscribeView(APIView):
    serializer_class = CheckSubscriberSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            queryset = MailingList.objects.filter(email=email)
            if queryset.exists():
                return Response("Already subscribed", status=status.HTTP_200_OK)
            else:
                subscriber = MailingList(email=email)
                subscriber.save()
            return Response(MailingListSerializer(subscriber).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class UnsubscribeView(APIView):
    serializer_class = MailingListSerializer
    def get(self, request, format=None):
        email = request.GET.get("email")
        token = request.GET.get("token")
        if email != None:
            queryset = MailingList.objects.filter(email=email)
            if queryset.exists():
                subscriber = queryset.first()
                if subscriber.link_token == token:
                    subscriber.delete()
                subscriber = MailingList.objects.filter(email=email)
                if len(subscriber) == 0:
                    return Response("Unsubscribe successful", status=status.HTTP_200_OK)
                return Response({'Bad Request': 'Subscriber not unsubscribed'}, status=status.HTTP_400_BAD_REQUEST)
            return Response({'Bad Request': 'Subscriber not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Email not provided'}, status=status.HTTP_400_BAD_REQUEST)


class SignUpView(APIView):
    serializer_class = CheckUserSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            queryset = Users.objects.filter(email=email)
            if queryset.exists():
                user = queryset[0]
                return Response(UsersSerializer(user).data, status=status.HTTP_400_BAD_REQUEST)
            else:
                password = password.encode('utf-8')
                salt = bcrypt.gensalt()
                password = bcrypt.hashpw(password, salt)
                user = Users(email=email, password=password)
                user.save()
            return Response(UsersSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
    

class VerifyView(APIView):
    def get(self, request, format=None):
        email = request.GET.get("email")
        token = request.GET.get("token")
        if email != None:
            queryset = Users.objects.filter(email=email)
            if queryset.exists():
                user = queryset.first()
                if user.link_token == token:
                    user.verified = True
                    user.save()
                    return Response("Verification successful", status=status.HTTP_200_OK)
            return Response({'Bad Request': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Email not provided'}, status=status.HTTP_400_BAD_REQUEST)


class LogInView(APIView):
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        email = request.data.get('email')
        password = (request.data.get('password')).encode('utf-8')
        queryset = Users.objects.filter(email=email)
        if queryset.exists():
            user = queryset.first()
            user.password = user.password.encode('utf-8')
            if bcrypt.checkpw(password, eval(user.password)):
                if user.verified:
                    self.request.session['logged_in'] = True
                    self.request.session['current_user'] = email
                    return Response(UsersSerializer(user).data, status=status.HTTP_200_OK)
                else:
                    return Response({'Bad Request': 'User not verified'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'Bad Request': 'Incorrect password'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'Bad Request': 'User not found'}, status=status.HTTP_400_BAD_REQUEST)