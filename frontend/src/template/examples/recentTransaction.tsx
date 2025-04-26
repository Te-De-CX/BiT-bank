import { useRecentTransactions } from '../../lib/hooks/useTransactions';

function RecentTransactionsWidget() {
  const { data: transactions, isLoading, error } = useRecentTransactions();

  if (isLoading) return <div>Loading recent transactions...</div>;
  if (error) return <div>Error loading transactions</div>;

  return (
    <div className="dashboard-widget">
      <h3>Recent Activity</h3>
      <ul>
        {transactions?.map(transaction => (
          <li key={transaction.id}>
            <div>{transaction.transaction_type}</div>
            <div>${transaction.amount.toFixed(2)}</div>
            <div>{new Date(transaction.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactionsWidget;