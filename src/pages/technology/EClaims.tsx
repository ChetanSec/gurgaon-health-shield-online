
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { FileCheck, Clock, Upload, Smartphone, CircleCheck, CircleHelp, ArrowRight, FileText } from 'lucide-react';

const EClaims = () => {
  const processSteps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Securely upload medical bills and supporting documents through the app or portal."
    },
    {
      icon: FileText,
      title: "Fill Claim Form",
      description: "Complete a digital claim form with pre-populated fields for ease of submission."
    },
    {
      icon: CircleCheck,
      title: "Instant Verification",
      description: "AI-powered system verifies document completeness and policy coverage."
    },
    {
      icon: Clock,
      title: "Track Progress",
      description: "Monitor your claim's progress in real-time with status updates and notifications."
    },
    {
      icon: FileCheck,
      title: "Digital Approval",
      description: "Receive approval and settlement details electronically, with paperless documentation."
    }
  ];

  const eClaimsFeatures = [
    {
      title: "Paperless Claims",
      description: "100% digital submission process eliminates the need for physical documentation."
    },
    {
      title: "Smart OCR Technology",
      description: "Automatically extracts information from medical bills and receipts."
    },
    {
      title: "Pre-filled Forms",
      description: "System pulls existing data to minimize manual data entry for employees."
    },
    {
      title: "Document Validation",
      description: "Built-in checks to ensure all required documentation is submitted correctly."
    },
    {
      title: "Real-time Updates",
      description: "Push notifications and in-app alerts about claim status changes."
    },
    {
      title: "Historical Records",
      description: "Access to complete claim history and documentation for future reference."
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">E-Claims Solution</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Paperless, efficient claims processing for a seamless employee experience.
          </p>
        </div>
      </section>

      {/* E-Claims Main Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
                  alt="E-Claims Solution" 
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -bottom-6 -right-6 bg-securenow-orange text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-sm">Faster Processing</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Digital Claims Experience</h2>
              <p className="text-gray-600 mb-6">
                Our E-Claims platform transforms the traditionally complex and paper-heavy claims process into a seamless digital experience. With intuitive mobile and web interfaces, employees can submit claims in minutes, not days.
              </p>
              <p className="text-gray-600 mb-6">
                HR teams benefit from automated verification, reduced processing time, and comprehensive tracking capabilities that provide complete visibility into the claims journey.
              </p>
              <div className="bg-securenow-gray p-6 rounded-lg border-l-4 border-securenow-blue">
                <div className="flex items-start">
                  <CircleHelp className="h-6 w-6 text-securenow-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-securenow-darkgray">Did You Know?</h4>
                    <p className="text-sm text-gray-600">
                      Companies using our E-Claims solution report a 75% reduction in processing time and a 90% decrease in claim-related queries to their HR departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process Steps */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Simple 5-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined digital claims process makes reimbursements quick and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-securenow-blue" />
                  </div>
                )}
                <div className="bg-securenow-blue/10 p-3 inline-block rounded-full mb-4">
                  <step.icon className="h-6 w-6 text-securenow-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-securenow-blue">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Claims Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">E-Claims Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed to simplify the claims process for both employees and HR teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eClaimsFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-securenow-blue/10 p-2 rounded-full mr-3 mt-1">
                  <CircleCheck className="h-5 w-5 text-securenow-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-securenow-darkgray mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-securenow-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-4">Mobile Claims Submission</h2>
              <p className="text-white/90 mb-6">
                Our mobile app puts the power of claims processing in your employees' hands. With an intuitive interface and step-by-step guidance, submitting claims has never been easier.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    <Smartphone className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Snap & Submit</h3>
                    <p className="text-white/80 text-sm">
                      Take photos of medical bills and receipts directly through the app
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    <CircleCheck className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Quick Submission</h3>
                    <p className="text-white/80 text-sm">
                      Complete the entire claim process in under 3 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-securenow-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Real-time Updates</h3>
                    <p className="text-white/80 text-sm">
                      Get push notifications about claim status changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
                alt="Mobile Claims App" 
                className="rounded-lg shadow-md max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Experience Our E-Claims Solution</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how our E-Claims platform can transform your health insurance claims processing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/quotation"
              className="bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Request a Demo
            </a>
            <a
              href="/technology"
              className="bg-securenow-gray hover:bg-gray-300 text-securenow-darkgray py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Back to Technology
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EClaims;
