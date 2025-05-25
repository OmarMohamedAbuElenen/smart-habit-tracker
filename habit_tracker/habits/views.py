from datetime import date, timedelta

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import Habit, TagChoices
from .serializers import RegisterSerializer, HabitSerializer


class HabitsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        tag = request.query_params.get("tag")
        habits = Habit.objects.filter(user=request.user).order_by("-created_at")
        if tag and tag in dict(TagChoices.choices):
            habits = habits.filter(tag=tag)
        serializer = HabitSerializer(habits, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = HabitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HabitStreakView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        today = date.today()
        habits = Habit.objects.filter(user=request.user).order_by("-created_at")
        response = []
        habits_tag_streaks = {}

        for habit in habits:
            tag = habit.tag
            if tag in habits_tag_streaks:
                last_entry = habits_tag_streaks[tag]
                if habit.created_at.date() == (last_entry["date"] - timedelta(days=1)).date():
                    habits_tag_streaks[tag]["streak"] += 1
                    habits_tag_streaks[tag]["date"] -= timedelta(days=1)
            else:
                if habit.created_at.date() == today:
                    habits_tag_streaks[tag] = {"streak": 1, "date": habit.created_at}

        for tag, value in habits_tag_streaks.items():
            response.append({
                "tag": tag,
                "streak": value["streak"]
            })

        return Response(response)


class RegisterAPIView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully."},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
