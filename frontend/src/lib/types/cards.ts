// types/cards.ts
export interface Card {
    id: number;
    account: number;
    card_number: string;
    card_type: 'DEBIT' | 'CREDIT';
    expiry_date: string;
    cvv: string;
    issue_date: string;
    status: 'ACTIVE' | 'INACTIVE' | 'LOST' | 'STOLEN' | 'EXPIRED';
    daily_limit: number;
  }
  
  export interface CardData {
    account: number;
    card_type: 'DEBIT' | 'CREDIT';
  }
  
  export interface UpdateCardStatusData {
    status: 'ACTIVE' | 'INACTIVE' | 'LOST' | 'STOLEN' | 'EXPIRED';
  }