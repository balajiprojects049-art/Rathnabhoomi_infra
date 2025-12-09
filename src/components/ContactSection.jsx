import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Call Us',
            info: '+91 9440 071 176',
            link: 'tel:+919440071176'
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            info: '+91 7396 528 109',
            link: 'https://wa.me/917396528109'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Us',
            info: 'rathnabhoomiinfra@gmail.com',
            link: 'mailto:rathnabhoomiinfra@gmail.com'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Visit Us',
            info: '10-3-23, Hyderabad Main Road, Yenugonda, Mahabubnagar - 509001',
            link: '#'
        }
    ];

    return (
        <section className="section contact-section" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Contact Us</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-description">
                        Have a question or want to discuss your dream project? We're here to help!
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter subject"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-gold btn-large btn-submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        className="contact-info-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="contact-info-cards">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    className="contact-info-card"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="contact-icon">{item.icon}</div>
                                    <h4>{item.title}</h4>
                                    <p>{item.info}</p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-container">
                            <div className="map-placeholder">
                                <FaMapMarkerAlt className="map-icon" />
                                <h3>Our Location</h3>
                                <p>10-3-23, Hyderabad Main Road, Yenugonda, Mahabubnagar, Telangana - 509001</p>
                                <a
                                    href="https://maps.app.goo.gl/T9WPwrcJxMC9F47X9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
