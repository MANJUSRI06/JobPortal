// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import fullstack from "../assets/home1.jpg";
import dataanalyst from "../assets/home2.jpg";
import aidev from "../assets/home3.jpg";
import frontend from "../assets/home4.jpg";
import backend from "../assets/home5.jpg";

const jobImages = [
  {
    src: fullstack,
    title: "Full Stack Developer",
    tagline: "Building powerful web solutions end-to-end",
  },
  {
    src: dataanalyst,
    title: "Data Analyst",
    tagline: "Turning data into actionable insights",
  },
  {
    src: aidev,
    title: "AI Developer",
    tagline: "Designing the future with intelligence",
  },
  {
    src: frontend,
    title: "Frontend Engineer",
    tagline: "Crafting beautiful and responsive interfaces",
  },
  {
    src: backend,
    title: "Backend Developer",
    tagline: "Powering seamless digital experiences",
  },
];

const categories = [
  "Web Development",
  "App Development",
  "Cloud Computing",
  "Cybersecurity",
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
  "UI/UX Design",
  "DevOps & Testing",
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.jobs || []);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % jobImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = (current - 1 + jobImages.length) % jobImages.length;
  const next = (current + 1) % jobImages.length;

  // 🔍 Redirect to Jobs page with search query
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/jobs?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const suggestions =
    searchQuery.trim().length > 0
      ? (() => {
        const q = searchQuery.toLowerCase();
        // category matches from the static categories list
        const categoryMatches = categories
          .filter((c) => c.toLowerCase().includes(q))
          .slice(0, 4)
          .map((c) => ({ type: 'category', value: c }));

        const jobMatches = jobs
          .filter((j) =>
            [j.title, j.company, j.location, j.type, j.category]
              .join(" ")
              .toLowerCase()
              .includes(q)
          )
          .slice(0, 6)
          .map((j) => ({ type: 'job', value: j }));

        return [...categoryMatches, ...jobMatches];
      })()
      : [];

  const selectSuggestion = (text) => {
    setSearchQuery(text);
    setShowSuggestions(false);
    navigate(`/jobs?q=${encodeURIComponent(text)}`);
  };

  // 🔹 Navigate when a category card is clicked
  const handleCategoryClick = (category) => {
    navigate(`/jobs?q=${encodeURIComponent(category)}`);
  };

  return (
    <div className="home-page">
      {/* 🖼️ Image Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          {jobImages.map((job, index) => (
            <article
              key={index}
              className={
                index === current
                  ? "slide activeSlide"
                  : index === prev
                    ? "slide prevSlide"
                    : index === next
                      ? "slide nextSlide"
                      : "slide"
              }
            >
              <img src={job.src} alt={job.title} className="job-image" />
              <div className="overlay">
                <h2>{job.title}</h2>
                <p>{job.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🔍 Search Bar Section */}
      <div className="job-search-section">
        <div>
          <div style={{ display: 'flex', width: '100%', position: 'relative', alignItems: 'center' }}>
            <input
              type="text"
              className="job-search-input"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="job-search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((s, idx) => (
                <li
                  key={s.type === 'job' ? s.value.id : `cat-${idx}`}
                  className="suggestion-item"
                  onClick={() => selectSuggestion(s.type === 'job' ? s.value.title : s.value)}
                >
                  {s.type === 'job' ? (
                    <><strong>{s.value.title}</strong> — <span style={{ opacity: 0.8 }}>{s.value.company}</span></>
                  ) : (
                    <><strong>{s.value}</strong> <span style={{ opacity: 0.85, marginLeft: 8 }}>category</span></>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 🧭 Explore by Category */}
      <section className="category-section">
        <h2>Explore by Category</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
