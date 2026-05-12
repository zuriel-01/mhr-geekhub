import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import albatross from '../assets/ALBATROSS.jpg';
import eagle from '../assets/eagle.jpg';
import falcon from '../assets/falcon.jpg';
import robin from '../assets/ROBIN.jpg';
import chair from '../assets/chair.jpg';
function useScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll('.room-card, .section-tag, .section-h2, .spaces-header');
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

const rooms = [
   {
    badge: 'MOST POPULAR',
    tagline: 'Comfort Refined',
    name: 'The Robin Room',
    desc: 'The ideal base for the discerning traveller. Plush bedding, curated interiors, and everything you need — nothing you don\'t.',
    features: ['Complimentary Amenities', 'Modern Conveniences', 'Ambience and Privacy'],
    price: 'From ₦85,100',
    /* Replace with your local image path e.g. /images/classic-suite.jpg */
    img: robin,
    alt: 'Robin Room',
  },
  {
    badge: 'GUEST PICK',
    tagline: 'Comfort Refined',
    name: 'The Falcon Room',
    desc: "The apex of the Morgan Hill experience. Elevated views, generous space, and an atmosphere that simply can't be replicated.",
    features: ['Ultimate Comfort', 'Dining Privileges', 'Personalized Service', 'Smart TV & Streaming', '24/7 High-Speed Wi-Fi', 'Airport Pick-Up'],
    price: 'From ₦125,200',
    /* Replace with your local image path e.g. /images/penthouse.jpg */
    img: falcon,
    alt: 'Falcon Room',
  },
    {
    badge: 'BUSINESS FAVOURITE',
    tagline: 'Work. Rest. Excel.',
    name: 'The Eagle Room',
    desc: 'For the professional who refuses to compromise. A dedicated workspace meets premium comfort built for productivity and rest.',
    features: ['Ultimate Comfort', 'Modern Lounge Area', 'Complimentary Mini Bar & Refreshments', 'Welcome Basket & Fruit Plate', 'Dining Privileges', 'Personalized Service', 'Smart TV & Streaming', '24/7 High-Speed Wi-Fi', 'Airport Pick-Up'],
    price: 'From ₦150,750',
    /* Replace with your local image path e.g. /images/executive-suite.jpg */
    img: eagle,
    alt: 'Eagle Room',
  },
  {
    badge: 'LUXURY CHOICE',
    tagline: 'The Apex of Luxury',
    name: 'The Albatross Room',
    desc: 'The ideal base for the discerning traveller. Plush bedding, curated interiors, and everything you need — nothing you don\'t.',
    features: ['Ultimate Comfort', 'Modern Lounge Area', 'Complimentary Mini Bar & Refreshments', 'Welcome Basket & Fruit Plate', 'Dining Privileges', 'Personalized Service', 'Smart TV & Streaming', '24/7 High-Speed Wi-Fi', 'Airport Pick-Up'],
    price: 'From ₦175,500',
    /* Replace with your local image path e.g. /images/classic-suite.jpg */
    img: albatross,
    alt: 'Albatross Room',
  },
  
];

export default function OurSpaces() {
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
            background: `url(${chair}) center/cover no-repeat`,
            opacity: 0.2,
          }}
        />
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">
            <div className="line" />
            <span>OUR SPACES</span>
          </div>
          <h1 className="section-h2 white" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Curated for Those Who<br />
            <span className="gold">Notice the Details.</span>
          </h1>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-base" style={{ background: 'var(--off-white)', paddingTop: '60px' }}>
        <div className="section-inner">
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div className="room-card" key={room.name}>
                <div className="room-img-wrap">
                  <img src={room.img} alt={room.alt} className="room-img" />
                  <div className="room-badge">{room.badge}</div>
                </div>
                <div className="room-body">
                  <div className="room-tagline">{room.tagline}</div>
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-desc">{room.desc}</p>
                  <div className="room-features">
                    {room.features.map((f) => (
                      <span className="room-feature" key={f}>{f}</span>
                    ))}
                  </div>
                  <div className="room-footer">
                    <div className="room-price">
                      <div className="per">PER NIGHT</div>
                      <div className="amount">{room.price}</div>
                    </div>
                    <button className="btn-dark" onClick={() => navigate('/contact')}>
                      Book Suite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div>
          <h2>Ready to Reserve Your Suite?</h2>
          <p>Book directly for the best rates. No hidden fees. No middlemen.</p>
        </div>
        <button className="btn-black" onClick={() => navigate('/contact')}>
          Reserve Now
        </button>
      </div>
    </>
  );
}
