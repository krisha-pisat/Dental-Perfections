# faq/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FaqCategoryViewSet

router = DefaultRouter()
# Corrected: FaqCategoryViewSet is now properly registered
router.register(r'categories', FaqCategoryViewSet, basename='faqcategory')

urlpatterns = [
    path('', include(router.urls)),
]