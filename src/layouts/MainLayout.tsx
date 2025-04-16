
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
      {/* Preload logo image */}
      <link 
        rel="preload" 
        as="image" 
        href="/public/lovable-uploads/db65c0d1-d1b3-426c-ba1d-272d44761321.png" 
      />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
