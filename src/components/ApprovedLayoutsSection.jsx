import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './ApprovedLayoutsSection.css';

const ApprovedLayoutsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="section approved-layouts-section" ref={ref}>
            <div className="container">
                {/* Section Title */}
                <motion.div
                    className="approvals-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="approvals-title">Approved Layouts</h2>
                </motion.div>

                {/* Approval Logos Banner */}
                <motion.div
                    className="approvals-banner"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="/approved-layouts-banner.png"
                        alt="HMDA, DTCP Approved, TS RERA Approved Layouts"
                        className="banner-image"
                    />
                </motion.div>

                {/* Individual Approval Cards */}
                <div className="approval-cards-grid">
                    <motion.div
                        className="approval-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="approval-image">
                            <img src="/hmda-approval.jpg" alt="HMDA Approved - Hyderabad Metropolitan Development Authority" />
                        </div>
                        <div className="approval-info">
                            <h3>HMDA Approved</h3>
                            <p>Hyderabad Metropolitan Development Authority certified layouts</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="approval-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="approval-image">
                            <img src="/muda-approved.jpg" alt="MUDA Approved Layout" />
                        </div>
                        <div className="approval-info">
                            <h3>MUDA Approved</h3>
                            <p>Officially approved and registered layouts</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="approval-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="approval-image">
                            <img src="/tsrera-logo.jpg" alt="TS RERA Registered - Telangana Real Estate Regulatory Authority" />
                        </div>
                        <div className="approval-info">
                            <h3>TS RERA Registered</h3>
                            <p>Telangana Real Estate Regulatory Authority approved</p>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badge */}
                <motion.div
                    className="trust-message"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p>All our layouts are legally approved and comply with government regulations, ensuring 100% safe and secure investment for your future.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ApprovedLayoutsSection;
