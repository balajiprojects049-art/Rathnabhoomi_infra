import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../data/testimonialsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="section section-dark testimonials-section" id="testimonials" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-description">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials-slider-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-card">
                                    <div className="quote-icon">
                                        <FaQuoteLeft />
                                    </div>

                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <FaStar key={index} className="star-icon" />
                                        ))}
                                    </div>

                                    <p className="testimonial-review">{testimonial.review}</p>

                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="author-info">
                                            <h4 className="author-name">{testimonial.name}</h4>
                                            <p className="author-designation">{testimonial.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="testimonial-stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="stat-box">
                        <h3 className="stat-number">1000+</h3>
                        <p className="stat-text">Happy Clients</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">4.9/5</h3>
                        <p className="stat-text">Average Rating</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">95%</h3>
                        <p className="stat-text">Repeat Customers</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">24/7</h3>
                        <p className="stat-text">Customer Support</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
