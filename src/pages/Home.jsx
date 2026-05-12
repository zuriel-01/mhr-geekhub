import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewsCarousel from '../components/ReviewsCarousel';
import heroimage from '../assets/image1.png'; 

// ── Scroll animation hook ────────────────────────────────────────────────────
function useScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-tag, .section-h2, .about-grid, .why-card, .why-bottom, ' +
      '.why-header, .contact-info-item, .about-stat'
    );
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        /* Replace with your local image: background: "url('/images/hero.jpg') center/cover no-repeat" */
        background: `url(${heroimage}) center/cover no-repeat`,
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-bottom-line" />

      <div className="hero-content">
        <div className="hero-tag">
          <div className="line" />
          <span>ABUJA'S FINEST SHORT STAY</span>
        </div>

        <h1 className="hero-h1">
          Where Abuja<br />
          <span className="gold">Comes to Rest.</span>
        </h1>

        <p className="hero-sub">
          Premium short-stay apartments that blend comfort, privacy, and intentional luxury
          right in the heart of Abuja.
        </p>
        <p className="hero-tagline">STAY. RELAX. BELONG.</p>

        <div className="hero-ctas">
          <button className="btn-gold" onClick={() => navigate('/contact')}>
            Reserve Your Stay
          </button>
          <button className="btn-outline" onClick={() => navigate('/spaces')}>
            Explore Spaces
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="val">100%</div>
            <div className="lbl">GUEST SATISFACTION</div>
          </div>
          <div className="hero-stat">
            <div className="val">24/7</div>
            <div className="lbl">CONCIERGE CARE</div>
          </div>
          <div className="hero-stat">
            <div className="val">Prime</div>
            <div className="lbl">ABUJA LOCATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Trust Bar ─────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: '✓', text: 'INSTANT BOOKING CONFIRMATION' },
    { icon: '🏆', text: 'TOP-RATED IN ABUJA' },
    { icon: '🔒', text: 'SECURE PAYMENT OPTIONS' },
    { icon: '24/7', text: 'ROUND-THE-CLOCK SUPPORT' },
    { icon: '🍳', text: 'DAILY BREAKFAST INCLUDED' },
  ];
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map((item, i) => (
          <div className="trust-item" key={i}>
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="section-base" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-bg" />
            {/* Replace src with your local image e.g. /images/interior.jpg */}
            <img
              src={heroimage}
              alt="Morgan Hill Residence Interior"
              className="about-img"
            />
            <div className="about-badge">
              <span className="star">★</span>
              <span className="label">TOP RATED<br />ABUJA</span>
            </div>
          </div>

          <div className="about-text">
            <div className="section-tag">
              <div className="line" />
              <span>THE MORGAN HILL EXPERIENCE</span>
            </div>
            <h2 className="section-h2" style={{ marginBottom: '24px' }}>
              More Than a Stay.<br />
              <span className="gold">A Feeling You'll<br />Return To.</span>
            </h2>
            <p>
              We built Morgan Hill Residence for those who demand more than a hotel room.
              Whether you're here on business or unwinding between chapters, our serviced
              apartments offer a home that actually feels like one.
            </p>
            <p>
              Nestled in Abuja's most desirable district, every corner of Morgan Hill has been
              curated with one purpose — to make you feel at home, even when you're far from it.
            </p>
            <hr className="about-divider" />
            <div className="about-stats">
              <div className="about-stat">
                <div className="val">500+</div>
                <div className="lbl">HAPPY GUESTS</div>
              </div>
              <div className="about-stat">
                <div className="val">4.9★</div>
                <div className="lbl">AVERAGE RATING</div>
              </div>
              <div className="about-stat">
                <div className="val">4</div>
                <div className="lbl">ROOM CATEGORIES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why MHR ───────────────────────────────────────────────────────────────────
function WhyMHR() {
  const navigate = useNavigate();
  const pillars = [
    {
      num: '01',
      title: 'Curated Comfort',
      desc: 'Every room is designed with intention, not just function. From the thread count to the lighting, nothing is accidental.',
    },
    {
      num: '02',
      title: 'Home-Cooked Excellence',
      desc: 'Wake up to freshly prepared breakfasts, served with care. Your mornings at Morgan Hill are not rushed, they are experienced.',
    },
    {
      num: '03',
      title: 'Absolute Privacy',
      desc: "No corridors of strangers. Just your space, your pace. We protect your peace as fiercely as we protect your comfort.",
    },
    {
      num: '04',
      title: 'Prime Location',
      desc: "Positioned in Abuja's most accessible and desirable district. At the centre of the city, without the chaos.",
    },
  ];

  return (
    <section
      id="why"
      className="section-base"
      style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="why-bg-text">MHR</div>

        <div className="why-header">
          <div className="section-tag">
            <div className="line" />
            <span>WHY MORGAN HILL</span>
          </div>
          <h2 className="section-h2 white">
            The Four Pillars of the <span className="gold">Morgan Hill Experience</span>
          </h2>
        </div>

        <div className="why-grid">
          {pillars.map((p) => (
            <div className="why-card" key={p.num}>
              <div className="why-num">{p.num}</div>
              <div className="why-rule" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-bottom">
          <p>"Abuja's Best Kept Secret in Hospitality". Book directly and save. No middlemen. No hidden fees.</p>
          <button className="btn-gold-outline" onClick={() => navigate('/contact')}>
            Book Directly &amp; Save
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section
      id="reviews"
      className="section-base"
      style={{ background: '#f5f5f0', paddingBottom: '60px' }}
    >
      <div className="section-inner">
        <div className="section-tag">
          <div className="line" />
          <span>GUEST REVIEWS</span>
        </div>
        <h2 className="section-h2" style={{ marginBottom: '40px' }}>
          Voices of Our <span className="gold">Valued Guests</span>
        </h2>
        <ReviewsCarousel />
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const navigate = useNavigate();
  return (
    <div className="cta-banner">
      <div>
        <h2>Ready to Experience Morgan Hill?</h2>
        <p>Book directly and enjoy our best rates. No booking fees. No middlemen.</p>
      </div>
      <button className="btn-black" onClick={() => navigate('/contact')}>
        Reserve Your Stay Today
      </button>
    </div>
  );
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollAnimations();
  return (
    <>
      <Hero />
      {/* <TrustBar /> */}
      <About />
      <WhyMHR />
      <Reviews />
      <CTABanner />
    </>
  );
}
