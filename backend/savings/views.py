from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SavingsAccount, Reward, UserReward, Competition, CompetitionParticipant
from .serializers import (
    SavingsAccountSerializer, RewardSerializer, UserRewardSerializer,
    CompetitionSerializer, CompetitionParticipantSerializer,
    JoinCompetitionSerializer, RedeemRewardSerializer
)
from accounts.models import Account
from django.utils import timezone
from decimal import Decimal

class SavingsAccountListView(generics.ListCreateAPIView):
    serializer_class = SavingsAccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return SavingsAccount.objects.filter(account__user=self.request.user)

    def perform_create(self, serializer):
        account = Account.objects.get(
            id=self.request.data.get('account'),
            user=self.request.user
        )
        serializer.save(account=account)

class RewardListView(generics.ListAPIView):
    serializer_class = RewardSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Reward.objects.filter(is_active=True)

class UserRewardListView(generics.ListAPIView):
    serializer_class = UserRewardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserReward.objects.filter(user=self.request.user)

class CompetitionListView(generics.ListAPIView):
    serializer_class = CompetitionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        now = timezone.now()
        return Competition.objects.filter(
            is_active=True,
            start_date__lte=now,
            end_date__gte=now
        )

class JoinCompetitionView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = JoinCompetitionSerializer(data=request.data)
        if serializer.is_valid():
            competition = Competition.objects.get(
                id=serializer.validated_data['competition_id'],
                is_active=True,
                start_date__lte=timezone.now(),
                end_date__gte=timezone.now()
            )
            
            # Check if competition has space
            if competition.max_participants and \
               competition.participants.count() >= competition.max_participants:
                return Response(
                    {'error': 'Competition is full'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Check if user already joined
            if CompetitionParticipant.objects.filter(
                competition=competition,
                user=request.user
            ).exists():
                return Response(
                    {'error': 'Already joined this competition'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Check minimum savings requirement
            savings_account = SavingsAccount.objects.get(
                id=serializer.validated_data['savings_account_id'],
                account__user=request.user
            )
            if savings_account.account.balance < competition.min_savings_amount:
                return Response(
                    {'error': 'Insufficient savings to join competition'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Create participant
            participant = CompetitionParticipant.objects.create(
                competition=competition,
                user=request.user,
                current_savings=savings_account.account.balance
            )

            return Response(
                CompetitionParticipantSerializer(participant).data,
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RedeemRewardView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = RedeemRewardSerializer(data=request.data)
        if serializer.is_valid():
            user_reward = UserReward.objects.get(
                reward_id=serializer.validated_data['reward_id'],
                user=request.user
            )
            
            if user_reward.points_balance < serializer.validated_data['points_to_redeem']:
                return Response(
                    {'error': 'Insufficient points balance'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Process redemption (implementation depends on reward type)
            # This would be connected to your actual reward fulfillment system
            user_reward.points_balance -= serializer.validated_data['points_to_redeem']
            user_reward.save()

            return Response(
                {'message': 'Reward redemption processed successfully'},
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CalculateInterestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, account_id):
        savings_account = SavingsAccount.objects.get(
            id=account_id,
            account__user=request.user
        )
        
        # Calculate interest based on account type and compounding frequency
        # This is a simplified example - actual implementation would be more complex
        interest = savings_account.account.balance * \
                   (savings_account.interest_rate / Decimal('100'))
        
        return Response(
            {'estimated_interest': interest},
            status=status.HTTP_200_OK
        )