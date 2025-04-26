from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Transaction
from accounts.models import Account
from .serializers import TransactionSerializer, TransferSerializer
from decimal import Decimal
import random
import string

class TransactionListView(generics.ListAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        account_id = self.kwargs.get('account_id')
        return Transaction.objects.filter(account__user=self.request.user, account_id=account_id)

class TransactionDetailView(generics.RetrieveAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Transaction.objects.filter(account__user=self.request.user)

class TransferView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        serializer = TransferSerializer(data=request.data)
        if serializer.is_valid():
            from_account_number = serializer.validated_data['from_account']
            to_account_number = serializer.validated_data['to_account']
            amount = serializer.validated_data['amount']
            description = serializer.validated_data.get('description', '')
            
            try:
                from_account = Account.objects.get(
                    account_number=from_account_number,
                    user=request.user
                )
            except Account.DoesNotExist:
                return Response(
                    {'error': 'Source account not found or does not belong to you'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            try:
                to_account = Account.objects.get(account_number=to_account_number)
            except Account.DoesNotExist:
                return Response(
                    {'error': 'Recipient account not found'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            if from_account.balance < amount:
                return Response(
                    {'error': 'Insufficient funds'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Generate unique reference
            reference = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
            
            # Create withdrawal transaction
            withdrawal = Transaction.objects.create(
                account=from_account,
                transaction_type='TRANSFER',
                amount=amount,
                description=description,
                status='COMPLETED',
                reference=f"OUT-{reference}",
                recipient_account=to_account
            )
            
            # Create deposit transaction
            deposit = Transaction.objects.create(
                account=to_account,
                transaction_type='TRANSFER',
                amount=amount,
                description=description,
                status='COMPLETED',
                reference=f"IN-{reference}",
                recipient_account=from_account
            )
            
            # Update balances
            from_account.balance -= amount
            to_account.balance += amount
            
            from_account.save()
            to_account.save()
            
            return Response({
                'message': 'Transfer successful',
                'reference': reference,
                'from_account_balance': from_account.balance,
                'to_account_balance': to_account.balance
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)