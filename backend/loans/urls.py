from django.urls import path
from .views import (
    LoanListView,
    LoanDetailView,
    LoanPaymentListView
)

urlpatterns = [
    path('', LoanListView.as_view(), name='loan-list'),
    path('<int:pk>/', LoanDetailView.as_view(), name='loan-detail'),
    path('<int:loan_id>/payments/', LoanPaymentListView.as_view(), name='loan-payment-list'),
]