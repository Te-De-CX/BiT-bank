from django.contrib import admin
from .models import SavingsAccount, Reward, UserReward, Competition, CompetitionParticipant

@admin.register(SavingsAccount)
class SavingsAccountAdmin(admin.ModelAdmin):
    list_display = ('account', 'account_type', 'interest_rate', 'is_active')
    list_filter = ('account_type', 'is_active')
    search_fields = ('account__account_number', 'account__user__username')

@admin.register(Reward)
class RewardAdmin(admin.ModelAdmin):
    list_display = ('name', 'reward_type', 'points_ratio', 'is_active')
    list_filter = ('reward_type', 'is_active')

@admin.register(Competition)
class CompetitionAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'is_active')
    list_filter = ('is_active',)

admin.site.register(UserReward)
admin.site.register(CompetitionParticipant)