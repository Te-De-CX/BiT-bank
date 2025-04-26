from rest_framework import serializers
from .models import Loan, LoanPayment
from accounts.serializers import AccountSerializer

class LoanSerializer(serializers.ModelSerializer):
    account_details = AccountSerializer(source='account', read_only=True)
    
    class Meta:
        model = Loan
        fields = [
            'id', 'account', 'account_details', 'loan_type', 'amount', 
            'interest_rate', 'term_months', 'start_date', 'status', 'purpose'
        ]
        read_only_fields = ['status']
        extra_kwargs = {'account': {'write_only': True}}

class LoanPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanPayment
        fields = ['id', 'loan', 'amount', 'payment_date', 'principal_amount', 'interest_amount']
        read_only_fields = ['payment_date', 'principal_amount', 'interest_amount']