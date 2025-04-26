import { useBeneficiaries, useRemoveBeneficiary } from '../../lib/hooks/useAccounts';

function BeneficiariesList() {
  const { data: beneficiaries, isLoading, error } = useBeneficiaries();
  const { mutate: removeBeneficiary } = useRemoveBeneficiary();

  if (isLoading) return <div>Loading beneficiaries...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Your Beneficiaries</h2>
      <ul>
        {beneficiaries?.map(beneficiary => (
          <li key={beneficiary.id}>
            {beneficiary.nickname} - {beneficiary.account.account_number}
            <button onClick={() => removeBeneficiary(beneficiary.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeneficiariesList;