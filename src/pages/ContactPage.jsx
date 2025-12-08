import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import '../App.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            {/* Page Header */}
            <motion.section
                className="page-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/contact-hero-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white'
                }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Get in touch with us for your construction needs
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Content */}
            <ContactSection />
        </div>
    );
};

export default ContactPage;
