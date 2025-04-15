import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart, ArrowRight } from 'lucide-react';
const Hero = () => {
  return <div className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay - optimized with preload */}
      <div className="absolute inset-0 bg-gradient-to-r from-securenow-blue to-transparent opacity-90 z-10" />
      
      {/* Background Image - optimized */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75')"
    }} />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full py-2 px-4 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-white">Trusted by 3000+ companies</span>
            <span className="bg-securenow-orange h-2 w-2 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">Group Health Insurance Solutions in Delhi NCR</h1>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-xl mb-8">
            Comprehensive health insurance coverage for your employees. Experience seamless policy management and dedicated support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-securenow-orange hover:bg-orange-600 text-white group" asChild>
              <Link to="/quotation" className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/product-features">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                <Shield className="h-6 w-6 text-securenow-orange" />
              </div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-sm text-white/80">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                <Users className="h-6 w-6 text-securenow-orange" />
              </div>
              <div className="text-2xl font-bold text-white">3000+</div>
              <div className="text-sm text-white/80">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-2">
                <Heart className="h-6 w-6 text-securenow-orange" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Claims Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;