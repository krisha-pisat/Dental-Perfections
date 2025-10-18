

from django.db import models

class Review(models.Model):
    patient_name = models.CharField(max_length=100)
    review_text = models.TextField()
    rating = models.IntegerField(default=5) # A rating from 1 to 5

    def __str__(self):
        return self.patient_name