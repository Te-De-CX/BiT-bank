// pages/cards.tsx
import { useCards } from '@/lib/hooks/useCards';
import CardDetails from './cardDetail';
import Link from 'next/link';

export default function CardsPage() {
  const { data: cardsData, isLoading, error } = useCards();
  
  console.log('Accounts data:', JSON.stringify(cardsData, null, 2));
  
  const cards = cardsData?.results || [];

  if (isLoading) return <div className="p-4">Loading your cards...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Cards</h1>
        <Link 
          href="/cards/new" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Request New Card
        </Link>
      </div>
      
      {cards?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">You don&apos;t have any cards yet.</p>
          <Link 
            href="/cards/new" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Request Your First Card
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards?.map((card) => (
            <CardDetails key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}