import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredJobs } from '../features/jobs/jobsSelectors';
import JobCard from './JobCard';

export default function JobList() {
  const jobs = useSelector(selectFilteredJobs);
  const status = useSelector((s) => s.jobs.status);

  if (status === 'loading') return <div>Loading jobs…</div>;
  if (status === 'failed') return <div>Failed to load jobs</div>;
  if (!jobs.length) return <div>No jobs found</div>;

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
