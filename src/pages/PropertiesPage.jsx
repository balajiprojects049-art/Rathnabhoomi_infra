import FeaturedProperties from '../components/FeaturedProperties';
import { motion } from 'framer-motion';
import '../App.css';

const PropertiesPage = () => {
    return (
        <div className="properties-page">
            {/* Page Header */}
            <motion.section
                className="page-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/plot1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    position: 'relative'
                }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ color: 'white' }}
                    >
                        Our Properties
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                    >
                        Explore our premium DTCP/HMDA approved open plots and ready-to-move houses in Mahabubnagar
                    </motion.p>
                </div>
            </motion.section>

            {/* Properties Content */}
            <FeaturedProperties />
        </div>
    );
};

export default PropertiesPage;
