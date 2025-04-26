from rest_framework import serializers
from .models import Card
from accounts.serializers import AccountSerializer

class CardSerializer(serializers.ModelSerializer):
    account_details = AccountSerializer(source='account', read_only=True)
    
    class Meta:
        model = Card
        fields = [
            'id', 'account', 'account_details', 'card_number', 'card_type', 
            'expiry_date', 'issue_date', 'status', 'daily_limit'
        ]
        read_only_fields = ['card_number', 'issue_date']
        extra_kwargs = {
            'account': {'write_only': True},
            'cvv': {'write_only': True},
        }