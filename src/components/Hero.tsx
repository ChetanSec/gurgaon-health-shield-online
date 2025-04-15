
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-securenow-blue via-blue-600 to-securenow-lightblue opacity-90" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full py-2 px-4 backdrop-blur-sm">
              <span className="text-sm font-medium">Trusted by 3000+ companies</span>
              <span className="bg-securenow-orange h-2 w-2 rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
              Group Health Insurance Solutions in Gurgaon
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Comprehensive health insurance coverage for your employees. Experience seamless policy management and dedicated support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-securenow-orange hover:bg-orange-600 text-white group"
                asChild
              >
                <Link to="/quotation" className="inline-flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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

            <div className="pt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                  <Shield className="h-6 w-6 text-securenow-orange" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-white/80">Insurance Partners</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                  <Users className="h-6 w-6 text-securenow-orange" />
                </div>
                <div className="text-2xl font-bold">3000+</div>
                <div className="text-sm text-white/80">Companies Trust Us</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                  <Heart className="h-6 w-6 text-securenow-orange" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Claims Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Quote Form */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-securenow-blue mb-6">Get a Quick Quote</h2>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Company Name"
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                      <option value="">No. of Employees</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501+">501+</option>
                    </select>
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Location"
                      defaultValue="Gurgaon"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-securenow-orange hover:bg-orange-600 text-white"
                >
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
