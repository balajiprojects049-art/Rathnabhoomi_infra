import { motion } from 'framer-motion';
import { FaPlay, FaArrowDown } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-overlay"></div>

            <div className="hero-content container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="hero-subtitle"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Premium Construction & Real Estate
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Building Your
                        <span className="text-gradient"> Dream Spaces</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Experience luxury living with our premium construction services, architectural excellence,
                        and prime real estate properties. We transform visions into magnificent realities.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.button
                            className="btn btn-gold btn-large"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('properties')}
                        >
                            Explore Properties
                        </motion.button>

                        <motion.button
                            className="btn btn-outline-white btn-large"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('services')}
                        >
                            Our Services
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <div className="stat-item">
                            <h3 className="stat-value">500+</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-value">15+</h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="stat-value">98%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                onClick={() => scrollToSection('about')}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaArrowDown />
                </motion.div>
                <span>Scroll to explore</span>
            </motion.div>

            {/* Floating Elements */}
            <div className="hero-shapes">
                <motion.div
                    className="shape shape-1"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                ></motion.div>
                <motion.div
                    className="shape shape-2"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                ></motion.div>
                <motion.div
                    className="shape shape-3"
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity }}
                ></motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
