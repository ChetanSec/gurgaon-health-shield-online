
import React from 'react';

const SEOSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "SecureNow - Group Health Insurance Gurgaon",
    "description": "Comprehensive group health insurance solutions for businesses in Gurgaon",
    "url": "https://example.com",
    "areaServed": {
      "@type": "City",
      "name": "Gurgaon"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "3000"
    },
    "openingHours": "Mo-Su 00:00-24:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SEOSchema;
