import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaArrowDown } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Background images for slideshow - Open Plots & Residential Layouts
    const backgroundImages = [
        '/plot1.png',  // Residential layout with infrastructure
        '/plot2.jpg',  // Premium plot with green landscape
        '/plot3.jpg',  // Open land with plot marking
        '/plot4.jpg',  // Developed layout with road and trees
    ];

    // Auto-advance slideshow every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section" id="home">
            {/* Background Image Slideshow */}
            <div className="hero-slideshow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        className="hero-slide"
                        style={{
                            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>

            {/* Slideshow Indicators */}
            <div className="slideshow-indicators">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

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
                        RATNA BHOOMI INFRA PROJECTS
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        WELCOME TO<br />
                        RATNABHOOMI INFRA PROJECTS
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Invest in your dream with our premium DTCP approved open residential plots.
                        Strategically located with excellent connectivity, complete infrastructure, and
                        high appreciation potential. Your perfect plot for building your dream home awaits.
                    </motion.p>




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
