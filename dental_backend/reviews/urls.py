# reviews/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReviewViewSet

router = DefaultRouter()
# Corrected: Changed path from 'r'reviews'' to 'r''' to match frontend fetch
router.register(r'', ReviewViewSet, basename='review')

urlpatterns = [
    path('', include(router.urls)),
]