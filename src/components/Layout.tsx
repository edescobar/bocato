import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

export default Layout;