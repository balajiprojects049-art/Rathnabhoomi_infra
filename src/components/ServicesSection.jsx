import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaMapMarkedAlt,
    FaHardHat,
    FaDrawPolygon,
    FaCouch,
    FaRulerCombined,
    FaBuilding
} from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import './ServicesSection.css';

const iconMap = {
    FaMapMarkedAlt: <FaMapMarkedAlt />,
    FaHardHat: <FaHardHat />,
    FaDrawPolygon: <FaDrawPolygon />,
    FaCouch: <FaCouch />,
    FaRulerCombined: <FaRulerCombined />,
    FaBuilding: <FaBuilding />
};

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="section section-dark services-section" id="services" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Services</span>
                    <h2 className="section-title">Comprehensive Solutions for Your Dreams</h2>
                    <p className="section-description">
                        From concept to completion, we offer end-to-end services in construction,
                        real estate, and design excellence.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">
                                {iconMap[service.icon]}
                            </div>

                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                className="service-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us */}
                <motion.div
                    className="why-choose-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="why-choose-title">Why Choose Royal Estates?</h3>
                    <div className="why-choose-grid">
                        <div className="why-choose-item">
                            <div className="why-choose-number">01</div>
                            <h4>Premium Quality</h4>
                            <p>We use only the finest materials and employ world-class construction techniques</p>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-number">02</div>
                            <h4>Timely Delivery</h4>
                            <p>Our projects are completed on schedule without compromising on quality</p>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-number">03</div>
                            <h4>Expert Team</h4>
                            <p>200+ experienced professionals dedicated to excellence in every project</p>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-number">04</div>
                            <h4>Transparent Process</h4>
                            <p>Complete transparency in pricing, documentation, and project execution</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
