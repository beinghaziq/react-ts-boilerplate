import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../api/authApi';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      await login(credentials).unwrap();
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
      {error && (
        <div className="text-red-600 text-sm mt-2">
          Invalid email or password
        </div>
      )}
    </form>
  );
};
