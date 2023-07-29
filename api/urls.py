from django.urls import path
from .views import SignUpView, SubscribeView, UnsubscribeView, LogInView, VerifyView

urlpatterns = [
    path('subscribe', SubscribeView.as_view()),
    path('unsubscribe', UnsubscribeView.as_view()),
    path('signup', SignUpView.as_view()),
    path('verify', VerifyView.as_view()),
    path('login', LogInView.as_view())
]
