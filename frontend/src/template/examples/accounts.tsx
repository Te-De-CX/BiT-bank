'use client'

import { useAccounts } from '../../lib/hooks/useAccounts';

function AccountsList() {
  const { data: accountsData, isLoading, error } = useAccounts();

  if (isLoading) return <div>Loading accounts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Safely get the accounts array
  const accounts = Array.isArray(accountsData) 
    ? accountsData 
    : Array.isArray(accountsData?.accounts) 
      ? accountsData.accounts 
      : [];

  return (
    <div>
      <h2>Your Accounts</h2>
      {accounts.length === 0 ? (
        <p>No accounts found</p>
      ) : (
        <ul>
          {accounts.map(account => (
            <li key={account.id}>
              {account.account_number} - {account.account_type} - ${account.balance}
            </li>
          ))}
        </ul>
      )}
    </div>
  );   
}

export default AccountsList;