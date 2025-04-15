
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
      {/* Preload critical hero image */}
      <link 
        rel="preload" 
        as="image" 
        href="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75" 
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
