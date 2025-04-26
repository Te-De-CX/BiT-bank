from django.db import models
from accounts.models import Account

class Card(models.Model):
    DEBIT = 'DEBIT'
    CREDIT = 'CREDIT'
    
    CARD_TYPE_CHOICES = [
        (DEBIT, 'Debit Card'),
        (CREDIT, 'Credit Card'),
    ]
    
    ACTIVE = 'ACTIVE'
    INACTIVE = 'INACTIVE'
    LOST = 'LOST'
    STOLEN = 'STOLEN'
    EXPIRED = 'EXPIRED'
    
    STATUS_CHOICES = [
        (ACTIVE, 'Active'),
        (INACTIVE, 'Inactive'),
        (LOST, 'Lost'),
        (STOLEN, 'Stolen'),
        (EXPIRED, 'Expired'),
    ]
    
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='cards')
    card_number = models.CharField(max_length=16, unique=True)
    card_type = models.CharField(max_length=10, choices=CARD_TYPE_CHOICES)
    expiry_date = models.DateField()
    cvv = models.CharField(max_length=4)
    issue_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=ACTIVE)
    daily_limit = models.DecimalField(max_digits=15, decimal_places=2, default=10000.00)
    
    def __str__(self):
        return f"{self.card_type} Card - {self.card_number[-4:]}"