from django.shortcuts import render
# Create your views here.
# faq/views.py
from rest_framework import viewsets 
from .models import FaqCategory 
from .serializers import FaqCategorySerializer

class FaqCategoryViewSet(viewsets.ReadOnlyModelViewSet): 
    # ReadOnly because we manage via admin
    queryset = FaqCategory.objects.prefetch_related('items').all() 
    # Optimize query 
    serializer_class = FaqCategorySerializer