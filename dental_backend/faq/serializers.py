# faq/serializers.py
from rest_framework import serializers
from .models import FaqCategory, FaqItem

class FaqItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FaqItem
        fields = ['id', 'question', 'answer', 'item_order'] # Include fields you need

class FaqCategorySerializer(serializers.ModelSerializer):
    # Nest the items within each category
    items = FaqItemSerializer(many=True, read_only=True)

    class Meta:
        model = FaqCategory
        fields = ['id', 'name', 'display_order', 'items'] # Include category fields and nested items