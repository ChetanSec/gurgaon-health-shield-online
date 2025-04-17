
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path: string) => location.pathname === path;
  const isTechPath = location.pathname.startsWith('/technology');

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Product Features', path: '/product-features' },
    { name: 'Insurers', path: '/insurers' },
    { name: 'Claim Process', path: '/claim-process' },
    { name: 'Technology', path: '/technology', hasSubmenu: true },
    { name: 'Service', path: '/service' },
  ];

  const techSubpages = [
    { name: 'Overview', path: '/technology', icon: <Menu className="h-4 w-4 mr-2" /> },
    { name: 'Dashboard', path: '/technology/dashboard', icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: 'E-Claims', path: '/technology/e-claims', icon: <FileText className="h-4 w-4 mr-2" /> }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/ec82eeef-3f54-4c6f-a24d-53cae748e10f.png" 
                alt="SecureNow Logo" 
                className="h-5 w-[140px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => 
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className={cn(
                        "text-securenow-darkgray hover:text-securenow-blue text-sm font-medium transition duration-150 ease-in-out",
                        isTechPath && "text-securenow-blue"
                      )}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {techSubpages.map((subpage) => (
                            <li key={subpage.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subpage.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    isActivePath(subpage.path) && "bg-accent"
                                  )}
                                >
                                  <div className="flex items-center">
                                    {subpage.icon}
                                    <span className="text-sm font-medium">{subpage.name}</span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.path}
                        className={cn(
                          "text-securenow-darkgray hover:text-securenow-blue px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out",
                          isActivePath(item.path) && "text-securenow-blue"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-securenow-orange hover:bg-orange-600 text-white ml-4">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-securenow-darkgray hover:text-securenow-blue hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {mainNavItems.map((item) => (
              <React.Fragment key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "block text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md text-base font-medium",
                    isActivePath(item.path) && "text-securenow-blue"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && isTechPath && (
                  <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-3">
                    {techSubpages.map((subpage) => (
                      <Link
                        key={subpage.path}
                        to={subpage.path}
                        className={cn(
                          "flex items-center text-sm text-securenow-darkgray hover:bg-gray-50 hover:text-securenow-blue px-3 py-2 rounded-md",
                          isActivePath(subpage.path) && "text-securenow-blue bg-gray-50"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subpage.icon}
                        {subpage.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <Button 
              className="bg-securenow-orange hover:bg-orange-600 text-white w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

