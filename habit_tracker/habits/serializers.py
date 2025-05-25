from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Habit, TagChoices


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['username', 'password']

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("This username is already taken.")
        return value

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ['id', 'name', 'tag', 'created_at']
        read_only_fields = ['created_at']

    def validate_tag(self, value):
        if value not in dict(TagChoices.choices):
            raise serializers.ValidationError(
                f"Invalid tag '{value}'."
            )
        return value