import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAward, FaUsers, FaHome, FaCheckCircle } from 'react-icons/fa';
import './AboutSection.css';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const features = [
        { icon: <FaAward />, title: 'Award Winning', description: 'Multiple industry awards' },
        { icon: <FaUsers />, title: 'Expert Team', description: '200+ professionals' },
        { icon: <FaHome />, title: 'Quality Projects', description: '500+ delivered' },
        { icon: <FaCheckCircle />, title: 'Trusted Brand', description: '15 years legacy' }
    ];

    return (
        <section className="section about-section" id="about" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    {/* Left Content */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-header text-left">
                            <span className="section-subtitle">About Us</span>
                            <h2 className="section-title">Building Excellence Since 2008</h2>
                        </div>

                        <p className="about-text">
                            We are a premium construction and real estate company committed to delivering
                            world-class projects that stand the test of time. With over 15 years of experience,
                            we have established ourselves as leaders in luxury construction, architectural design,
                            and real estate development.
                        </p>

                        <p className="about-text">
                            Our mission is to create spaces that inspire, combining innovative design with
                            sustainable construction practices. Every project we undertake reflects our
                            commitment to quality, transparency, and customer satisfaction.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="about-feature"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-content">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Us
                        </motion.button>
                    </motion.div>

                    {/* Right Image Grid */}
                    <motion.div
                        className="about-images"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="image-grid">
                            <div className="image-card image-card-1">
                                <div className="image-overlay">
                                    <span className="overlay-text">Premium Quality</span>
                                </div>
                            </div>
                            <div className="image-card image-card-2">
                                <div className="image-overlay">
                                    <span className="overlay-text">Modern Design</span>
                                </div>
                            </div>
                            <div className="image-card image-card-3">
                                <div className="image-overlay">
                                    <span className="overlay-text">Excellence</span>
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            className="experience-badge"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="badge-content">
                                <h3>15+</h3>
                                <p>Years<br />Experience</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
