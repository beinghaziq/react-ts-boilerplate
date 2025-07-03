import { useAppSelector } from '../app/hooks';

export const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.auth); 
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};