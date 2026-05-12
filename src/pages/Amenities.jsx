import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSecurity } from "react-icons/md";
import { BiSolidParking } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import { HiTv } from "react-icons/hi2";
import { GiMeal } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { PiTowelDuotone } from "react-icons/pi";
import { SiCcleaner } from "react-icons/si";
import amenity from '../assets/amenity.jpg';

function useScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll('.amenity-card, .section-tag, .section-h2');
    targets.forEach((el) => el.classList.add('scroll-hidden'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const amenities = [
  {
    icon: <GiMeal />,
    title: 'Fresh Breakfast Daily',
    desc: 'Prepared in-house and served with care — your morning ritual, elevated.',
  },
  {
    icon: <IoWifi />,
    title: 'High-Speed WiFi',
    desc: 'Seamless connectivity for work, streaming, and everything in between.',
  },
  {
    icon: <BiSolidParking />,
    title: 'Secure Parking',
    desc: 'Gated, monitored parking for every guest — your vehicle, protected.',
  },
  {
    icon: <MdSecurity />,
    title: '24/7 Security',
    desc: 'Round-the-clock monitoring so you can rest with complete peace of mind.',
  },
  {
    icon: <TbAirConditioning />,
    title: 'Premium Air Conditioning',
    desc: 'Climate-controlled rooms for year-round comfort, precisely set.',
  },
  {
    icon: <HiTv />,
    title: 'Smart TV + Streaming',
    desc: 'Entertainment on your terms — your favourite content, always ready.',
  },
  {
    icon: <SiCcleaner />,
    title: 'Housekeeping Service',
    desc: 'Daily or scheduled service, keeping your space immaculate throughout.',
  },
  {
    icon: <PiTowelDuotone />,
    title: 'In-Room Essentials',
    desc: 'Tea, coffee, water, and premium toiletries refreshed daily.',
  },
];

export default function Amenities() {
  const navigate = useNavigate();
  useScrollAnimations();

  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          background: 'var(--black)',
          padding: '160px 60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `url(${amenity}) center/cover no-repeat`,
            opacity: 0.2,
          }}
        />
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">
            <div className="line" />
            <span>AMENITIES</span>
          </div>
          <h1 className="section-h2 white" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Everything Included.<br />
            <span className="gold">Nothing Overlooked.</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              marginTop: '16px',
              maxWidth: '480px',
              lineHeight: '1.7',
              fontWeight: 300,
            }}
          >
            We don't upsell. We over-deliver. Every stay at Morgan Hill includes these as standard.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-base" style={{ background: 'var(--white)', paddingTop: '60px' }}>
        <div className="section-inner">
          <div className="amenities-grid">
            {amenities.map((a) => (
              <div className="amenity-card" key={a.title}>
                <div className="amenity-icon">{a.icon}</div>
                <div className="amenity-rule" />
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra callout */}
      <section
        className="section-base"
        style={{ background: 'var(--black)', paddingTop: '60px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}
      >
        <div className="why-bg-text" style={{ fontSize: '14rem' }}>ALL IN</div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">
            <div className="line" />
            <span>ALWAYS INCLUDED</span>
          </div>
          <h2 className="section-h2 white" style={{ maxWidth: '560px', marginBottom: '24px' }}>
            No Hidden Charges.<br />
            <span className="gold">Every Amenity. Every Stay.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '520px', fontWeight: 300, marginBottom: '32px' }}>
            When you book Morgan Hill, you're not just booking a room — you're booking an experience.
            All amenities listed above are included at no extra cost. What you see is what you get.
          </p>
          <button className="btn-gold" onClick={() => navigate('/contact')}>
            Book Your Stay
          </button>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div>
          <h2>Experience Every Amenity.</h2>
          <p>All of the above, included in every stay. Reserve directly for the best rates.</p>
        </div>
        <button className="btn-black" onClick={() => navigate('/contact')}>
          Reserve Now
        </button>
      </div>
    </>
  );
}
