// components/CreateCardForm.tsx
import { useCreateCard } from '../../lib/hooks/useCards';
import { useForm } from 'react-hook-form';
import { CardData } from '@/lib/types/cards';
import { toast } from 'react-toastify';
import { useAccounts } from '@/lib/hooks/useAccounts';

export default function CreateCardForm() {
  const { data: accounts } = useAccounts();
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CardData>();
  
  const { mutate: createCard, isPending } = useCreateCard();

  const onSubmit = (data: CardData) => {
    createCard(data, {
      onSuccess: () => {
        toast.success('Card created successfully!');
        reset();
      },
      onError: (error) => {
        toast.error(error.response || 'Failed to create card');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="account" className="block text-sm font-medium text-gray-700">
          Account
        </label>
        <select
          id="account"
          {...register('account', { required: 'Account is required' })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select account</option>
          {accounts?.results?.map((account) => (
            <option key={account.id} value={account.id}>
              {account.account_number} - {account.account_type} (${account.balance})
            </option>
          ))}
        </select>
        {errors.account && (
          <p className="mt-2 text-sm text-red-600">{errors.account.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="card_type" className="block text-sm font-medium text-gray-700">
          Card Type
        </label>
        <select
          id="card_type"
          {...register('card_type', { required: 'Card type is required' })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select card type</option>
          <option value="DEBIT">Debit Card</option>
          <option value="CREDIT">Credit Card</option>
        </select>
        {errors.card_type && (
          <p className="mt-2 text-sm text-red-600">{errors.card_type.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Creating...' : 'Create Card'}
      </button>
    </form>
  );
}