
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import InsuranceCard from '@/components/InsuranceCard';

const Insurers = () => {
  const insuranceProviders = [
    {
      name: 'Star Health Insurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/star.png',
      description: 'Specialized health insurance provider with excellent claim settlement ratio and extensive hospital network.'
    },
    {
      name: 'HDFC Ergo',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/hdfc-ergo.png',
      description: 'Innovative health insurance solutions with digital-first approach for businesses of all sizes.'
    },
    {
      name: 'ICICI Lombard',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/icici-lombard.png',
      description: 'One of India\'s leading private sector general insurance companies with superior customer service.'
    },
    {
      name: 'Bajaj Allianz',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/bajaj-allianz.png',
      description: 'Comprehensive health coverage with quick claim settlement and wide hospital network.'
    },
    {
      name: 'Tata AIG',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/tata-aig.png',
      description: 'Trusted insurance provider with customizable health plans and excellent customer support.'
    },
    {
      name: 'Reliance General Insurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/reliance.png',
      description: 'Strong network coverage with innovative health insurance solutions for corporate clients.'
    },
    {
      name: 'Max Bupa',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/max-bupa.png',
      description: 'Dedicated health insurance provider with comprehensive coverage options and wellness programs.'
    },
    {
      name: 'New India Assurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/new-india.png',
      description: 'India\'s premier public sector insurance company with widespread presence and reliable service.'
    },
    {
      name: 'Oriental Insurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/oriental.png',
      description: 'Public sector insurer offering comprehensive health insurance with extensive coverage.'
    },
    {
      name: 'Aditya Birla Health Insurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/aditya-birla.png',
      description: 'Health-first insurance approach with proactive care and incentivized wellness programs.'
    },
    {
      name: 'Manipal Cigna',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/cigna-ttk.png',
      description: 'Global expertise with local understanding, offering comprehensive health insurance solutions.'
    },
    {
      name: 'SBI General Insurance',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/sbi.png',
      description: 'Reliable health insurance provider with simple and hassle-free claim settlement process.'
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Insurance Partners</h1>
          <div className="flex justify-center items-center mb-8">
            <img 
              src="https://s3-ap-southeast-1.amazonaws.com/securenow-app-section-icons-webapp/images/star.png" 
              alt="Star Health Insurance Logo" 
              className="max-h-24 max-w-64 object-contain"
            />
          </div>
          <p className="text-xl max-w-3xl mx-auto">
            We collaborate with India's leading insurance providers to offer you the best coverage options for your business in Gurgaon.
          </p>
        </div>
      </section>

      {/* Insurers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {insuranceProviders.map((insurer, index) => (
              <InsuranceCard
                key={index}
                name={insurer.name}
                logo={insurer.logo}
                description={insurer.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why We Partner Section */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Why We Partner with These Insurers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We carefully select our insurance partners based on strict criteria to ensure you get the best coverage and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Financial Stability</h3>
              <p className="text-gray-600">
                We partner with insurers that demonstrate strong financial stability, ensuring they can meet their claim obligations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Claim Settlement Ratio</h3>
              <p className="text-gray-600">
                Our partners have proven track records of high claim settlement ratios, ensuring swift processing of claims.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Hospital Network</h3>
              <p className="text-gray-600">
                Extensive network of cashless hospitals across India, particularly in Gurgaon and the NCR region.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Customer Service</h3>
              <p className="text-gray-600">
                Insurance providers with excellent customer service capabilities, ensuring smooth policy administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Right Insurance Partner</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us help you select the best insurance provider for your specific business needs in Gurgaon.
          </p>
          <a
            href="/quotation"
            className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Insurers;
