import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AboutIntroSection from '../components/AboutIntroSection';
import MissionVisionSection from '../components/MissionVisionSection';
import '../App.css';

const AboutPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div className="about-page">
            {/* Page Header */}
            <motion.section
                className="page-header about-hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ backgroundImage: "url('/about-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Learn more about Ratnabhoomi Infra Projects
                    </motion.p>
                </div>
            </motion.section>

            <AboutIntroSection />

            {/* Mission & Vision Cards */}
            <MissionVisionSection />

            {/* Why Choose Us Content */}
            <section className="section" ref={ref} style={{ padding: '40px 0' }}>
                <div className="container">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-text">
                            <h3>Why Choose Us?</h3>
                            <ul>
                                <li><strong>Premium Open Plots:</strong> DTCP/HMDA approved layouts in high-growth corridors with clear titles and spot registration.</li>
                                <li><strong>Quality Construction:</strong> Excellence in residential and commercial construction using premium materials and modern technology.</li>
                                <li><strong>Strategic Locations:</strong> Properties situated near highways, ring roads, and developing industrial hubs for high appreciation.</li>
                                <li><strong>Vaastu Compliant:</strong> 100% Vaastu compliant plot layouts and home designs for peace and prosperity.</li>
                                <li><strong>End-to-End Development:</strong> From land acquisition to park development, roads, electricity, and drainage systems.</li>
                                <li><strong>Transparent Dealings:</strong> Honest pricing, clear documentation, and hassle-free ownership transfer process.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
