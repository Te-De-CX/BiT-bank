import { useUpdateCardStatus } from '../../lib/hooks/useCards';

function CardStatusUpdater({ cardId }: { cardId: number }) {
  const { mutate: updateStatus } = useUpdateCardStatus(cardId);

  const handleStatusChange = (newStatus: 'ACTIVE' | 'INACTIVE') => {
    updateStatus({ status: newStatus });
  };

  return (
    <div>
      <button onClick={() => handleStatusChange('ACTIVE')}>Activate</button>
      <button onClick={() => handleStatusChange('INACTIVE')}>Deactivate</button>
    </div>
  );
}

export default CardStatusUpdater;