from django.db import models

class Inquiry(models.Model):
    
    name = models.CharField(max_length=200, blank=False, null=False)
    phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    purpose = models.CharField(max_length=35, blank=False, null=False)
    desc = models.CharField(max_length=500, blank=True, null=True)
    submitted_on = models.DateTimeField(auto_now_add=True)
    last_updated_on = models.DateTimeField(auto_now=True)
    acknowledged = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-id']
