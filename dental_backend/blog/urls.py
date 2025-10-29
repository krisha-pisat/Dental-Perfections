from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet, basename='blogpost') 
#Register under 'posts'


urlpatterns = [
    path('', include(router.urls)),
]