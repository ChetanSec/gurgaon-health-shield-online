
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOSchema />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
