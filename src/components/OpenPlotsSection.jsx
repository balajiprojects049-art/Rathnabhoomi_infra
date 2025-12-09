import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './OpenPlotsSection.css';

const OpenPlotsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const isVisible = isInView || mounted;

    return (
        <section className="section open-plots-section" id="plots" ref={ref}>
            <div className="container">
                <div className="company-intro-grid">
                    {/* Left Content - Text */}
                    <motion.div
                        className="company-text-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="company-main-title">RATNABHOOMI INFRA PROJECTS</h2>

                        <p className="company-paragraph">
                            Ratnabhoomi Infra Projects is a <strong>unique and customer-focused real estate company</strong> that offers excellent and trusted opportunities for smart land investments. We provide a <strong>golden opportunity</strong> for investors who believe in the real power, safety, and long-term value of land.
                        </p>

                        <p className="company-paragraph">
                            Unlike many real estate companies that only sell open plots without proper planning or development, <strong>Ratnabhoomi Infra Projects stands apart</strong> by delivering <strong>fully developed open plots</strong> with clear layouts, proper road connectivity, drainage systems, parks, and modern amenities.
                        </p>

                        <p className="company-paragraph company-highlight">
                            At Ratnabhoomi Infra Projects, we don't just sell land — <strong>we create value, growth, and secure futures</strong> for our customers through transparent dealings and reliable development.
                        </p>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        className="company-image-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="company-main-image">
                            <img src="/plot1.png" alt="Ratnabhoomi Infra Projects - Developed Open Plots" />
                            <div className="image-overlay-caption">
                                <span>Recapturing the Joy of Life</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OpenPlotsSection;
