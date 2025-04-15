import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-securenow-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Secure<span className="text-securenow-orange">Now</span></h2>
            <p className="mb-4">
              India's leading insurance broker specialized in providing comprehensive group health insurance solutions in Gurgaon.
            </p>
            <div className="flex items-center mt-4">
              <Phone size={16} className="mr-2" />
              <span>+91 9696683999</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail size={16} className="mr-2" />
              <span>contact@securenow.in</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPin size={16} className="mr-2" />
              <span>Gurgaon, Haryana, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product-features" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Product Features
                </Link>
              </li>
              <li>
                <Link to="/insurers" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Insurers
                </Link>
              </li>
              <li>
                <Link to="/claim-process" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Claim Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technology" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/quotation" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Get a Quote
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-securenow-orange transition duration-150 ease-in-out">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} SecureNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;