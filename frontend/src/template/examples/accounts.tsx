import { useAccounts } from '../../lib/hooks/useAccounts';

function AccountsList() {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) return <div>Loading accounts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Your Accounts</h2>
      <ul>
        {accounts?.map(account => (
          <li key={account.id}>
            {account.account_number} - {account.account_type} - ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountsList;