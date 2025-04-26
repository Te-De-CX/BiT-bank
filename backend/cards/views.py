from rest_framework import generics, permissions
from .models import Card
from .serializers import CardSerializer
from accounts.models import Account
from rest_framework.response import Response
from rest_framework import status
import random

class CardListView(generics.ListCreateAPIView):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Card.objects.filter(account__user=self.request.user)
    
    def perform_create(self, serializer):
        account_id = self.request.data.get('account')
        try:
            account = Account.objects.get(id=account_id, user=self.request.user)
            
            # Generate card details (in a real app, this would be more secure)
            card_number = ''.join([str(random.randint(0, 9)) for _ in range(16)])
            cvv = ''.join([str(random.randint(0, 9)) for _ in range(3)])
            
            serializer.save(
                account=account,
                card_number=card_number,
                cvv=cvv
            )
        except Account.DoesNotExist:
            return Response(
                {'error': 'Account not found or does not belong to you'},
                status=status.HTTP_400_BAD_REQUEST
            )

class CardDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Card.objects.filter(account__user=self.request.user)
    
    def perform_update(self, serializer):
        # Only allow status updates
        if 'status' in serializer.validated_data:
            serializer.save()
        else:
            return Response(
                {'error': 'Only status can be updated'},
                status=status.HTTP_400_BAD_REQUEST
            )