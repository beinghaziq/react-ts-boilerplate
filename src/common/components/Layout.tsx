import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the child routes */}
      </main>
      
      {/* Footer */}
      
      {/* Notification Toaster */}
    </div>
  );
};
