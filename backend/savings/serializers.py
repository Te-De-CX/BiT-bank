from rest_framework import serializers
from .models import SavingsAccount, Reward, UserReward, Competition, CompetitionParticipant

class SavingsAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsAccount
        fields = '__all__'
        read_only_fields = ['account', 'opened_date']

class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = '__all__'

class UserRewardSerializer(serializers.ModelSerializer):
    reward_details = RewardSerializer(source='reward', read_only=True)
    
    class Meta:
        model = UserReward
        fields = ['id', 'user', 'reward', 'reward_details', 'points_balance', 'last_updated']
        read_only_fields = ['user', 'last_updated']

class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = '__all__'
        read_only_fields = ['is_active']

class CompetitionParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompetitionParticipant
        fields = '__all__'
        read_only_fields = ['user', 'joined_at', 'current_savings', 'is_winner']

class JoinCompetitionSerializer(serializers.Serializer):
    competition_id = serializers.IntegerField()
    savings_account_id = serializers.IntegerField()

class RedeemRewardSerializer(serializers.Serializer):
    reward_id = serializers.IntegerField()
    points_to_redeem = serializers.DecimalField(max_digits=15, decimal_places=2)