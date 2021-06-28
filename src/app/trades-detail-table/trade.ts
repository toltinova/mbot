export interface Trades {
  totalCount: number;
  trades: Trade[];
}

export interface Trade {
  id: number;
  currency: string;
  amount: number;
  timestamp: string;
  price: number;
}
