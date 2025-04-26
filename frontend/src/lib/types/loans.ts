// types/loans.ts
export type LoanType = 'PERSONAL' | 'HOME' | 'AUTO' | 'BUSINESS';
export type LoanStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'DISBURSED' | 'COMPLETED';

export interface Loan {
  id: number;
  account: number;
  loan_type: LoanType;
  amount: number;
  interest_rate: number;
  term_months: number;
  start_date: string;
  status: LoanStatus;
  purpose?: string;
}

export interface LoanPayment {
  id: number;
  loan: number;
  amount: number;
  payment_date: string;
  principal_amount: number;
  interest_amount: number;
}

export interface LoanData {
  account: number;
  loan_type: LoanType;
  amount: number;
  interest_rate: number;
  term_months: number;
  start_date: string;
  purpose?: string;
}

export interface LoanPaymentData {
  amount: number;
}