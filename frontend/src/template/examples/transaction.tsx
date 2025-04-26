import { useAccountTransactions } from '../../lib/hooks/useTransactions';

function TransactionHistory({ accountId }: { accountId: number }) {
  const { data: transactions, isLoading, error } = useAccountTransactions(accountId);

  if (isLoading) return <div>Loading transactions...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions?.map(transaction => (
          <li key={transaction.id}>
            {transaction.timestamp} - {transaction.transaction_type}: ${transaction.amount}
            {transaction.description && ` (${transaction.description})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;