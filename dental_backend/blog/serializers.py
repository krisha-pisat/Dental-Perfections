# blog/serializers.py
from rest_framework import serializers
from .models import BlogPost # Import from .models

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'