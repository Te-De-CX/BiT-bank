import { useCreateCard } from '../../lib/hooks/useCards';
import { useForm } from 'react-hook-form';
import { CardData } from '@/lib/types/cards';

export default function CreateCardForm() {
  const { register, handleSubmit } = useForm<CardData>();
  const { mutate: createCard, isPending } = useCreateCard();

  const onSubmit = (data: CardData) => {
    createCard(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('card_type', { required: true })}>
        <option value="DEBIT">Debit Card</option>
        <option value="CREDIT">Credit Card</option>
      </select>
      <input type="number" {...register('account', { required: true })} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Card'}
      </button>
    </form>
  );
}