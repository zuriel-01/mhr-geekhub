import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import OurSpaces from './pages/OurSpaces';
import Amenities from './pages/Amenities';
// import Packages from './pages/Packages';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />}      />
          <Route path="/spaces"    element={<OurSpaces />} />
          <Route path="/amenities" element={<Amenities />} />
          {/* <Route path="/packages"  element={<Packages />}  /> */}
          <Route path="/contact"   element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
