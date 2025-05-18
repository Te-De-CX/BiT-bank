// components/CardDetails.tsx
import { Card } from '@/lib/types/cards';

export default function CardDetails({ card }: { card: Card }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: '2-digit'
    });
  };

  const formatCurrency = (value: string) => {
    return parseFloat(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className={`p-4 ${card.card_type === 'CREDIT' ? 'bg-blue-600' : 'bg-gray-800'} text-white`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium capitalize">
              {card.card_type.toLowerCase()} card
            </h3>
            <p className="text-sm opacity-80">Daily Limit: {formatCurrency(card.daily_limit)}</p>
          </div>
          <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
            {card.status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Card Number</p>
            <p className="text-lg font-mono tracking-wider">
              •••• •••• •••• {card.card_number.slice(-4)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Expires</p>
            <p className="text-lg">{formatDate(card.expiry_date)}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Issued On</p>
            <p className="text-sm">{formatDate(card.issue_date)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">CVV</p>
            <p className="text-lg font-mono">•••</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 flex justify-end">
        <button 
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
          onClick={() => {
            // Implement card actions (freeze, report lost, etc.)
          }}
        >
          Manage Card
        </button>
      </div>
    </div>
  );
}