from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from .models import Account, Beneficiary
from .serializers import UserSerializer, AccountSerializer, BeneficiarySerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from decimal import Decimal
from .serializers import CustomTokenObtainPairSerializer

User = get_user_model()

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class AccountListView(generics.ListCreateAPIView):
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # Generate account number (in a real app, this would be more sophisticated)
        last_account = Account.objects.order_by('-id').first()
        new_account_number = str(int(last_account.account_number) + 1) if last_account else '1000000001'
        
        serializer.save(
            user=self.request.user,
            account_number=new_account_number,
            balance=Decimal('0.00')
        )

class AccountDetailView(generics.RetrieveAPIView):
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)

class BeneficiaryListView(generics.ListCreateAPIView):
    serializer_class = BeneficiarySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Beneficiary.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BeneficiaryDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = BeneficiarySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Beneficiary.objects.filter(user=self.request.user)