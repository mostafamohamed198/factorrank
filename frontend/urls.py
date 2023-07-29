from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('subscribed', index),
    path('unsubscribe/<str:email>/<str:link_token>', index),
    path('login', index),
    path('login-fail', index),
    path('signup', index),
    path('signup/verification-needed', index),
    path('signup/verify/<str:email>/<str:link_token>', index),
    path('signup/accountexists', index),
    path('home', index),
    path('oops', index)
]
