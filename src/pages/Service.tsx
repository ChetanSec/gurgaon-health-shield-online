
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { UserCheck, FileText, Clock, BadgeCheck, HelpCircle, BarChart, Settings, User } from 'lucide-react';

const Service = () => {
  const serviceFeatures = [
    {
      icon: UserCheck,
      title: 'Dedicated Relationship Manager',
      description: 'A single point of contact for all your insurance needs, ensuring personalized service throughout your policy term.'
    },
    {
      icon: FileText,
      title: 'Policy Documentation Support',
      description: 'Assistance with all documentation requirements, from proposal forms to endorsements and renewals.'
    },
    {
      icon: Clock,
      title: '24/7 Claims Assistance',
      description: 'Round-the-clock support for claim filing, tracking, and resolution, ensuring quick settlements.'
    },
    {
      icon: BadgeCheck,
      title: 'Employee Onboarding',
      description: 'Comprehensive onboarding sessions to educate employees about policy benefits and claim procedures.'
    },
    {
      icon: HelpCircle,
      title: 'Query Resolution',
      description: 'Quick resolution of queries related to policy coverage, network hospitals, and benefits.'
    },
    {
      icon: BarChart,
      title: 'Utilization Analysis',
      description: 'Regular analysis of policy utilization to help optimize coverage and control costs.'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Tailored insurance solutions based on your company's demographics and requirements.'
    },
    {
      icon: User,
      title: 'Employee Assistance',
      description: 'Direct support for employees' insurance-related queries and claim submissions.'
    },
  ];

  const testimonials = [
    {
      quote: "SecureNow's service has been exceptional. Their dedicated team helped us implement a comprehensive group health insurance policy that perfectly suits our employees' needs.",
      author: "Rajiv Sharma",
      position: "HR Director, TechSolutions India"
    },
    {
      quote: "What sets SecureNow apart is their responsive service. Our dedicated relationship manager is always available to address our concerns and process claims quickly.",
      author: "Priya Malhotra",
      position: "COO, MindWorks Technologies"
    },
    {
      quote: "We've been working with SecureNow for three years, and their service has been consistently outstanding. Their team goes above and beyond to ensure our employees receive the best healthcare benefits.",
      author: "Amit Khanna",
      position: "CEO, InnovateTech"
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive service support to ensure a seamless insurance experience for businesses in Gurgaon.
          </p>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2866&q=80" 
                alt="Service Team" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Our Service Commitment</h2>
              <p className="text-gray-600 mb-6">
                At SecureNow, we believe that providing exceptional service is as important as offering the right insurance products. Our service philosophy is built on transparency, responsiveness, and a deep understanding of our clients' needs.
              </p>
              <p className="text-gray-600 mb-6">
                With dedicated service teams for each client, we ensure personalized attention and quick resolution of all insurance-related matters. From policy implementation to claims settlement, our team is with you at every step.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-securenow-gray rounded-md p-4">
                  <h3 className="font-bold text-securenow-blue mb-2">98%</h3>
                  <p className="text-sm text-gray-600">Client Retention Rate</p>
                </div>
                <div className="bg-securenow-gray rounded-md p-4">
                  <h3 className="font-bold text-securenow-blue mb-2">15 min</h3>
                  <p className="text-sm text-gray-600">Average Query Response Time</p>
                </div>
                <div className="bg-securenow-gray rounded-md p-4">
                  <h3 className="font-bold text-securenow-blue mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Claims Support</p>
                </div>
                <div className="bg-securenow-gray rounded-md p-4">
                  <h3 className="font-bold text-securenow-blue mb-2">3000+</h3>
                  <p className="text-sm text-gray-600">Satisfied Corporate Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Our Service Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive service support to ensure a seamless insurance experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
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

      {/* Service Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure consistent and high-quality service delivery.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-securenow-blue hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">Consultation</h3>
                <p className="text-gray-600">
                  Understanding your specific requirements and objectives to design the right insurance solution.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">Implementation</h3>
                <p className="text-gray-600">
                  Seamless policy implementation with dedicated support for documentation and employee onboarding.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">Ongoing Support</h3>
                <p className="text-gray-600">
                  Continuous assistance with policy management, claims processing, and employee queries.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-securenow-blue">Review & Optimize</h3>
                <p className="text-gray-600">
                  Regular policy reviews and optimization recommendations based on utilization analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-securenow-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hear from businesses in Gurgaon about their experience with SecureNow's service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4 text-securenow-orange">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-securenow-blue">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Meet Our Service Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional service for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-securenow-blue">Priya Sharma</h3>
                <p className="text-gray-500 mb-4">Head of Client Services</p>
                <p className="text-gray-600">
                  With over 15 years of experience in insurance, Priya leads our service team with a focus on client satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-securenow-blue">Rajiv Verma</h3>
                <p className="text-gray-500 mb-4">Claims Support Manager</p>
                <p className="text-gray-600">
                  Rajiv specializes in claims management, ensuring quick and hassle-free settlements for our clients.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-securenow-blue">Amit Kumar</h3>
                <p className="text-gray-500 mb-4">Customer Relations Executive</p>
                <p className="text-gray-600">
                  Amit is dedicated to providing personalized service, addressing client queries promptly and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Service Excellence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the 3000+ businesses in India that trust SecureNow for their insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/quotation"
              className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Get a Quote
            </a>
            <a
              href="tel:+911244900300"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Service;
