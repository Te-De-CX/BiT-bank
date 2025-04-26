from django.urls import path
from .views import (
    UserProfileView,
    AccountListView,
    AccountDetailView,
    BeneficiaryListView,
    BeneficiaryDetailView
)

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('accounts/', AccountListView.as_view(), name='account-list'),
    path('accounts/<int:pk>/', AccountDetailView.as_view(), name='account-detail'),
    path('beneficiaries/', BeneficiaryListView.as_view(), name='beneficiary-list'),
    path('beneficiaries/<int:pk>/', BeneficiaryDetailView.as_view(), name='beneficiary-detail'),
]