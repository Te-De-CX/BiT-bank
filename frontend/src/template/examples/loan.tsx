import { useLoans } from '../../lib/hooks/useLoans';

function LoansList() {
  const { data: loans, isLoading, error } = useLoans();

  if (isLoading) return <div>Loading loans...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Your Loans</h2>
      <ul>
        {loans?.map(loan => (
          <li key={loan.id}>
            {loan.loan_type} - ${loan.amount} - Status: {loan.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoansList;