import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Login
      </Link>
    </div>
  );
};
