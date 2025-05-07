from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Account, Beneficiary
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

# accounts/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.db import transaction

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'phone_number', 'first_name', 'last_name', 'is_customer']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        try:
            with transaction.atomic():
                user = User.objects.create_user(
                    username=validated_data['username'],
                    password=validated_data['password'],
                    email=validated_data.get('email', ''),
                    phone_number=validated_data.get('phone_number', ''),
                    first_name=validated_data.get('first_name', ''),
                    last_name=validated_data.get('last_name', ''),
                    is_customer=validated_data.get('is_customer', True)
                )
                return user
        except Exception as e:
            raise serializers.ValidationError(str(e))

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