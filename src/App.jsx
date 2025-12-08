import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PropertiesPage from './pages/PropertiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import MVSColonyPage from './pages/MVSColonyPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/projects/mvs-colony" element={<MVSColonyPage />} />
          <Route path="/projects/devarakadra-municipality" element={<MVSColonyPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
