from django.urls import path
from .views import (
    TransactionListView,
    TransactionDetailView,
    TransferView
)

urlpatterns = [
    path('accounts/<int:account_id>/transactions/', TransactionListView.as_view(), name='transaction-list'),
    path('transactions/<int:pk>/', TransactionDetailView.as_view(), name='transaction-detail'),
    path('transfer/', TransferView.as_view(), name='transfer'),
]