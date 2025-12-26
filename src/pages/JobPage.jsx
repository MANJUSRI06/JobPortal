// src/pages/JobPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./JobPage.css";

export default function JobPage() {
  const { jobId } = useParams();
  const job = useSelector((s) =>
    (s.jobs.jobs || []).find((j) => j.id === Number(jobId))
  );

  if (!job) return <div style={{ padding: 40 }}>Job not found</div>;

  return (
    <div className="job-detail-container">
      <h1>{job.title}</h1>
      <div className="job-subinfo">
        {job.company} • {job.location}
      </div>
      <p className="job-description">{job.description}</p>
      <div className="job-details">
        <strong>Type:</strong> {job.type} <br />
        <strong>Experience:</strong> {job.experience} <br />
        <strong>Salary:</strong> ₹{(job.salary || 0).toLocaleString()}
      </div>
    </div>
  );
}
