import { useCreateAccount } from '../../lib/hooks/useAccounts';
import { useForm } from 'react-hook-form';
import { AccountData } from '@/lib/types/accounts';

function CreateAccountForm() {
  const { register, handleSubmit } = useForm<AccountData>();
  const { mutate: createAccount, isPending } = useCreateAccount();

  const onSubmit = (data: AccountData) => {
    createAccount(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('account_type', { required: true })}>
        <option value="SAVINGS">Savings Account</option>
        <option value="CURRENT">Current Account</option>
      </select>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create Account'}
      </button>
    </form>
  );
}

export default CreateAccountForm;