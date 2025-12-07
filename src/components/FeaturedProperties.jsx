import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { propertiesData } from '../data/propertiesData';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [filter, setFilter] = useState('All');
    const [favorites, setFavorites] = useState([]);

    const filters = ['All', 'Villa', 'Apartment', 'Plot', 'Penthouse'];

    const filteredProperties = filter === 'All'
        ? propertiesData
        : propertiesData.filter(property => property.type === filter);

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(favId => favId !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="section featured-properties" id="properties" ref={ref}>
            <div className="container-fluid">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Featured Properties</span>
                    <h2 className="section-title">Discover Your Dream Property</h2>
                    <p className="section-description">
                        Explore our curated collection of premium residential and commercial properties
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="property-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {filters.map((filterName) => (
                        <button
                            key={filterName}
                            className={`filter-btn ${filter === filterName ? 'filter-btn-active' : ''}`}
                            onClick={() => setFilter(filterName)}
                        >
                            {filterName}
                        </button>
                    ))}
                </motion.div>

                {/* Properties Grid */}
                <div className="properties-grid">
                    {filteredProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            className="property-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Property Image */}
                            <div className="property-image">
                                <div className="property-image-placeholder">
                                    <FaMapMarkerAlt className="placeholder-icon" />
                                </div>
                                <div className="property-badge">{property.status}</div>
                                <button
                                    className={`favorite-btn ${favorites.includes(property.id) ? 'favorite-active' : ''}`}
                                    onClick={() => toggleFavorite(property.id)}
                                >
                                    <FaHeart />
                                </button>
                                <div className="property-overlay">
                                    <button className="btn btn-gold btn-small">View Details</button>
                                </div>
                            </div>

                            {/* Property Info */}
                            <div className="property-info">
                                <div className="property-type">{property.type}</div>
                                <h3 className="property-title">{property.title}</h3>

                                <div className="property-location">
                                    <FaMapMarkerAlt />
                                    <span>{property.location}</span>
                                </div>

                                <div className="property-features">
                                    {property.bedrooms > 0 && (
                                        <div className="feature">
                                            <FaBed />
                                            <span>{property.bedrooms} Beds</span>
                                        </div>
                                    )}
                                    {property.bathrooms > 0 && (
                                        <div className="feature">
                                            <FaBath />
                                            <span>{property.bathrooms} Baths</span>
                                        </div>
                                    )}
                                    <div className="feature">
                                        <FaRulerCombined />
                                        <span>{property.area}</span>
                                    </div>
                                </div>

                                <div className="property-footer">
                                    <div className="property-price">{property.price}</div>
                                    <a
                                        href={`https://wa.me/919848759376?text=Hi, I'm interested in ${property.title} - ${property.type} located at ${property.location}. Price: ${property.price}. Please provide more details.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="property-btn"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center"
                    style={{ marginTop: '3rem' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.button
                        className="btn btn-primary btn-large"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Properties
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
