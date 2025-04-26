from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Account, Beneficiary
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'phone_number', 'first_name', 'last_name', 'is_customer', 'is_staff']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # Add custom claims
        token['is_customer'] = user.is_customer
        token['is_staff'] = user.is_staff
        token['username'] = user.username
        
        return token

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'account_number', 'account_type', 'balance', 'date_opened', 'is_active', 'overdraft_limit']
        read_only_fields = ['account_number', 'date_opened', 'balance']

class BeneficiarySerializer(serializers.ModelSerializer):
    account_details = AccountSerializer(source='account', read_only=True)
    
    class Meta:
        model = Beneficiary
        fields = ['id', 'account', 'account_details', 'nickname', 'added_on']
        extra_kwargs = {'account': {'write_only': True}}