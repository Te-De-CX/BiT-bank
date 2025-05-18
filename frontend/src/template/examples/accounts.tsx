'use client'

import { useAccounts } from '../../lib/hooks/useAccounts';

function AccountsList() {
  const { data: accountsData, isLoading, error } = useAccounts();
  
  if (isLoading) return <div>Loading accounts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Type-safe extraction of accounts
  const accounts = accountsData?.results || [];

  // Format balance for display (consider using a library like currency.js for production)
  const formatBalance = (balance: string) => {
    return parseFloat(balance).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Your Accounts</h2>
      {accounts.length === 0 ? (
        <p className="text-gray-500">No accounts found</p>
      ) : (
        <ul className="space-y-3">
          {accounts.map(account => (
            <li 
              key={account.id} 
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {account.account_number} - {account.account_type}
                  </p>
                  <p className="text-sm text-gray-500">
                    Opened: {new Date(account.date_opened).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  {formatBalance(account.balance)}
                </p>
              </div>
              {account.overdraft_limit !== "0.00" && (
                <p className="text-xs text-gray-500 mt-1">
                  Overdraft limit: {formatBalance(account.overdraft_limit)}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );   
}

export default AccountsList;