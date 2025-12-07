import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-left">
                        <a href="tel:+919440071176" className="top-bar-link">
                            <FaPhone /> +91 94400 71176
                        </a>
                        <a href="mailto:rathnabhoomiinfra@gmail.com" className="top-bar-link">
                            <FaEnvelope /> rathnabhoomiinfra@gmail.com
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <span>Premium Construction & Real Estate Solutions</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <motion.nav
                className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container navbar-content">
                    {/* Logo */}
                    <motion.div
                        className="navbar-logo"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="logo-text">
                            <span className="logo-royal">ROYAL</span>
                            <span className="logo-estates">ESTATES</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul className="navbar-menu desktop-menu">
                        <li>
                            <a onClick={() => scrollToSection('home')} className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('about')} className="nav-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('services')} className="nav-link">
                                Services
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('properties')} className="nav-link">
                                Properties
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('testimonials')} className="nav-link">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('contact')} className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <motion.a
                        href="https://wa.me/919440071176?text=Hi, I would like to get a quote for your construction and real estate services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold navbar-cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Quote
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : '100%',
                }}
                transition={{ duration: 0.3 }}
            >
                <ul className="mobile-menu-list">
                    <li>
                        <a onClick={() => scrollToSection('home')} className="mobile-nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('about')} className="mobile-nav-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('services')} className="mobile-nav-link">
                            Services
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('properties')} className="mobile-nav-link">
                            Properties
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/919440071176?text=Hi, I would like to get a quote for your construction and real estate services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-gold"
                        >
                            Get Quote
                        </a>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export default Navbar;
