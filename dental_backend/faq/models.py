from django.db import models

# Create your models here.
# faq/models.py
from django.db import models

class FaqCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    # Add an order field if you want to control the display order
    display_order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['display_order', 'name'] # Order categories
        verbose_name_plural = "FAQ Categories" # Nicer name in admin

class FaqItem(models.Model):
    category = models.ForeignKey(FaqCategory, related_name='items', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)
    answer = models.TextField()
    # Add an order field within categories if needed
    item_order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.question

    class Meta:
        ordering = ['category__display_order', 'item_order', 'question'] # Order items