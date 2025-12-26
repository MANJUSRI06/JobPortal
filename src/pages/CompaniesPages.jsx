import React from "react";
import "./CompaniesPages.css";
import { Link } from "react-router-dom";

const CompaniesPage = () => {
  const companies = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      location: "California, USA",
      logo: "https://logo.clearbit.com/google.com",
      careers: "https://careers.google.com/jobs/results/",
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Software",
      location: "Washington, USA",
      logo: "https://logo.clearbit.com/microsoft.com",
      careers: "https://careers.microsoft.com/us/en",
    },
    {
      id: 3,
      name: "Infosys",
      industry: "IT Services",
      location: "Bangalore, India",
      logo: "https://logo.clearbit.com/infosys.com",
      careers: "https://www.infosys.com/careers.html",
    },
    {
      id: 4,
      name: "Amazon",
      industry: "E-commerce / Cloud",
      location: "Seattle, USA",
      logo: "https://logo.clearbit.com/amazon.com",
      careers: "https://www.amazon.jobs/",
    },
    {
      id: 5,
      name: "TCS",
      industry: "IT Services",
      location: "Mumbai, India",
      logo: "https://logo.clearbit.com/tcs.com",
      careers: "https://www.tcs.com/careers",
    },
    {
      id: 6,
      name: "IBM",
      industry: "Technology",
      location: "Armonk, USA",
      logo: "https://logo.clearbit.com/ibm.com",
      careers: "https://www.ibm.com/employment",
    },
    {
      id: 7,
      name: "Flipkart",
      industry: "E-commerce",
      location: "Bengaluru, India",
      logo: "https://logo.clearbit.com/flipkart.com",
      careers: "https://www.flipkartcareers.com/",
    },
    {
      id: 8,
      name: "Wipro",
      industry: "IT Services",
      location: "Bengaluru, India",
      logo: "https://logo.clearbit.com/wipro.com",
      careers: "https://careers.wipro.com/",
    },
    {
      id: 9,
      name: "Accenture",
      industry: "Consulting",
      location: "Dublin, Ireland",
      logo: "https://logo.clearbit.com/accenture.com",
      careers: "https://www.accenture.com/us-en/careers",
    },
  ];

  const getInitials = (name) => {
    return name.slice(0, 2).toUpperCase();
  };

  const handleImageError = (e, name) => {
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <div className="companies-page">
      <h1 className="page-title">Top Companies Hiring</h1>

      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <div className="logo-container">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="company-logo" 
                onError={(e) => handleImageError(e, company.name)}
              />
              <div className="company-initials-fallback" style={{display: 'none'}}>
                {getInitials(company.name)}
              </div>
            </div>
            <h3>{company.name}</h3>
            <p className="industry">{company.industry}</p>
            <p className="location">{company.location}</p>
            <a href={company.careers} target="_blank" rel="noopener noreferrer">
              <button className="view-jobs-btn">View Jobs</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
