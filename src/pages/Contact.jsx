import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // specific instructions to send mail to this email
        const mailtoLink = `mailto:manjusri6526@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;

        setSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1 className="page-title">Get in Touch</h1>
                <p className="contact-subtitle">We'd love to hear from you</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Have questions? Reach out to us directly or fill out the form.</p>

                    <div className="info-item">
                        <h3>Address</h3>
                        <p>Kakapalyam, Salem, Tamilnadu 637504</p>
                    </div>

                    <div className="info-item">
                        <h3>Email</h3>
                        <p>manjusri6526@gmail.com</p>
                    </div>

                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>+91 9043038932</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    {submitted ? (
                        <div className="success-message">
                            <h3>Thank you!</h3>
                            <p>Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
