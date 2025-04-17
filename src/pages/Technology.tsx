
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Smartphone, Globe, Shield, Users, LockKeyhole, Activity, Gauge, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  const techFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile App Access',
      description: 'Access policy documents, submit claims, and find network hospitals through our user-friendly mobile application.'
    },
    {
      icon: Globe,
      title: 'Web Portal',
      description: 'Comprehensive web portal for HR teams to manage employee coverage, track claims, and generate reports.'
    },
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with data encryption and regular security audits to protect sensitive information.'
    },
    {
      icon: Database,
      title: 'Real-time Analytics',
      description: 'Advanced analytics dashboard to track utilization patterns and optimize your health insurance coverage.'
    },
    {
      icon: LockKeyhole,
      title: 'Data Privacy',
      description: 'Strict data privacy protocols compliant with industry regulations to protect employee information.'
    },
    {
      icon: Users,
      title: 'HR Integration',
      description: 'Seamless integration with HRMS platforms for automated employee addition, deletion, and policy management.'
    },
    {
      icon: Activity,
      title: 'Claims Tracking',
      description: 'Real-time tracking of claim status with automated notifications at each step of the process.'
    },
    {
      icon: Gauge,
      title: 'Performance Metrics',
      description: 'Detailed reports and metrics to analyze policy performance and make data-driven decisions.'
    },
  ];

  const subpages = [
    {
      title: "HR Dashboard",
      description: "Interactive analytics dashboard for HR teams to monitor policy performance, track claims, and generate reports.",
      link: "/technology/dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "E-Claims Solution",
      description: "Paperless claims processing system with mobile submission and real-time tracking capabilities.",
      link: "/technology/e-claims",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Technology Platform</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Advanced technology solutions to simplify health insurance management for businesses in Gurgaon.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-c6e0f4f0d602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
                alt="Technology Platform" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Digital-First Approach</h2>
              <p className="text-gray-600 mb-6">
                Our technology platform is designed to simplify every aspect of group health insurance management. From policy administration to claims processing, our digital solutions ensure a seamless experience for both HR teams and employees.
              </p>
              <p className="text-gray-600 mb-6">
                With our proprietary InsureTech platform, we've eliminated the traditional paperwork and manual processes, making insurance management more efficient, transparent, and user-friendly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-securenow-gray p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-securenow-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-securenow-darkgray mb-1">Secure</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade security protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-securenow-gray p-2 rounded-full mr-3">
                    <Smartphone className="h-5 w-5 text-securenow-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-securenow-darkgray mb-1">Mobile-First</h3>
                    <p className="text-sm text-gray-600">Access anywhere, anytime</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-securenow-gray p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-securenow-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-securenow-darkgray mb-1">User-Friendly</h3>
                    <p className="text-sm text-gray-600">Intuitive interfaces for all users</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-securenow-gray p-2 rounded-full mr-3">
                    <Database className="h-5 w-5 text-securenow-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-securenow-darkgray mb-1">Data-Driven</h3>
                    <p className="text-sm text-gray-600">Insights for better decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Technology Solutions */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Technology Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our specialized technology solutions designed for HR teams and employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subpages.map((subpage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={subpage.image} 
                    alt={subpage.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-securenow-blue">{subpage.title}</h3>
                  <p className="text-gray-600 mb-4">{subpage.description}</p>
                  <Link 
                    to={subpage.link}
                    className="inline-flex items-center text-securenow-blue hover:text-securenow-orange font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Technology Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers a range of features designed to simplify health insurance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-securenow-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-securenow-blue rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Mobile App</h2>
                <p className="text-white/90 mb-6">
                  Our mobile application puts the power of health insurance management in your employees' hands. With an intuitive interface and comprehensive features, managing health insurance has never been easier.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-3">
                      <Shield className="h-5 w-5 text-securenow-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">E-Card Access</h3>
                      <p className="text-white/80 text-sm">
                        Digital insurance cards accessible anytime, anywhere
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-3">
                      <Activity className="h-5 w-5 text-securenow-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Claim Submission</h3>
                      <p className="text-white/80 text-sm">
                        Submit and track claims with just a few taps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-3">
                      <Globe className="h-5 w-5 text-securenow-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Hospital Locator</h3>
                      <p className="text-white/80 text-sm">
                        Find network hospitals near you with directions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-900 transition">
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.5,2H8.5C6.5,2,5,3.5,5,5.5v13C5,20.5,6.5,22,8.5,22h9c2,0,3.5-1.5,3.5-3.5v-13C21,3.5,19.5,2,17.5,2z M13,20.5h-2C10.2,20.5,10,20.3,10,20c0-0.3,0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5C13.5,20.3,13.3,20.5,13,20.5z M18,18H6V5h12V18z"/>
                      </svg>
                      <span>App Store</span>
                    </a>
                    <a href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-900 transition">
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.5,20.5c0,0.6,0.5,1,1,1h1.5c0.5,0,0.9-0.4,0.9-0.9L7.1,7L3.5,9.2V20.5z M14.5,2.5L11,4.8L14.5,7V2.5z M7.9,4.2L4.1,6.5 c-0.3,0.2-0.5,0.5-0.5,0.9V8l4-2.5L7.9,4.2z M19.5,10l-4-2.5V13h4V10z M20.5,13h-1v6.5c0,0.6-0.5,1-1,1h-10v-15L20.5,13z"/>
                      </svg>
                      <span>Play Store</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80')] bg-cover bg-center">
                {/* Background image div */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Portal Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">HR Management Portal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our HR portal simplifies employee benefits management with powerful tools and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-securenow-blue">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Policy Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Employee enrollment and updates
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Policy document repository
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Coverage details and benefits
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Premium payment tracking
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-securenow-blue">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Claims Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Track all employee claims
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Claims history and status
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Escalation management
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Settlement tracking
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-securenow-blue">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Reporting & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Utilization reports
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Claims analytics
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Cost optimization insights
                </li>
                <li className="flex items-start">
                  <span className="text-securenow-orange mr-2">✓</span>
                  Custom report generation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Experience Our Technology Platform</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how our technology can simplify health insurance management for your business in Gurgaon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/quotation"
              className="bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="bg-securenow-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Watch Video
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Technology;
