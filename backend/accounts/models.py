from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from decimal import Decimal

class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=15, unique=True)
    date_of_birth = models.DateField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    id_number = models.CharField(max_length=20, unique=True, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    
    def __str__(self):
        return self.username

class Account(models.Model):
    SAVINGS = 'SAVINGS'
    CURRENT = 'CURRENT'
    FIXED_DEPOSIT = 'FIXED_DEPOSIT'
    
    ACCOUNT_TYPE_CHOICES = [
        (SAVINGS, 'Savings Account'),
        (CURRENT, 'Current Account'),
        (FIXED_DEPOSIT, 'Fixed Deposit Account'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    account_number = models.CharField(max_length=20, unique=True)
    account_type = models.CharField(max_length=20, choices=ACCOUNT_TYPE_CHOICES, default=SAVINGS)
    balance = models.DecimalField(max_digits=15, decimal_places=2, default=0.00, validators=[MinValueValidator(Decimal('0.00'))])
    date_opened = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    overdraft_limit = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    
    def __str__(self):
        return f"{self.account_number} - {self.user.username}"

class Beneficiary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='beneficiaries')
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='beneficiary_accounts')
    nickname = models.CharField(max_length=100)
    added_on = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('user', 'account')
    
    def __str__(self):
        return f"{self.nickname} - {self.account.account_number}"