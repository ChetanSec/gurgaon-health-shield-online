
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { BarChart3, PieChart, TrendingUp, LineChart, ActivitySquare, Gauge, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: 'Claims Analytics',
      description: 'Track and analyze claims data with powerful visualizations and filters.'
    },
    {
      icon: PieChart,
      title: 'Coverage Distribution',
      description: 'Visual breakdown of employee coverage distribution by plan type and demographics.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify healthcare spending patterns and cost drivers over time.'
    },
    {
      icon: LineChart,
      title: 'Utilization Metrics',
      description: 'Monitor key utilization indicators to optimize coverage and control costs.'
    },
    {
      icon: ActivitySquare,
      title: 'Real-time Alerts',
      description: 'Get instant notifications on unusual activity or potential fraud indicators.'
    },
    {
      icon: Gauge,
      title: 'Performance Benchmarks',
      description: 'Compare your plan performance against industry standards and benchmarks.'
    }
  ];

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-securenow-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">HR Management Dashboard</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive analytics and visualization tools to simplify your health insurance management.
          </p>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-securenow-blue mb-4">Data-Driven Insights</h2>
              <p className="text-gray-600 mb-6">
                Our HR Management Dashboard provides comprehensive analytics and visualization tools that transform complex health insurance data into actionable insights.
              </p>
              <p className="text-gray-600 mb-6">
                With customizable reports, real-time metrics, and intuitive interfaces, our dashboard helps HR teams make informed decisions about employee benefits and healthcare spending.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                    <ArrowRight className="h-4 w-4 text-securenow-blue" />
                  </div>
                  <span className="ml-3 text-gray-600">Monitor policy utilization and spending patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                    <ArrowRight className="h-4 w-4 text-securenow-blue" />
                  </div>
                  <span className="ml-3 text-gray-600">Track claim status and turnaround times</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                    <ArrowRight className="h-4 w-4 text-securenow-blue" />
                  </div>
                  <span className="ml-3 text-gray-600">Generate custom reports for management review</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-securenow-blue/10 rounded-full flex items-center justify-center mt-0.5">
                    <ArrowRight className="h-4 w-4 text-securenow-blue" />
                  </div>
                  <span className="ml-3 text-gray-600">Benchmark your plan against industry standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 bg-securenow-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-securenow-blue mb-2">Dashboard Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful analytics tools designed for HR professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
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

      {/* Interactive Demo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-securenow-blue mb-4">Experience Our Dashboard</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our analytics dashboard can transform your health insurance management.
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

export default Dashboard;
