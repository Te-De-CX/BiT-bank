from django.urls import path
from .views import (
    SavingsAccountListView, RewardListView, UserRewardListView,
    CompetitionListView, JoinCompetitionView, RedeemRewardView,
    CalculateInterestView
)

urlpatterns = [
    path('savings-accounts/', SavingsAccountListView.as_view(), name='savings-account-list'),
    path('rewards/', RewardListView.as_view(), name='reward-list'),
    path('user-rewards/', UserRewardListView.as_view(), name='user-reward-list'),
    path('competitions/', CompetitionListView.as_view(), name='competition-list'),
    path('competitions/join/', JoinCompetitionView.as_view(), name='join-competition'),
    path('rewards/redeem/', RedeemRewardView.as_view(), name='redeem-reward'),
    path('savings-accounts/<int:account_id>/calculate-interest/', 
         CalculateInterestView.as_view(), name='calculate-interest'),
]