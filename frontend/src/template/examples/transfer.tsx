import { useTransfer } from '../../lib/hooks/useTransactions';
import { useForm } from 'react-hook-form';
import { TransferData } from '@/lib/types/transactions';

export default function TransferForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<TransferData>();
  const { mutate: transfer, isPending, error } = useTransfer();

  const onSubmit = (data: TransferData) => {
    transfer(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>From Account:</label>
        <input {...register('from_account', { required: 'Required' })} />
        {errors.from_account && <span>{errors.from_account.message}</span>}
      </div>
      
      <div>
        <label>To Account:</label>
        <input {...register('to_account', { required: 'Required' })} />
        {errors.to_account && <span>{errors.to_account.message}</span>}
      </div>
      
      <div>
        <label>Amount:</label>
        <input 
          type="number" 
          step="0.01" 
          {...register('amount', { 
            required: 'Required',
            min: { value: 0.01, message: 'Minimum amount is 0.01' }
          })} 
        />
        {errors.amount && <span>{errors.amount.message}</span>}
      </div>
      
      <div>
        <label>Description (optional):</label>
        <input {...register('description')} />
      </div>
      
      {error && <div className="error">{error.message}</div>}
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Processing...' : 'Transfer'}
      </button>
    </form>
  );
}