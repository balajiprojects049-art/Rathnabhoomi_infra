import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProperties />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;

