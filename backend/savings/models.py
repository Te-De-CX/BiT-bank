from django.db import models
from django.core.validators import MinValueValidator
from decimal import Decimal
from accounts.models import Account

class SavingsAccount(models.Model):
    REGULAR = 'REGULAR'
    HIGH_YIELD = 'HIGH_YIELD'
    CERTIFICATE = 'CERTIFICATE'
    
    ACCOUNT_TYPES = [
        (REGULAR, 'Regular Savings'),
        (HIGH_YIELD, 'High-Yield Savings'),
        (CERTIFICATE, 'Certificate of Deposit'),
    ]
    
    account = models.OneToOneField(Account, on_delete=models.CASCADE, related_name='savings_account')
    account_type = models.CharField(max_length=20, choices=ACCOUNT_TYPES, default=REGULAR)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    minimum_balance = models.DecimalField(max_digits=15, decimal_places=2, validators=[MinValueValidator(Decimal('0.00'))])
    compounding_frequency = models.CharField(max_length=20, default='MONTHLY')
    is_active = models.BooleanField(default=True)
    opened_date = models.DateTimeField(auto_now_add=True)
    maturity_date = models.DateTimeField(null=True, blank=True)

class Reward(models.Model):
    POINTS = 'POINTS'
    CASHBACK = 'CASHBACK'
    MILES = 'MILES'
    
    REWARD_TYPES = [
        (POINTS, 'Points'),
        (CASHBACK, 'Cashback'),
        (MILES, 'Miles'),
    ]
    
    name = models.CharField(max_length=100)
    reward_type = models.CharField(max_length=20, choices=REWARD_TYPES)
    description = models.TextField()
    points_ratio = models.DecimalField(max_digits=10, decimal_places=2)  # e.g., 1 point per $1 spent
    is_active = models.BooleanField(default=True)

class UserReward(models.Model):
    user = models.ForeignKey('accounts.CustomUser', on_delete=models.CASCADE, related_name='rewards')
    reward = models.ForeignKey(Reward, on_delete=models.CASCADE)
    points_balance = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    last_updated = models.DateTimeField(auto_now=True)

class Competition(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    prize_description = models.TextField()
    max_participants = models.PositiveIntegerField(null=True, blank=True)
    min_savings_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0)

class CompetitionParticipant(models.Model):
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE, related_name='participants')
    user = models.ForeignKey('accounts.CustomUser', on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)
    current_savings = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    is_winner = models.BooleanField(default=False)