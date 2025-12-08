import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import '../App.css';

const TestimonialsPage = () => {
    return (
        <div className="testimonials-page">
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
                        Client Testimonials
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        What our satisfied clients say about us
                    </motion.p>
                </div>
            </motion.section>

            {/* Testimonials Content */}
            <Testimonials />
        </div>
    );
};

export default TestimonialsPage;
