
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Shield, Heart, Activity, Users, BadgeCheck, FileText, Stethoscope, Home, CreditCard } from 'lucide-react';

const ProductFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Our group health insurance plans offer extensive coverage for hospitalization, surgeries, and medical treatments, ensuring your employees receive the best possible care.'
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Integrated wellness programs promote preventive healthcare, helping employees stay healthy and reducing overall healthcare costs for your organization.'
    },
    {
      icon: Stethoscope,
      title: 'OPD Coverage',
      description: 'Outpatient department coverage for consultations, diagnostics, and pharmacy bills, reducing the financial burden of day-to-day healthcare needs.'
    },
    {
      icon: CreditCard,
      title: 'Cashless Treatment',
      description: 'Access to a wide network of hospitals for cashless treatment, eliminating the need for employees to pay upfront and claim reimbursements later.'
    },
    {
      icon: Activity,
      title: 'Pre & Post Hospitalization',
      description: 'Coverage for medical expenses incurred before and after hospitalization, ensuring comprehensive care throughout the treatment journey.'
    },
    {
      icon: Users,
      title: 'Family Coverage',
      description: 'Options to include dependents such as spouse, children, and parents, ensuring complete family protection under one policy.'
    },
    {
      icon: BadgeCheck,
      title: 'No Claim Bonus',
      description: 'Rewards for claim-free years with additional coverage or reduced premiums, encouraging preventive healthcare.'
    },
    {
      icon: Home,
      title: 'Domiciliary Treatment',
      description: 'Coverage for treatments taken at home under medical supervision, when hospitalization is not possible or necessary.'
    },
    {
      icon: FileText,
      title: 'Customizable Plans',
      description: 'Tailor insurance plans to suit your organization's needs and budget, choosing the right balance of coverage and cost.'
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Group Health Insurance Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the comprehensive features and benefits of our group health insurance solutions for businesses in Gurgaon.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Additional Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Additional Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond the core features, our group health insurance plans offer several additional benefits to enhance your employees' wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-securenow-orange">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Maternity Benefits</h3>
              <p className="text-gray-600 mb-4">
                Coverage for pregnancy-related expenses, including pre and post-natal care, delivery, and newborn baby coverage for a specified period.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Normal and cesarean deliveries covered</li>
                <li>Pre and post-natal expenses</li>
                <li>Newborn baby coverage from day one</li>
                <li>Coverage for complications during pregnancy</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-securenow-orange">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Alternative Treatments</h3>
              <p className="text-gray-600 mb-4">
                Coverage for AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) promoting holistic healthcare options.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Ayurvedic treatments</li>
                <li>Homeopathic treatments</li>
                <li>Naturopathy</li>
                <li>Unani medicine</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-securenow-orange">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Mental Health Coverage</h3>
              <p className="text-gray-600 mb-4">
                Coverage for mental health treatments and counseling services, supporting overall employee wellbeing.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Psychiatric consultations</li>
                <li>Psychological counseling</li>
                <li>Therapy sessions</li>
                <li>Inpatient mental health treatment</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-securenow-orange">
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Preventive Health Checkups</h3>
              <p className="text-gray-600 mb-4">
                Regular health checkups covered under the policy to promote preventive healthcare and early detection of medical conditions.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Annual health checkups</li>
                <li>Specialized screenings</li>
                <li>Diagnostic tests</li>
                <li>Follow-up consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Employees' Health?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Get a customized group health insurance quote for your business in Gurgaon today.
          </p>
          <a
            href="/quotation"
            className="inline-block bg-securenow-orange hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductFeatures;
