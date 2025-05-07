from rest_framework import serializers
from .models import Transaction
from accounts.serializers import AccountSerializer

class TransactionSerializer(serializers.ModelSerializer):
    account_details = AccountSerializer(source='account', read_only=True)
    recipient_account_details = AccountSerializer(source='recipient_account', read_only=True)
    
    class Meta:
        model = Transaction
        fields = [
            'id', 'account', 'account_details', 'transaction_type', 'amount', 
            'timestamp', 'description', 'status', 'reference', 
            'recipient_account', 'recipient_account_details'
        ]
        extra_kwargs = {
            'account': {'write_only': True},
            'recipient_account': {'write_only': True},
        }
    
    def validate(self, data):
        if data['transaction_type'] == 'TRANSFER' and 'recipient_account' not in data:
            raise serializers.ValidationError("Recipient account is required for transfers")
        return data

class TransferSerializer(serializers.Serializer):
    from_account = serializers.CharField()
    to_account = serializers.CharField()
    # amount = serializers.DecimalField(max_digits=15, decimal_places=2, min_value=1)
    amount = serializers.IntegerField()
    description = serializers.CharField(required=False, allow_blank=True)
    
    def validate(self, data):
        if data['from_account'] == data['to_account']:
            raise serializers.ValidationError("Cannot transfer to the same account")
        return data