
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { CheckCircle, FilePlus, Clock, BadgeCheck, HelpCircle } from 'lucide-react';

const ClaimProcess = () => {
  const claimSteps = [
    {
      icon: FilePlus,
      title: 'Submit Claim',
      description: 'Notify us about the claim through our dedicated portal, email, or phone. For cashless claims, present your card at network hospitals.',
      color: 'bg-blue-100 text-securenow-blue'
    },
    {
      icon: Clock,
      title: 'Processing',
      description: 'Our team verifies the claim details and coordinates with the insurance company for quick processing.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: BadgeCheck,
      title: 'Approval',
      description: 'Once approved, cashless claims are settled directly with the hospital. For reimbursement claims, payment is processed to the insured.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: CheckCircle,
      title: 'Settlement',
      description: 'Claim settlement is completed, and confirmation is sent to the insured along with settlement details.',
      color: 'bg-purple-100 text-purple-700'
    },
  ];

  const faqs = [
    {
      question: 'What documents are required for claim submission?',
      answer: 'For claim submission, you generally need: filled claim form, original hospital bills, discharge summary, investigation reports, doctor's prescription, and any other relevant medical documents. For cashless claims, you also need to present your health card at the network hospital.'
    },
    {
      question: 'How long does the claim process take?',
      answer: 'Cashless claims are typically approved within a few hours to 24 hours. For reimbursement claims, the settlement usually takes 7-14 working days after submission of all required documents.'
    },
    {
      question: 'What is the difference between cashless and reimbursement claims?',
      answer: 'In cashless claims, the insurance company settles the bill directly with the network hospital. For reimbursement claims, you pay the hospital bills first and then submit the claim to the insurance company for reimbursement.'
    },
    {
      question: 'Are pre-existing conditions covered under group health insurance?',
      answer: 'Yes, most group health insurance policies cover pre-existing conditions from day one without any waiting period, which is a significant advantage over individual policies.'
    },
    {
      question: 'What to do if a claim is rejected?',
      answer: 'If your claim is rejected, you can appeal the decision by providing additional documentation or clarification. Our team will help you through the appeal process and coordinate with the insurer on your behalf.'
    },
    {
      question: 'Is there a time limit for submitting claims?',
      answer: 'Yes, most insurance policies have a time limit for claim submission, typically ranging from 7 to 30 days from the date of discharge for hospitalization claims. It\'s important to submit claims within this timeframe.'
    },
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Claim Process</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Simple, transparent, and hassle-free claim process for your group health insurance policy.
          </p>
        </div>
      </section>

      {/* Claim Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Types of Claims</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer two types of claim processes to ensure your employees get the medical care they need with minimal financial burden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-securenow-blue">
              <h3 className="text-2xl font-bold mb-4 text-securenow-blue">Cashless Claims</h3>
              <p className="text-gray-600 mb-6">
                Get treatment without paying hospital bills upfront at our network hospitals.
              </p>
              <h4 className="font-bold text-securenow-darkgray mb-2">Process:</h4>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2 mb-6">
                <li>Show your health insurance card at the network hospital</li>
                <li>Fill out the pre-authorization form</li>
                <li>Hospital coordinates with the TPA/insurer for approval</li>
                <li>Get treatment without paying (except for non-covered expenses)</li>
                <li>Insurer settles the bill directly with the hospital</li>
              </ol>
              <div className="bg-securenow-gray p-4 rounded-md">
                <h4 className="font-bold text-securenow-darkgray mb-2">Advantages:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>No upfront payment required</li>
                  <li>Simplified paperwork</li>
                  <li>Faster admission process</li>
                  <li>Less financial burden on employees</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-securenow-orange">
              <h3 className="text-2xl font-bold mb-4 text-securenow-blue">Reimbursement Claims</h3>
              <p className="text-gray-600 mb-6">
                Pay for the treatment upfront and get reimbursed by the insurance company.
              </p>
              <h4 className="font-bold text-securenow-darkgray mb-2">Process:</h4>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2 mb-6">
                <li>Pay for the treatment at any hospital</li>
                <li>Collect all original bills and medical documents</li>
                <li>Fill out the reimbursement claim form</li>
                <li>Submit the claim form along with documents</li>
                <li>Insurer processes and approves the claim</li>
                <li>Amount is transferred to the insured's account</li>
              </ol>
              <div className="bg-securenow-gray p-4 rounded-md">
                <h4 className="font-bold text-securenow-darkgray mb-2">When to use:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Treatment at non-network hospitals</li>
                  <li>Emergency situations</li>
                  <li>When pre-authorization isn't possible</li>
                  <li>For post-hospitalization expenses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Steps Section */}
      <section className="bg-securenow-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Claim Process Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined claim process ensures quick and hassle-free settlements.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-securenow-blue hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {claimSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 relative z-10">
                  <div className={`${step.color} p-4 rounded-full inline-flex items-center justify-center mb-4 mx-auto md:mx-0`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-securenow-blue">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Claims Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-securenow-blue rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">Dedicated Claims Support</h2>
                <p className="text-white/90 mb-6">
                  Our specialized claims team provides end-to-end assistance throughout the claim process, ensuring smooth and quick settlements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white/90">24/7 claims helpline for immediate assistance</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white/90">Dedicated claims manager for your organization</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white/90">Regular updates on claim status</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white/90">Assistance with documentation and submission</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-[url('https://images.unsplash.com/photo-1576765608173-618b534542f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80')] bg-cover bg-center">
                {/* Background image div */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about the claim process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-securenow-blue">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-securenow-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Claims?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our dedicated team is ready to assist you with any claim-related queries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+911244900300"
              className="inline-block bg-white text-securenow-orange hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Call Us
            </a>
            <a
              href="mailto:claims@securenow.in"
              className="inline-block bg-securenow-blue hover:bg-blue-800 text-white py-3 px-8 rounded-md text-lg font-medium transition duration-150 ease-in-out"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ClaimProcess;
