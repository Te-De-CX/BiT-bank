import { useAccountTransactions } from '../../lib/hooks/useTransactions';

function TransactionHistory({ accountId }: { accountId: number }) {
  const { data, isLoading, error } = useAccountTransactions(accountId);
  // console.log(data)

  if (isLoading) return <div className="p-4">Loading transactions...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  const transactions = data?.results || [];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Transaction History</h3>
      
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions found</p>
      ) : (
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {formatDate(transaction.timestamp)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900 capitalize">
                    {transaction.transaction_type.toLowerCase()}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {transaction.description || '-'}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 text-sm text-right font-medium ${
                    transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {formatCurrency(Math.abs(transaction.amount))}
                    {transaction.amount < 0 ? ' (Debit)' : ' (Credit)'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransactionHistory;