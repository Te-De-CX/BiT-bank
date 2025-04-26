from rest_framework import generics, permissions
from .models import Loan, LoanPayment
from .serializers import LoanSerializer, LoanPaymentSerializer
from accounts.models import Account
from rest_framework.response import Response
from rest_framework import status
from decimal import Decimal

class LoanListView(generics.ListCreateAPIView):
    serializer_class = LoanSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Loan.objects.filter(account__user=self.request.user)
    
    def perform_create(self, serializer):
        account_id = self.request.data.get('account')
        try:
            account = Account.objects.get(id=account_id, user=self.request.user)
            serializer.save(account=account)
        except Account.DoesNotExist:
            return Response(
                {'error': 'Account not found or does not belong to you'},
                status=status.HTTP_400_BAD_REQUEST
            )

class LoanDetailView(generics.RetrieveAPIView):
    serializer_class = LoanSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Loan.objects.filter(account__user=self.request.user)

class LoanPaymentListView(generics.ListCreateAPIView):
    serializer_class = LoanPaymentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        loan_id = self.kwargs.get('loan_id')
        return LoanPayment.objects.filter(loan__id=loan_id, loan__account__user=self.request.user)
    
    def perform_create(self, serializer):
        loan_id = self.kwargs.get('loan_id')
        try:
            loan = Loan.objects.get(id=loan_id, account__user=self.request.user)
            
            # In a real app, calculate principal and interest properly
            payment_amount = serializer.validated_data['amount']
            principal_amount = payment_amount * Decimal('0.7')  # Example calculation
            interest_amount = payment_amount * Decimal('0.3')   # Example calculation
            
            serializer.save(
                loan=loan,
                principal_amount=principal_amount,
                interest_amount=interest_amount
            )
            
            # Update loan status if fully paid (simplified)
            # In a real app, you'd track remaining balance
            loan.status = 'COMPLETED'
            loan.save()
            
        except Loan.DoesNotExist:
            return Response(
                {'error': 'Loan not found or does not belong to you'},
                status=status.HTTP_400_BAD_REQUEST
            )