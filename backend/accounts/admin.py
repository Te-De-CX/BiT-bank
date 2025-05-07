from django.contrib import admin
from .models import Account, Beneficiary, CustomUser

# Register your models here.

admin.site.register(Account)
admin.site.register(Beneficiary)
admin.site.register(CustomUser)