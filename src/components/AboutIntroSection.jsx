import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './OpenPlotsSection.css'; // Reusing the same styles for consistency

const AboutIntroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="section open-plots-section" id="about-intro" ref={ref}>
            <div className="container">
                <div className="company-intro-grid">
                    {/* Left Content - Text */}
                    <motion.div
                        className="company-text-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="company-main-title">RATNABHOOMI INFRA PROJECTS</h2>

                        <p className="company-paragraph">
                            We are a <strong>Unique Real Estate Company</strong>, which provides an excellent opportunity for investment. It is a <strong>Golden Opportunity</strong> for the investors who believe in the <strong>power of the Land</strong>.
                        </p>

                        <p className="company-paragraph">
                            Many real estate companies are now selling open plots. There you will not find any development and recreational activities. However, <strong>Ratnabhoomi Infra Projects</strong> is proving its mettle by developing the open plots completely.
                        </p>

                        <p className="company-paragraph company-highlight">
                            An exclusive <strong>Green Lush Garden</strong> with various types of plants is developed at every project site. Apart from the Gardens, basic amenities like roads and electric poles are being provided.
                        </p>

                        <p className="company-paragraph" style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#555' }}>
                            <strong>Ratnabhoomi Infra Projects</strong> sites are situated very near to Hyderabad, very close to the proposed Regional Ring Road, and adjacent to the Jadcherla – Kodada National Highway No. 167. A Mega Food processing Unit in 412 Acres is going to be established very near to the site.
                        </p>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        className="company-image-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="company-main-image">
                            <img src="/about-intro.png" alt="Happy Lifestyle with Ratnabhoomi" />
                            <div className="image-overlay-caption">
                                <span>Recapturing the Serenity of Lifestyle</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntroSection;
