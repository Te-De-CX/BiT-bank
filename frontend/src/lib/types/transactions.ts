// types/transactions.ts
export type TransactionType = 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'BILL_PAYMENT';
export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

export interface Transaction {
  id: number;
  account: number;
  transaction_type: TransactionType;
  amount: number;
  timestamp: string;
  description?: string;
  status: TransactionStatus;
  reference: string;
  recipient_account?: number;
}

export interface TransferData {
  from_account: string;
  to_account: string;
  amount: number;
  description?: string;
}

export interface TransactionResponse {
  message: string;
  reference: string;
  from_account_balance: number;
  to_account_balance: number;
}