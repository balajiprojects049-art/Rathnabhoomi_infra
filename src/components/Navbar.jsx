import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';
import './NavbarDropdown.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setMobileProjectsOpen(false);
    }, [location]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-left">
                        <a href="tel:+919440071176" className="top-bar-link">
                            <FaPhone /> +91 9440 071 176
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
                    <Link to="/" className="navbar-logo-link">
                        <motion.div
                            className="navbar-logo"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/rathnabhoomi-logo.png"
                                alt="Rathnabhoomi Infra Projects"
                                className="logo-image"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="navbar-menu desktop-menu">
                        <li>
                            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item-dropdown">
                            <span className={`nav-link ${location.pathname.includes('/projects') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                Our Projects <FaChevronDown size={12} />
                            </span>
                            <div className="dropdown-menu">
                                <Link to="/projects/mvs-colony" className="dropdown-item">MVS Colony (Devarakadra Municipality)</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/properties" className={`nav-link ${isActive('/properties') ? 'active' : ''}`}>
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <motion.a
                        href="https://wa.me/917396528109?text=Hi, I would like to get a quote for your construction and real estate services."
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
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? 'all' : 'none',
                }}
                transition={{ duration: 0.3 }}
            >
                <button
                    className="mobile-menu-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaTimes />
                </button>
                <ul className="mobile-menu-list">
                    <li>
                        <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <div
                            className={`mobile-nav-link ${location.pathname.includes('/projects') ? 'active' : ''}`}
                            onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                        >
                            Our Projects <FaChevronDown size={14} style={{ transform: mobileProjectsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                        </div>
                        <AnimatePresence>
                            {mobileProjectsOpen && (
                                <motion.div
                                    className="mobile-dropdown"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link to="/projects/mvs-colony" className="mobile-dropdown-item">MVS Colony (Devarakadra Municipality)</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li>
                        <Link to="/properties" className={`mobile-nav-link ${isActive('/properties') ? 'active' : ''}`}>
                            Properties
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/917396528109?text=Hi, I would like to get a quote for your construction and real estate services."
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
