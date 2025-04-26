from django.db import models
from django.core.validators import MinValueValidator
from decimal import Decimal
from accounts.models import Account

class Loan(models.Model):
    PERSONAL = 'PERSONAL'
    HOME = 'HOME'
    AUTO = 'AUTO'
    BUSINESS = 'BUSINESS'
    
    LOAN_TYPE_CHOICES = [
        (PERSONAL, 'Personal Loan'),
        (HOME, 'Home Loan'),
        (AUTO, 'Auto Loan'),
        (BUSINESS, 'Business Loan'),
    ]
    
    PENDING = 'PENDING'
    APPROVED = 'APPROVED'
    REJECTED = 'REJECTED'
    DISBURSED = 'DISBURSED'
    COMPLETED = 'COMPLETED'
    
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected'),
        (DISBURSED, 'Disbursed'),
        (COMPLETED, 'Completed'),
    ]
    
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='loans')
    loan_type = models.CharField(max_length=20, choices=LOAN_TYPE_CHOICES)
    amount = models.DecimalField(max_digits=15, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    term_months = models.IntegerField()
    start_date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=PENDING)
    purpose = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.account.user.username} - {self.loan_type} - {self.amount}"

class LoanPayment(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=15, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    payment_date = models.DateTimeField(auto_now_add=True)
    principal_amount = models.DecimalField(max_digits=15, decimal_places=2)
    interest_amount = models.DecimalField(max_digits=15, decimal_places=2)
    
    def __str__(self):
        return f"Payment for {self.loan} - {self.amount}"