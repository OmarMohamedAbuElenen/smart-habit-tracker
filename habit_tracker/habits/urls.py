from django.urls import path
from .views import (
    HabitsView, HabitStreakView, RegisterAPIView
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('habits/', HabitsView.as_view(), name='habits-manager'),
    path('habits/streaks/', HabitStreakView.as_view(), name='habit-streaks'),
]