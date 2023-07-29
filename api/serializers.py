from rest_framework import serializers
from .models import MailingList, Users


class MailingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailingList
        fields = ('id', 'email', 'link_token', 'created_at')

class CheckSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailingList
        fields = ('email',)

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'email', 'password', 'link_token', 'confirmation_sent', 'verified', 'created_at')

class CheckUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('email', 'password')
