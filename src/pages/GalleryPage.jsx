import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "/gallery/happy-customer-site.jpg", category: "Happy Customers", title: "Plot Booking" },
        { src: "/gallery/office-handover.jpg", category: "Celebrations", title: "Document Handover" },
        { src: "/gallery/team-visit.jpg", category: "Site Visits", title: "Team Inspection" },
        { src: "/gallery/customer-success-stories-1.jpg", category: "Success Stories", title: "Growing Family" },
        { src: "/gallery/customer-success-stories-2.jpg", category: "Success Stories", title: "Trust & Transparency" },
        { src: "/gallery/site-visit-group.jpg", category: "Bookings", title: "Plot Booking" },
        { src: "/gallery/customer-satisfaction-1.jpg", category: "Team Growth", title: "Welcoming New Marketing Professionals" },
        { src: "/gallery/site-discussion.jpg", category: "Site Visits", title: "Team Discussion" },
        { src: "/gallery/field-team.jpg", category: "Team Growth", title: "Welcoming New Marketing Professionals" },
    ];

    return (
        <div className="page-wrapper">
            {/* Page Header */}
            <div
                className="page-header"
                style={{
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/projects/mvs-header-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: '120px 0 60px'
                }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Project Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', opacity: 0.9 }}
                    >
                        A glimpse into our premium developments and diverse portfolio
                    </motion.p>
                </div>
            </div>

            <section className="section" style={{ padding: '60px 0', background: '#f8f9fa' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                layoutId={`image-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedImage(img)}
                                style={{
                                    cursor: 'pointer',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    background: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto'
                                }}
                                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
                            >
                                <div style={{
                                    height: '250px',
                                    overflow: 'hidden',
                                    background: '#f0f0f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'object-fit 0.3s ease' // object-fit isn't transitionable but browser might handle swap gracefully
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.objectFit = 'contain';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.objectFit = 'cover';
                                        }}
                                    />
                                </div>
                                <div style={{
                                    padding: '20px',
                                    background: 'white',
                                    borderTop: '1px solid #eee'
                                }}>
                                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#333' }}>{img.title}</h4>
                                    <span style={{ fontSize: '0.9rem', color: '#777', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90vh',
                                borderRadius: '10px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
