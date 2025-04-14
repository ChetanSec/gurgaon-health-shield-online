
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Briefcase, Users, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Quotation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted",
      description: "We'll get back to you with a customized quote soon.",
    });
  };

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get a Customized Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the form below to receive a tailored group health insurance quote for your business in Gurgaon.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-securenow-blue mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-securenow-darkgray flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-securenow-orange" /> Company Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="companyName">
                          Company Name*
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="industry">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                        >
                          <option value="">Select Industry</option>
                          <option value="IT">IT / Software</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance / Banking</option>
                          <option value="Retail">Retail</option>
                          <option value="Education">Education</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="location">
                          <MapPin className="h-4 w-4 inline mr-1" /> Location*
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Company location"
                          defaultValue="Gurgaon"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="website">
                          Website
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <h3 className="text-lg font-semibold text-securenow-darkgray flex items-center gap-2">
                      <Users className="h-5 w-5 text-securenow-orange" /> Employee Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="employeeCount">
                          Number of Employees*
                        </label>
                        <select
                          id="employeeCount"
                          name="employeeCount"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
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
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="averageAge">
                          Average Age of Employees
                        </label>
                        <select
                          id="averageAge"
                          name="averageAge"
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                        >
                          <option value="">Select</option>
                          <option value="20-25">20-25 years</option>
                          <option value="26-30">26-30 years</option>
                          <option value="31-35">31-35 years</option>
                          <option value="36-40">36-40 years</option>
                          <option value="41+">41+ years</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm">Coverage Required For</label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="coverageFor" value="employees" defaultChecked className="rounded border-gray-300 text-securenow-blue" />
                          <span>Employees</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="coverageFor" value="spouse" className="rounded border-gray-300 text-securenow-blue" />
                          <span>Spouse</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="coverageFor" value="children" className="rounded border-gray-300 text-securenow-blue" />
                          <span>Children</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="coverageFor" value="parents" className="rounded border-gray-300 text-securenow-blue" />
                          <span>Parents</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <h3 className="text-lg font-semibold text-securenow-darkgray flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-securenow-orange" /> Policy Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="sumInsured">
                          Preferred Sum Insured
                        </label>
                        <select
                          id="sumInsured"
                          name="sumInsured"
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                        >
                          <option value="">Select</option>
                          <option value="1-3">1-3 Lakhs</option>
                          <option value="3-5">3-5 Lakhs</option>
                          <option value="5-10">5-10 Lakhs</option>
                          <option value="10+">10+ Lakhs</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="currentPolicy">
                          Current Policy Status
                        </label>
                        <select
                          id="currentPolicy"
                          name="currentPolicy"
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                        >
                          <option value="">Select</option>
                          <option value="new">New Policy</option>
                          <option value="renewal">Renewal</option>
                          <option value="portability">Portability</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <h3 className="text-lg font-semibold text-securenow-darkgray">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="contactName">
                          Contact Person Name*
                        </label>
                        <input
                          id="contactName"
                          name="contactName"
                          type="text"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="designation">
                          Designation*
                        </label>
                        <input
                          id="designation"
                          name="designation"
                          type="text"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Your designation"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="email">
                          Email Address*
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm" htmlFor="phone">
                          Phone Number*
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm" htmlFor="message">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-securenow-blue"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-securenow-orange hover:bg-orange-600 text-white">
                    Submit Quote Request
                  </Button>
                </form>
              </div>
              <div className="md:w-1/3 bg-securenow-blue p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>IRDAI licensed insurance broker</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>Multiple insurer comparison</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>Best premium rates in the market</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>Dedicated service support</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>End-to-end claims assistance</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-securenow-orange mr-3 flex-shrink-0 mt-1" />
                    <p>3000+ satisfied corporate clients</p>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/20">
                  <h3 className="text-lg font-bold mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-securenow-orange" />
                      +91 124 4900 300
                    </p>
                    <a href="mailto:contact@securenow.in" className="text-securenow-orange hover:underline">
                      contact@securenow.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">What Happens Next?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              After you submit your quote request, our team will follow these steps to provide you with the best insurance solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Analysis</h3>
              <p className="text-gray-600">
                Our team analyzes your requirements and company profile to understand your specific needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Comparison</h3>
              <p className="text-gray-600">
                We compare plans from multiple insurers to find the best coverage options at competitive rates.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-securenow-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-securenow-blue">Proposal</h3>
              <p className="text-gray-600">
                We present you with a customized proposal, explaining the benefits and features to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Quotation;
