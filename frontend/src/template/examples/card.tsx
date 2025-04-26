import { useCards } from '../../lib/hooks/useCards';

function CardsList() {
  const { data: cards, isLoading, error } = useCards();

  if (isLoading) return <div>Loading cards...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Your Cards</h2>
      <ul>
        {cards?.map(card => (
          <li key={card.id}>
            {card.card_type} Card - **** **** **** {card.card_number.slice(-4)}
            <span>Status: {card.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardsList;