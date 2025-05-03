from django.db.models.signals import post_save
from django.dispatch import receiver
from transactions.models import Transaction
from .services import award_transaction_rewards

@receiver(post_save, sender=Transaction)
def handle_transaction_rewards(sender, instance, created, **kwargs):
    if created and instance.status == 'COMPLETED':
        # Award rewards for eligible transactions
        if instance.transaction_type in ['DEPOSIT', 'TRANSFER']:
            award_transaction_rewards(instance.account.user, instance.amount)