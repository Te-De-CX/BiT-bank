// types/accounts.ts
// types/accounts.ts
export interface Account {
  id: number;
  account_number: string;
  account_type: string;
  balance: string; // Note: API returns this as string
  date_opened: string;
  is_active: boolean;
  overdraft_limit: string; // Note: API returns this as string
  user?: number; // Optional if not present in your response
}

export interface AccountsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Account[];
}
  
  export interface Beneficiary {
    id: number;
    account: Account;
    nickname: string;
    added_on: string;
    user: number;
  }
  
  export interface AccountData {
    account_type: string;
  }
  
  export interface BeneficiaryData {
    account: number;
    nickname: string;
  }