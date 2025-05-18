from django.db import IntegrityError
from rest_framework import generics, permissions
from .models import Card
from .serializers import CardSerializer
from accounts.models import Account
from rest_framework.response import Response
from rest_framework import status
import random
from datetime import datetime, timedelta
from django.db.models import Q

class CardListView(generics.ListCreateAPIView):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Card.objects.filter(account__user=self.request.user).order_by('-issue_date')
    
    def create(self, request, *args, **kwargs):
        account_id = request.data.get('account')
        card_type = request.data.get('card_type')
        
        # Input validation
        if not account_id:
            return Response(
                {'error': 'Account ID is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if not card_type or card_type not in dict(Card.CARD_TYPE_CHOICES).keys():
            return Response(
                {'error': 'Valid card type is required (DEBIT or CREDIT)'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            account = Account.objects.get(id=account_id, user=request.user)
        except Account.DoesNotExist:
            return Response(
                {'error': 'Account not found or does not belong to you'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Generate card details with retry for uniqueness
        max_attempts = 5
        for attempt in range(max_attempts):
            try:
                # Generate realistic card details
                card_number = self.generate_valid_card_number()
                cvv = f"{random.randint(0, 999):03d}"
                expiry_date = (datetime.now() + timedelta(days=365*3)).date()  # 3 years from now
                
                # Create the card
                card = Card.objects.create(
                    account=account,
                    card_type=card_type,
                    card_number=card_number,
                    cvv=cvv,
                    expiry_date=expiry_date,
                    status=Card.ACTIVE,
                    daily_limit=10000.00
                )
                
                # Return the serialized response
                serializer = self.get_serializer(card)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
                
            except IntegrityError as e:
                if 'card_number' in str(e) and attempt < max_attempts - 1:
                    continue  # Try again if card number collision
                return Response(
                    {'error': 'Failed to create card. Please try again.'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            except Exception as e:
                return Response(
                    {'error': str(e)},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        return Response(
            {'error': 'Failed to generate unique card number after multiple attempts'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
    def generate_valid_card_number(self):
        """Generate a valid card number using Luhn algorithm"""
        # Generate first 15 digits
        partial = ''.join(str(random.randint(0, 9)) for _ in range(15))
        
        # Calculate Luhn check digit
        total = 0
        for i, ch in enumerate(partial):
            digit = int(ch)
            if i % 2 == 0:  # Double every other digit starting from first
                digit *= 2
                if digit > 9:
                    digit = digit - 9
            total += digit
        
        check_digit = (10 - (total % 10)) % 10
        return f"{partial}{check_digit}"

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