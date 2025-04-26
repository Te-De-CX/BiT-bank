import { useUserProfile } from '../../lib/hooks/useAuth';

function UserProfileComponent() {
  const { data: user, isLoading, error } = useUserProfile();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Welcome, {user?.first_name} {user?.last_name}</h1>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone_number}</p>
    </div>
  );
}

export default UserProfileComponent;