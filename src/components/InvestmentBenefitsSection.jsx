import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaHome, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './InvestmentBenefitsSection.css';

const InvestmentBenefitsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const isVisible = isInView || mounted;

    const benefits = [
        {
            image: '/benefit-money.png',
            title: 'భవిష్యత్తు అవసరాలు కోసం',
            description: 'మీ కుటుంబ భవిష్యత్తు అవసరాలకు సురక్షితమైన ఆస్తి',
            color: '#E30613'
        },
        {
            image: '/benefit-education.png',
            title: 'పిల్లల ఉన్నత విద్య కోసం',
            description: 'మీ పిల్లల చదువుకు భద్రమైన ఇన్వెస్ట్మెంట్',
            color: '#0074B7'
        },
        {
            image: '/benefit-marriage.png',
            title: 'పిల్లల పెళ్లికి అవసరాల కోసం',
            description: 'పెళ్లి ఖర్చులకు ముందుగానే ఏర్పాటు',
            color: '#228B22'
        },
        {
            image: '/benefit-home.png', // Beautiful modern house image
            title: 'సొంత ఇంటికలను',
            description: 'మీ సొంత ఇంటి కలను నిజం చేసుకోవడానికి ఇదే సరైన సమయం. మా ప్లాట్లు మీకు అనుకూలమైన ధరలో మరియు మంచి లొకేషన్ లో లభిస్తాయి, తద్వారా మీరు మీ డ్రీమ్ హౌస్ ను సులభంగా నిర్మించుకోవచ్చు.',
            color: '#B8860B'
        },
        {
            image: '/benefit-business.jpg', // Shop/Store business image
            title: 'భవిష్యత్తులో ఏదైనా వ్యాపారం',
            description: 'భవిష్యత్తులో వ్యాపారం లేదా ఇతర ఆర్థిక అవసరాల కోసం ఈ రోజే భూమిపై పెట్టుబడి పెట్టండి. భూమి విలువ ఎప్పుడూ పెరుగుతూనే ఉంటుంది, ఇది మీకు మంచి రిటర్న్స్ ఇస్తుంది.',
            color: '#B22222'
        },
        {
            image: '/benefit-retirement.jpg', // Happy elderly couple retirement image
            title: 'రిటైర్మెంట్ తర్వాత',
            description: 'రిటైర్మెంట్ తర్వాత ప్రశాంతమైన మరియు ఆనందకరమైన జీవితం గడపడానికి ఇప్పుడే ప్లాన్ చేసుకోండి. ప్రకృతి ఒడిలో, కాలుష్య రహిత వాతావరణంలో మీ శేష జీవితాన్ని గడపండి.',
            color: '#006400'
        }
    ];

    return (
        <section className="section investment-benefits-section" id="plots" ref={ref}>
            <div className="container">
                {/* Main Heading */}
                <motion.div
                    className="benefits-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="benefits-title-telugu">
                        ఈ రోజు మీరు Ratnabhoomi Infra లో చేసే చిన్న ఇన్వెస్ట్మెంట్ –<br />
                        రేపటి మీ కుటుంబానికి 10 రెట్లు భద్రమైన భవిష్యత్తు!
                    </h2>
                </motion.div>

                {/* Section Subtitle */}
                <motion.div
                    className="section-intro"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="section-subtitle-telugu">
                        ఓపెన్ ప్లాట్లపై ఇన్వెస్ట్ చేయడం వలన కలిగే ప్రయోజనాలు
                    </h3>
                    <p className="intro-description-telugu">
                        ఈ రోజు మీరు తీసుకునే <strong>చిన్న నిర్ణయం</strong>—
                        వచ్చే 10 రోజుల్లో <strong>పెద్ద మార్పులు</strong> తెచ్చే శక్తి కలిగి ఉంటుంది.
                        <br /><br />
                        సమయానుసారంగా తీసుకునే ఒక <strong>మంచి నిర్ణయం</strong>
                        మీ మనసుకు <strong>నెమ్మది</strong>,
                        మీ లక్ష్యాలకు <strong>దారి</strong>,
                        మరియు మీ జీవితానికి <strong>స్పష్టత</strong> ఇవ్వగలదు.
                        <br /><br />
                        మీరు ఈ సమాచారం పంచుకోవడం ద్వారా
                        ఇతరులకు కూడా ఉపయోగపడే మార్గాన్ని చూపుతారు.
                        <br /><br />
                        <strong>ఇప్పుడే ప్రారంభించండి</strong>—
                        <strong>చిన్న అడుగు… పెద్ద ప్రయోజనం!</strong>
                    </p>
                </motion.div>

                {/* Benefits Cards with Images */}
                <div className="benefits-cards-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-card-telugu"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                            style={{ '--card-color': benefit.color }}
                        >
                            <div className="benefit-image-wrapper">
                                <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                            </div>
                            <div className="benefit-content">
                                <h4 className="benefit-title">{benefit.title}</h4>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <motion.div
                    className="additional-benefits"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="benefit-highlight">
                        <FaHome className="highlight-icon" />
                        <div className="highlight-text">
                            <strong>మీ కలల ఇల్లు నిర్మించుకోండి</strong>
                            <p>DTCP ఆమోదితమైన ప్లాట్లపై సొంత ఇల్లు కట్టుకునే అవకాశం</p>
                        </div>
                    </div>

                    <div className="benefit-highlight">
                        <FaChartLine className="highlight-icon" />
                        <div className="highlight-text">
                            <strong>ధర పెరుగుదల హామీ</strong>
                            <p>ప్రధాన రహదారి సమీపంలో ఉన్న ప్లాట్ల విలువ ఏటా 10-15% పెరుగుతుంది</p>
                        </div>
                    </div>

                    <div className="benefit-highlight">
                        <FaShieldAlt className="highlight-icon" />
                        <div className="highlight-text">
                            <strong>పూర్తి చట్టబద్ధత</strong>
                            <p>స్పష్టమైన పత్రాలు, సరైన అనుమతులు, మరియు పారదర్శక లావాదేవీలు</p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="benefits-cta"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <p className="cta-text-telugu">
                        <strong>నేడే మీ భవిష్యత్తుకు పెట్టుబడి పెట్టండి!</strong><br />
                        Ratnabhoomi Infra Projects లో అందుబాటులో ఉన్న ప్లాట్లను వీక్షించండి
                    </p>
                    <motion.a
                        href="/mvs-colony-brochure.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-large"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        అందుబాటులో ఉన్న ప్లాట్లను చూడండి
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default InvestmentBenefitsSection;
