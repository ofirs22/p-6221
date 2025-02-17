import React, { useEffect } from 'react';
import useFavorite from '../hooks/useFavorites';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  userId: string; // Add userId prop
}

const Layout: React.FC<LayoutProps> = ({ children, userId }) => {
  const { loadUserFavorites } = useFavorite(userId); // Pass userId to the hook

  useEffect(() => {
    loadUserFavorites(); // Load favorites for the given userId
  }, [loadUserFavorites]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
