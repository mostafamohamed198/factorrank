import string
import random
from django.db import models

def generate_link_token():
    link_token = ''.join(random.choices(string.ascii_letters, k=6))
    return link_token

class MailingList(models.Model):
    email = models.EmailField(unique=True, null=False)
    link_token = models.CharField(max_length=8, default=generate_link_token())
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = 'mailing_list'

class Users(models.Model):
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=200)
    link_token = models.CharField(max_length=8, default=generate_link_token())
    confirmation_sent = models.BooleanField(null=False, default=False)
    verified = models.BooleanField(null=False, default=False)
    tier = models.IntegerField(null=False, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = 'users'