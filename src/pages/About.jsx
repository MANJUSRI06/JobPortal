import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1 className="page-title">About Jobify</h1>
                <p className="about-subtitle">Connecting Talent with Opportunity</p>
            </div>

            <section className="about-section mission">
                <div className="content-container">
                    <h2>Our Mission</h2>
                    <p>
                        At Jobify, we believe that everyone deserves a career that brings out the best in them.
                        Our mission is to bridge the gap between talented individuals and world-class organizations.
                        We strive to create a seamless, transparent, and efficient hiring ecosystem that empowers
                        professionals to find their dream jobs and helps companies build dream teams.
                    </p>
                </div>
            </section>

            <section className="about-section values">
                <div className="content-container">
                    <h2>Why Choose Us?</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Transparency</h3>
                            <p>We believe in open communication and honest practices in every interaction.</p>
                        </div>
                        <div className="value-card">
                            <h3>Innovation</h3>
                            <p>Leveraging cutting-edge technology to match the right candidate with the right role.</p>
                        </div>
                        <div className="value-card">
                            <h3>Community</h3>
                            <p>Building a supportive network for professionals to grow and succeed together.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section team">
                <div className="content-container">
                    <h2>Meet the Team</h2>
                    <p>
                        We are a passionate team of engineers, designers, and HR specialists dedicated to redefining recruitment.
                    </p>
                    {/* Placeholder for team members if needed in future */}
                </div>
            </section>
        </div>
    );
};

export default About;
