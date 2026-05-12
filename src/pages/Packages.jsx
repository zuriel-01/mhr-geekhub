// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function useScrollAnimations() {
//   useEffect(() => {
//     const targets = document.querySelectorAll('.pkg-card, .section-tag, .section-h2, .payment-opts');
//     targets.forEach((el) => el.classList.add('scroll-hidden'));

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
//     );

//     document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);
// }

// const packages = [
//   {
//     variant: 'default',
//     duration: '2 Nights',
//     name: 'Weekender',
//     tagline: 'Perfect for the short escape.',
//     features: [
//       'Breakfast both mornings',
//       'Late checkout (12 noon)',
//       'Welcome drink on arrival',
//       'Complimentary toiletries',
//     ],
//     label: null,
//     cta: 'Book Weekender',
//   },
//   {
//     variant: 'featured',
//     duration: '3 – 5 Nights',
//     name: 'Business Package',
//     tagline: 'Built for the professional.',
//     features: [
//       'Daily breakfast included',
//       'Complimentary airport pickup',
//       'High-speed business WiFi',
//       'Dedicated workspace',
//     ],
//     label: 'MOST CHOSEN',
//     cta: 'Book Business',
//   },
//   {
//     variant: 'default',
//     duration: '7+ Nights',
//     name: 'Extended Retreat',
//     tagline: 'Long stay. Full luxury.',
//     features: [
//       'Full concierge service',
//       'Flexible meal plan options',
//       'Discounted nightly rate',
//       'Priority room selection',
//     ],
//     label: null,
//     cta: 'Book Retreat',
//   },
// ];

// export default function Packages() {
//   const navigate = useNavigate();
//   useScrollAnimations();

//   return (
//     <>
//       {/* Page Hero */}
//       <section
//         style={{
//           background: 'var(--black)',
//           padding: '160px 60px 80px',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <div className="pkg-bg-text" style={{ fontSize: '14rem', bottom: 'auto', top: 0 }}>PKG</div>
//         <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
//           <div className="section-tag">
//             <div className="line" />
//             <span>PACKAGES</span>
//           </div>
//           <h1 className="section-h2 white" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
//             Choose Your <span className="gold">Morgan Hill Experience</span>
//           </h1>
//           <p
//             style={{
//               color: 'rgba(255,255,255,0.6)',
//               fontSize: '0.95rem',
//               fontFamily: 'Inter, sans-serif',
//               marginTop: '16px',
//               maxWidth: '480px',
//               lineHeight: '1.7',
//               fontWeight: 300,
//             }}
//           >
//             From a quick weekend escape to an extended luxury retreat — we have a package curated for every stay.
//           </p>
//         </div>
//       </section>

//       {/* Packages Grid */}
//       <section
//         className="section-base"
//         style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden', paddingTop: '40px' }}
//       >
//         <div className="pkg-bg-text">STAY</div>
//         <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
//           <div className="pkg-grid">
//             {packages.map((pkg) => (
//               <div className={`pkg-card ${pkg.variant}`} key={pkg.name}>
//                 {pkg.label && <div className="pkg-label">{pkg.label}</div>}
//                 <div className="pkg-duration">{pkg.duration}</div>
//                 <h3 className="pkg-name">{pkg.name}</h3>
//                 <p className="pkg-tagline">{pkg.tagline}</p>
//                 <hr className="pkg-divider" />
//                 {pkg.features.map((f) => (
//                   <div className="pkg-feature" key={f}>
//                     <span className="pkg-check">✓</span>
//                     <span>{f}</span>
//                   </div>
//                 ))}
//                 <div className="pkg-cta">
//                   <button onClick={() => navigate('/contact')}>{pkg.cta}</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="payment-opts">
//             <span className="label">PAYMENT OPTIONS:</span>
//             <div className="payment-opt">Pay Now (Paystack)</div>
//             <div className="payment-opt">Pay on Arrival</div>
//           </div>
//         </div>
//       </section>

//       {/* Why book direct */}
//       <section
//         className="section-base"
//         style={{ background: 'var(--off-white)', paddingTop: '60px', paddingBottom: '60px' }}
//       >
//         <div className="section-inner">
//           <div className="section-tag">
//             <div className="line" />
//             <span>BOOK DIRECTLY</span>
//           </div>
//           <h2 className="section-h2" style={{ marginBottom: '24px' }}>
//             No Middlemen. <span className="gold">No Hidden Fees.</span>
//           </h2>
//           <p style={{ color: '#444', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '520px', fontWeight: 300, marginBottom: '32px' }}>
//             When you book directly with Morgan Hill Residence, you get our best rate guaranteed.
//             No platform fees, no booking commissions — just straightforward luxury at the fairest price.
//           </p>
//           <button className="btn-gold" onClick={() => navigate('/contact')}>
//             Book Now &amp; Save
//           </button>
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="cta-banner">
//         <div>
//           <h2>Ready to Choose Your Package?</h2>
//           <p>Our team will confirm your booking within 1 hour. We respond fast.</p>
//         </div>
//         <button className="btn-black" onClick={() => navigate('/contact')}>
//           Reserve Your Stay
//         </button>
//       </div>
//     </>
//   );
// }
