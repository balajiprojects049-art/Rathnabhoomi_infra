import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Properties', href: '/properties' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const services = [
        'Open Plots',
        'Construction Services',
        'Architecture Planning',
        'Interior Design',
        'Layout Development',
        'Real Estate Projects'
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/share/15w5k34Hop/', label: 'Facebook' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/ratnabhoomiinfra?igsh=YjFwdzhoNjl4ajU4', label: 'Instagram' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-column">
                            <div className="footer-logo">
                                <span className="logo-text">
                                    <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>RATNABHOOMI</span>
                                    <span style={{ color: 'white', marginLeft: '5px' }}>INFRA</span>
                                </span>
                            </div>
                            <p className="footer-description">
                                Building dreams with excellence since 2008. Premium construction and real estate
                                solutions that stand the test of time.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services */}
                        <div className="footer-column">
                            <h3 className="footer-title">Our Services</h3>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-column">
                            <h3 className="footer-title">Contact Info</h3>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <FaMapMarkerAlt />
                                    <span>10-3-23, Hyderabad Main Road, Yenugonda, Mahabubnagar, Telangana - 509001</span>
                                </div>
                                <div className="contact-item">
                                    <FaPhone />
                                    <a href="tel:+919440071176">+91 9440 071 176</a>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope />
                                    <a href="mailto:rathnabhoomiinfra@gmail.com">rathnabhoomiinfra@gmail.com</a>
                                </div>
                            </div>
                            <div className="footer-hours">
                                <strong>Business Hours:</strong>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                <p>Sunday: By Appointment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Ratnabhoomi Infra Projects. All Rights Reserved.
                        </p>

                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#">Terms of Service</a>
                            <span className="separator">|</span>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
