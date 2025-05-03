// types/savings.ts
export type SavingsAccountType = 'REGULAR' | 'HIGH_YIELD' | 'CERTIFICATE';
export type RewardType = 'POINTS' | 'CASHBACK' | 'MILES';
export type CompetitionStatus = 'UPCOMING' | 'ACTIVE' | 'ENDED';

export interface SavingsAccount {
  id: number;
  account_id: number;
  account_type: SavingsAccountType;
  interest_rate: number;
  minimum_balance: number;
  current_balance: number;
  opened_date: string;
}

export interface Reward {
  id: number;
  name: string;
  reward_type: RewardType;
  points_ratio: number;
  description: string;
}

export interface UserReward {
  id: number;
  reward_id: number;
  points_balance: number;
  last_updated: string;
  reward_details: Reward;
}

export interface Competition {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  status: CompetitionStatus;
  prize_description: string;
}

export interface CompetitionParticipant {
  id: number;
  current_savings: number;
  joined_at: string;
  is_winner: boolean;
}

export interface InterestCalculation {
  projected_interest: number;
  current_balance: number;
  interest_rate: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  details?: Record<string, unknown>;
}