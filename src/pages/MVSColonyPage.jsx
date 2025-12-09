import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../App.css';

const MVSColonyPage = () => {
    return (
        <div className="page-wrapper">
            {/* Page Header */}
            <div
                className="page-header"
                style={{
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/projects/mvs-header-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: '180px 0 100px'
                }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        MVS Colony
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.5rem', fontWeight: '500' }}
                    >
                        Devarakadra Municipality - Premium Villa Plots
                    </motion.p>
                </div>
            </div>

            {/* Project Overview Section */}
            < ProjectSection
                title="Project Overview & Highlights"
                image="/projects/mvs-cover.jpg"
                imageAlt="MVS Colony Brochure"
                reverse={false}
            >
                <p><strong>MVS Colony</strong> is a prestigious venture by <strong>Ratnabhoomi Infra Projects</strong>, situated in the rapidly developing Devarakadra Municipality. This project offers <strong>Premium Villa Plots</strong> that are fully ready for construction.</p>
                <p>The layout is <strong>MUDA Approved</strong> (Mahabubnagar Urban Development Authority) and registered under <strong>TBPASS</strong>, ensuring complete legal clarity and peace of mind for buyers.</p>
                <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>✅ <strong>LP No:</strong> 240845/LP/GP/280439/0008/2022</li>
                    <li style={{ marginBottom: '0.5rem' }}>✅ <strong>LP No:</strong> 406973/LP/GP/205035/0028/2024</li>
                    <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Status:</strong> Ready for Construction</li>
                    <li>✅ <strong>Type:</strong> Premium Residential Villa Plots</li>
                </ul>
            </ProjectSection >

            {/* Layout Plan Section */}
            < ProjectSection
                title="Master Layout Plan"
                image="/projects/mvs-masterplan.jpg"
                imageAlt="MVS Colony Master Plan"
                reverse={true}
            >
                <p>The Master Plan of MVS Colony is meticulously designed to offer a spacious and organized community living experience. The layout features wide internal roads, including a grand <strong>100' Feet Wide Road</strong> connecting to Mahabubnagar.</p>
                <p><strong>Key Layout Features:</strong></p>
                <ul style={{ marginLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>Available in Phase 1 and Phase 2.</li>
                    <li>Generous plot sizes including corner plots and east-facing options.</li>
                    <li>Designated spaces for utility, social infrastructure, and parks.</li>
                    <li>Vastly spread with clear demarcation of plots and roads.</li>
                </ul>
                <p><em>*Note: Extra charges apply for East Facing, Corner, and North-East Corner plots.</em></p>
            </ProjectSection >

            {/* Location Section */}
            < ProjectSection
                title="Strategic Location & Connectivity"
                image="/projects/mvs-locationmap.jpg"
                imageAlt="MVS Colony Location Map"
                reverse={false}
            >
                <p>MVS Colony boasts a strategic location with excellent connectivity to major landmarks and highways. It is situated right next to the <strong>National Highway 167 (NH-167)</strong>, ensuring seamless travel.</p>
                <p><strong>Proximity Highlights:</strong></p>
                <ul style={{ marginLeft: '1.2rem' }}>
                    <li><strong>Connectivity:</strong> Direct access to Raichur Road and Hyderabad Main Road.</li>
                    <li><strong>Landmarks:</strong> Near Devarakadra Municipality Office, RTC Bus Stand, and Police Station.</li>
                    <li><strong>Education & Health:</strong> Close to Govt. Junior College, Govt. 30 Bedded Hospital, and schools like SVITS.</li>
                    <li><strong>Key Installations:</strong> Nearby Proposed Brahmos Missile Manufacturing Unit and collector office.</li>
                </ul>
            </ProjectSection >

            {/* Investment Benefits Section */}
            < ProjectSection
                title="Why Invest in MVS Colony?"
                image="/projects/mvs-highlights.jpg"
                imageAlt="Investment Benefits"
                reverse={true}
            >
                <p>Investing in MVS Colony is not just buying land; it's securing a <strong>Five Star Value</strong> asset for your future. Ratnabhoomi Infra Projects brings you a golden opportunity where a small investment today becomes a great asset tomorrow.</p>
                <p><strong>Life's Key Milestones:</strong></p>
                <ul style={{ marginLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li><strong>Future Security:</strong> Secure your family's financial future.</li>
                    <li><strong>Education:</strong> Build a fund for your children's higher education.</li>
                    <li><strong>Marriage:</strong> Create wealth for your children's marriage.</li>
                    <li><strong>Retirement:</strong> Ensure a peaceful and financially independent retirement.</li>
                    <li><strong>Dream Home:</strong> The perfect place to build your dream home.</li>
                </ul>
                <p style={{ fontWeight: 'bold', color: '#E30613' }}>"Small Investment Today, Great Asset For Tomorrow"</p>
            </ProjectSection >

            {/* Call to Action */}
            < section style={{ padding: '60px 0', textAlign: 'center', background: '#f8f9fa' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '20px', color: '#0074B7' }}>Interested in MVS Colony?</h2>
                    <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>Contact us today for site visits and booking enquiries.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Contact Us Now</a>
                        <a href="https://maps.app.goo.gl/kSvzxHJdAvacVtmW6" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>📍 Site Location</a>
                    </div>
                </div>
            </section >
        </div >
    );
};

// Reusable Section Component
const ProjectSection = ({ title, image, imageAlt, children, reverse }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="section" ref={ref} style={{ padding: '80px 0', background: reverse ? '#fff' : '#f8f9fa' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    direction: reverse ? 'rtl' : 'ltr' // Visually swap left/right
                }}>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        style={{ direction: 'ltr' }} // Reset text direction for content
                    >
                        <div style={{
                            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            border: '5px solid white'
                        }}>
                            <img
                                src={image}
                                alt={imageAlt}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    transition: 'transform 0.5s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ direction: 'ltr' }} // Reset text direction
                    >
                        <h2 style={{
                            color: '#0074B7',
                            marginBottom: '1.5rem',
                            fontSize: '2rem',
                            fontWeight: '700',
                            position: 'relative',
                            paddingBottom: '15px'
                        }}>
                            {title}
                            <span style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '60px',
                                height: '4px',
                                background: '#E30613'
                            }}></span>
                        </h2>
                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MVSColonyPage;
