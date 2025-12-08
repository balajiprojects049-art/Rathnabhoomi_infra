import HeroSection from '../components/HeroSection';
import OpenPlotsSection from '../components/OpenPlotsSection';
import ApprovedLayoutsSection from '../components/ApprovedLayoutsSection';
import InvestmentBenefitsSection from '../components/InvestmentBenefitsSection';
import '../App.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <OpenPlotsSection />
            <ApprovedLayoutsSection />
            <InvestmentBenefitsSection />
        </div>
    );
};

export default HomePage;
