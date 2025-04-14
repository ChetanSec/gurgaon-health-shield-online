
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-securenow-blue to-securenow-lightblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Group Health Insurance Solutions in Gurgaon
            </h1>
            <p className="text-lg mb-8">
              Comprehensive health insurance coverage for your employees. Powered by SecureNow, trusted by 3000+ companies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-securenow-orange hover:bg-orange-600 text-white"
                asChild
              >
                <Link to="/quotation">Get a Quote</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/product-features">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-securenow-orange" />
                <span>30+ Insurance Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-securenow-orange" />
                <span>3000+ Companies Trust Us</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-securenow-orange" />
                <span>24/7 Claims Support</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-securenow-blue text-xl font-bold mb-4">Quick Quote Request</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1 text-sm" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                    placeholder="Your company name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm" htmlFor="employeeCount">
                      No. of Employees
                    </label>
                    <select
                      id="employeeCount"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                    >
                      <option value="">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501+">501+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm" htmlFor="location">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                      placeholder="Company location"
                      defaultValue="Gurgaon"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                    placeholder="Your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-securenow-orange hover:bg-orange-600 text-white py-3 rounded-md transition duration-150 ease-in-out font-medium"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
