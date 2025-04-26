import { useCreateLoan } from '../../lib/hooks/useLoans';
import { useForm } from 'react-hook-form';
import { LoanData } from '@/lib/types/loans';

export default function CreateLoanForm() {
  const { register, handleSubmit } = useForm<LoanData>();
  const { mutate: createLoan, isPending } = useCreateLoan();

  const onSubmit = (data: LoanData) => {
    createLoan(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('loan_type', { required: true })}>
        <option value="PERSONAL">Personal Loan</option>
        <option value="HOME">Home Loan</option>
        <option value="AUTO">Auto Loan</option>
        <option value="BUSINESS">Business Loan</option>
      </select>
      <input type="number" {...register('amount', { required: true, min: 1 })} />
      <input type="number" step="0.01" {...register('interest_rate', { required: true, min: 0 })} />
      <input type="number" {...register('term_months', { required: true, min: 1 })} />
      <input type="date" {...register('start_date', { required: true })} />
      <textarea {...register('purpose')} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Apply for Loan'}
      </button>
    </form>
  );
}