import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import './MissionVisionSection.css';

const MissionVisionSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="section mission-vision-section" ref={ref}>
            <div className="container">
                <div className="mission-vision-grid">
                    {/* Mission Card */}
                    <motion.div
                        className="mv-card mission-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mv-icon-wrapper">
                            <FaBullseye className="mv-icon" />
                        </div>
                        <h3 className="mv-title">Our Mission</h3>
                        <p className="mv-description">
                            To build dream spaces that transform visions into magnificent realities through architectural excellence, premium construction quality, and unwavering dedication to customer satisfaction.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="mv-card vision-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mv-icon-wrapper">
                            <FaEye className="mv-icon" />
                        </div>
                        <h3 className="mv-title">Our Vision</h3>
                        <p className="mv-description">
                            To be the most trusted and preferred construction and real estate company, known for delivering exceptional quality, innovative designs, and timely project completion.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
