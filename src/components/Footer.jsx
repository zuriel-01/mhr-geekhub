import { Link, useNavigate } from 'react-router-dom';
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiThreads } from "react-icons/si";

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (to) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-base">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              {/* Replace with your actual logo path */}
              <img
                src="/mhr_logo-removebg-preview.png"
                alt="Morgan Hill Residence"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </Link>
            <p className="footer-tagline">
              Abuja's premier short-stay destination. Curated comfort, absolute privacy,
              and a warmth you'll return to.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/vip_mhresidence/" target="_blank" className="social-btn"> <SiInstagram /></a>
              <a href="https://api.whatsapp.com/send/?phone=%2B2348146114050&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQMiUxlOEjVMEyaOCLQ2nDaR-sZ3-064BKLq93tuVDF9NIIlTi6eUXDb105k_aem_dvRJUrNSSymtvfA3kllJ4w" className="social-btn" target="_blank" rel="noreferrer"> <IoLogoWhatsapp /></a>
              <a href="https://www.threads.com/@vip_mhresidence?xmt=AQG0EIU13pGNVB3xrcvGlW4awAiV7oVS_77sIYbIsqiyFCk" target="_blank" className="social-btn"><SiThreads /></a>
            </div>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <button onClick={() => handleNav('/')}         style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>Home</button>
            <button onClick={() => handleNav('/spaces')}   style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>Our Spaces</button>
            <button onClick={() => handleNav('/amenities')}style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>Amenities</button>
            <button onClick={() => handleNav('/packages')} style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>Packages</button>
            <button onClick={() => handleNav('/contact')}  style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>Contact</button>
          </div>

          {/* Suites */}
          <div className="footer-col">
            <h4>Our Suites</h4>
            <button onClick={() => handleNav('/spaces')} style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>The Classic Suite</button>
            <button onClick={() => handleNav('/spaces')} style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>The Executive Suite</button>
            <button onClick={() => handleNav('/spaces')} style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>The Penthouse Retreat</button>
            <button onClick={() => handleNav('/packages')} style={{ background:'none', border:'none', cursor:'pointer', display:'block', color:'rgba(255,255,255,0.45)', fontSize:'0.82rem', fontFamily:'Inter,sans-serif', marginBottom:'10px', textAlign:'left', transition:'color 0.2s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}>View Packages</button>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>📞 08160892247</p>
            <p style={{ marginTop: '8px' }}>📧 hello@morganhillresidence.com</p>
            <p style={{ marginTop: '8px' }}>📍 Abuja, Nigeria</p>
            <p style={{ marginTop: '8px' }}>🌐 morganhillresidence.com</p>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 Morgan Hill Residence. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
