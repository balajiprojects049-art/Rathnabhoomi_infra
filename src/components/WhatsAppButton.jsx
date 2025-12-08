import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '917396528109'; // WhatsApp number
    const message = 'Hello! I am interested in your construction and real estate services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-text">Chat with us</span>
        </motion.a>
    );
};

export default WhatsAppButton;
