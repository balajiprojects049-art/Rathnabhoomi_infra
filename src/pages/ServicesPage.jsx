import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';
import '../App.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            {/* Page Header */}
            <motion.section
                className="page-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Comprehensive construction and real estate solutions
                    </motion.p>
                </div>
            </motion.section>

            {/* Services Content */}
            <ServicesSection />
        </div>
    );
};

export default ServicesPage;
