import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home',       to: '/'          },
    { label: 'Our Spaces', to: '/spaces'    },
    { label: 'Amenities',  to: '/amenities' },
    // { label: 'Packages',   to: '/packages'  },
    { label: 'Contact Us', to: '/contact'   },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={`nav-base${scrolled ? ' nav-scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Replace src with your actual logo path e.g. /logo.png */}
          <img
            src="/mhr_logo-removebg-preview.png"
            alt="Morgan Hill Residence"
            style={{ width: 'auto', maxWidth: '220px', height: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${isActive(link.to) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {/* Book Now – kept as-is per your instructions */}
          <Link to="/contact" className="nav-cta">
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          style={{ color: 'var(--gold)', fontSize: '1.1rem' }}
        >
          Book Now →
        </Link>
      </div>
    </>
  );
}


