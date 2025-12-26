// src/pages/JobsPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./JobsPage.css";

const JobsPage = () => {
  const allJobs = useSelector((state) => state.jobs.jobs);
  const location = useLocation();
  const navigate = useNavigate();

  // Get search query from URL
  const query = new URLSearchParams(location.search).get("q") || "";

  // Filter jobs based on query
  const filteredJobs = (allJobs || []).filter((job) =>
    [job.title, job.company, job.location, job.type, job.category]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const handleApply = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="jobs-page">
      <h2>
        {query
          ? `Showing results for "${query}"`
          : "Explore the Latest Job Opportunities"}
      </h2>

      {filteredJobs.length === 0 ? (
        <p className="no-results">No jobs found for “{query}”. Try a different keyword.</p>
      ) : (
        <div className="jobs-container">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-type">{job.type}</div>
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="description">
                {job.description.length > 120
                  ? job.description.slice(0, 120) + "..."
                  : job.description}
              </p>
              <div className="job-meta">
                <span>{job.experience}</span>
              </div>
              <div className="job-salary">💰 ₹{job.salary.toLocaleString()}</div>
              <button className="view-btn" onClick={() => handleApply(job.id)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsPage;
