from django.shortcuts import render

from rest_framework import viewsets
from .models import BlogPost # Import from .models
from .serializers import BlogPostSerializer # Import from .serializers


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'