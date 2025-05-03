from django.utils import timezone
from decimal import Decimal
from .models import SavingsAccount, CompetitionParticipant
from accounts.models import Account
from .models import UserReward

def apply_interest_to_savings_accounts():
    """
    Cron job to apply interest to all eligible savings accounts
    """
    active_accounts = SavingsAccount.objects.filter(is_active=True)
    
    for account in active_accounts:
        # Calculate interest based on compounding frequency
        interest = account.account.balance * \
                  (account.interest_rate / Decimal('100')) / \
                  Decimal('12')  # Monthly compounding
        
        # Update account balance
        account.account.balance += interest
        account.account.save()
        
        # Create transaction record
        # (Implementation depends on your transactions app)

def update_competition_leaderboard(competition_id):
    """
    Update the leaderboard for a competition
    """
    participants = CompetitionParticipant.objects.filter(
        competition_id=competition_id
    ).select_related('user', 'competition')
    
    # Update savings amounts for all participants
    for participant in participants:
        # Get the participant's savings account balance
        # This assumes they have one savings account linked to the competition
        savings_account = SavingsAccount.objects.filter(
            account__user=participant.user
        ).first()
        
        if savings_account:
            participant.current_savings = savings_account.account.balance
            participant.save()
    
    # Determine winners (example: top 3 highest savers)
    winners = participants.order_by('-current_savings')[:3]
    for i, winner in enumerate(winners):
        winner.is_winner = True
        winner.save()
        
        # Award prizes (implementation depends on your system)
        # award_prize(winner.user, competition.prize_description)

def award_transaction_rewards(user, transaction_amount):
    """
    Award rewards points for eligible transactions
    """
    rewards = UserReward.objects.filter(user=user)
    
    for reward in rewards:
        points_earned = transaction_amount * reward.reward.points_ratio
        reward.points_balance += points_earned
        reward.save()