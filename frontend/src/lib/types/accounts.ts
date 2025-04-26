// types/accounts.ts
export interface Account {
    id: number;
    account_number: string;
    account_type: string;
    balance: number;
    date_opened: string;
    is_active: boolean;
    overdraft_limit: number;
    user: number;
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