import { useMakeLoanPayment } from '../../lib/hooks/useLoans';
import { useState } from 'react';

export default function LoanPaymentForm({ loanId }: { loanId: number }) {
  const [amount, setAmount] = useState('');
  const { mutate: makePayment, isPending } = useMakeLoanPayment(loanId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    makePayment({ amount: parseFloat(amount) });
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Payment amount"
        min="0.01"
        step="0.01"
        required
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Processing...' : 'Make Payment'}
      </button>
    </form>
  );
}