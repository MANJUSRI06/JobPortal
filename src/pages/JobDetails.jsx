import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './JobDetails.css';

export default function JobDetails() {
  const { jobId } = useParams();
  const job = useSelector((s) => (s.jobs.jobs || []).find((j) => j.id === Number(jobId)));

  if (!job) {
    return <div className="job-details-wrap"><div className="not-found">Job not found</div></div>;
  }

  // removed mailto since Apply Now is hover-only now

  return (
    <div className="job-details-wrap">
      <div className="job-main">
        <h1 className="job-title">{job.title}</h1>
        <div className="job-sub">{job.company} • {job.location} • {job.type}</div>

        <section className="section">
          <h2>About the job</h2>
          <p>
            We are looking for a passionate and detail-oriented Junior Web Developer to join our
            tech team. If you enjoy building clean, responsive, and user-friendly web interfaces —
            this role is perfect for you. You will work with senior developers, designers, and
            product teams to deliver high-quality web solutions.
          </p>
        </section>

        <section className="section">
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop responsive web pages using HTML, CSS, JavaScript, and modern frameworks.</li>
            <li>Maintain and update existing websites and web applications.</li>
            <li>Work closely with senior developers to implement new features.</li>
            <li>Optimize websites for speed, performance, and SEO best practices.</li>
            <li>Troubleshoot issues, debug code, and ensure smooth functionality across browsers.</li>
            <li>Collaborate using Git, project management tools, and internal communication platforms.</li>
          </ul>
        </section>

        <section className="section">
          <h3>Required Skills</h3>
          <ul>
            <li>Strong understanding of HTML5, CSS3, JavaScript.</li>
            <li>Basic knowledge of React / Vue / Angular (any one is a plus).</li>
            <li>Familiarity with Git/GitHub.</li>
            <li>Understanding of Responsive Web Design principles.</li>
            <li>Basic knowledge of APIs and JSON data handling.</li>
            <li>Ability to write clean and maintainable code.</li>
          </ul>
        </section>

        <section className="section">
          <h3>Preferred Skills (Good to Have)</h3>
          <ul>
            <li>Experience with Tailwind CSS / Bootstrap.</li>
            <li>Understanding of Node.js or backend basics.</li>
            <li>Basic knowledge of UI/UX principles.</li>
            <li>Experience with Figma or similar design tools.</li>
          </ul>
        </section>

      </div>

      <aside className="job-side">
        <div className="company-card">
          <div className="company-logo">{job.company.charAt(0)}</div>
          <div className="company-info">
            <h4 className="company-name">{job.company}</h4>
            <div className="company-meta">Advertising Services • 11-50 employees</div>
            <p className="company-desc">{job.company} was established in 2014. It focuses on software development and web solutions.</p>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Qualifications</h3>
          <p>Bachelor's degree in Computer Science, IT, or related field (or equivalent skills). 0–1 year experience in web development (Freshers with good projects are welcome).</p>
        </div>

        <div className="sidebar-section">
          <h3>Work Environment</h3>
          <p>Remote (Work from Home). Flexible collaboration with the technical team. Opportunities for learning, mentorship, and career growth.</p>
        </div>

        <div className="apply-btn-wrapper">Apply Now</div>
      </aside>
    </div>
  );
}
