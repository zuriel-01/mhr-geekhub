import { useState, useEffect } from 'react';
import image from '../assets/img.jpg';
function useScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll('.contact-info-item, .section-tag, .section-h2, .booking-form');
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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    room: '',
    guests: '1 Guest',
    requests: '',
  });

  useScrollAnimations();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.name) {
      alert('Please enter your full name to continue.');
      return;
    }
    alert(
      `Thank you for your reservation request, ${formData.name}! ` +
      'We will confirm your booking within 1 hour. ' +
      'You can also reach us on WhatsApp: 08160892247'
    );
  };

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
            background: `url(${image}) center/cover no-repeat`,
            opacity: 0.15,
          }}
        />
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">
            <div className="line" />
            <span>CONTACT &amp; BOOKINGS</span>
          </div>
          <h1 className="section-h2 white" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Get in 
            <span className="gold"> Touch</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              marginTop: '16px',
              maxWidth: '440px',
              lineHeight: '1.7',
              fontWeight: 300,
            }}
          >
            Whether you have a question or you're ready to reserve — we're here. We respond within the hour.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-base" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="contact-grid">

            {/* Left: Info */}
            <div className="contact-left">
              <div className="section-tag">
                <div className="line" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="section-h2" style={{ marginBottom: '20px' }}>
                We'd Love to<br />
                <span className="gold">Host You.</span>
              </h2>
              <p>
                Whether you have a question or you're ready to reserve — we're here.
                We respond within the hour.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="contact-info-text">
                  <div>08160892247</div>
                  <div className="sub">CALL OR WHATSAPP</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="contact-info-text">
                  <div>hello@morganhillresidence.com</div>
                  <div className="sub">EMAIL US</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa-regular fa-compass" />
                </div>
                <div className="contact-info-text">
                  <div>Morgan Hill Residence, Ubiaja Cres, Garki,</div>
                  <div className="sub">ABUJA, NIGERIA</div>
                </div>
              </div>

              <div className="map-placeholder">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.499592757853!2d7.485769888854992!3d9.018107000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0c7a47f5dc17%3A0x8112fc368d509385!2sMorgan%20Hill%20Residence!5e0!3m2!1sen!2sng!4v1778505689366!5m2!1sen!2sng" 
    width="100%" 
    height="300" 
    style={{ border: 0, borderRadius: '12px', padding: '0', marginTop: '100px' }}
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Morgan Hill Residence Location"
  />
</div>
            </div>

            {/* Right: Form */}
            <div className="booking-form">
              <h3 className="form-title">Reserve Your Stay</h3>
              <p className="form-sub">
                Fill the form below and we'll confirm your booking within 1 hour.
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="08XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn">Check-in Date</label>
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut">Check-out Date</label>
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="room">Room Preference</label>
                  <select id="room" name="room" value={formData.room} onChange={handleChange}>
                    <option value="">Select a Room </option>
                    <option>The Robin Room</option>
                    <option>The Falcon Room</option>
                    <option>The Albatross Room</option>
                    <option>The Eagle Room</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="requests">Special Requests (Optional)</label>
                <textarea
                  id="requests"
                  name="requests"
                  placeholder="Any special requests or questions..."
                  value={formData.requests}
                  onChange={handleChange}
                />
              </div>

              <button className="form-submit" onClick={handleSubmit}>
                Confirm Reservation →
              </button>
              <p className="form-note">
                You will not be charged until your booking is confirmed. Pay online or on arrival.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

