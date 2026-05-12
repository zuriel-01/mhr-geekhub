import { useEffect, useRef } from 'react';

const reviews = [
  {
    text: 'Enjoyed my stay with Morgan Hill Residence. Luxurious, great value for money, wonderful customer service. Tasty meals. Definitely recommend.',
    date: 'MAY 2024',
  },
  {
    text: "My stay was absolutely fantastic. From the moment I arrived, the staff's friendliness and professionalism stood out. They went above and beyond to ensure comfort. The place was incredibly neat and well-maintained, and the food was delicious.",
    date: 'JUNE 2024',
  },
  {
    text: 'They provided a really exceptional and first-class service. Thanks Glory & Ibrahim. Your customer service is top notch. I will highly recommend Morgan Hill Residence particularly for international visitors.',
    date: 'MAY 2024',
  },
  {
    text: "Morgan Hill Residence is, without a doubt, one of the best places I have ever stayed. If you are looking for a place that combines comfort, cleanliness, warmth, and world-class hospitality, this is it. I would recommend it a thousand times over.",
    date: 'AUGUST 2024',
  },
  {
    text: "My stay was outstanding. The reception team made me feel completely at home. The residence is spotless, and everything works perfectly. The hospitality was unlike anything I've experienced. Their attention to detail made me feel genuinely cared for.",
    date: 'AUGUST 2025',
  },
  {
    text: 'The standard of service is so high, I am worried if they can sustain it for the amount they charge. The facilities, food, staff courtesy, cleanliness, and functionality are all top notch. I recommend this place anytime. I would stay there again and again.',
    date: 'AUGUST 2025',
  },
  {
    text: 'Staying here was a lovely experience. From arrival, everything felt calm, clean, and welcoming. Netflix and welcome treats were a nice surprise. Breakfast was fresh and tasty, and the staff were warm and helpful. The whole place felt safe.',
    date: 'AUGUST 2025',
  },
  {
    text: 'I felt seen and cared for. Love leads here. High standards of care. Quality sheets and good lighting. No one gets hungry here.',
    date: 'OCTOBER 2025',
  },
  {
    text: 'Lovely place to be. Great service! Very attentive staff.',
    date: 'JULY 2025',
  },
];

function ReviewCard({ text, date }) {
  return (
    <div className="review-card">
      <div className="review-quote-circle">"</div>
      <h2 className="review-header-title">GUEST REVIEW</h2>
      <div className="review-divider-heart">♥</div>
      <div className="review-text">
        <span className="review-quote-mark" style={{ marginRight: '3px' }}>"</span>
        <span style={{ width: '100%' }}>{text}</span>
        <span className="review-quote-mark" style={{ marginLeft: '3px' }}>"</span>
      </div>
      <div className="review-footer">
        <div className="review-footer-line" />
        <div className="review-divider-heart-bottom">♥</div>
        <div className="review-attribution">– OUR VALUED GUEST</div>
        <div className="review-date">{date}</div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  // Duplicate for seamless loop
  const allReviews = [...reviews, ...reviews];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {allReviews.map((review, i) => (
          <ReviewCard key={i} text={review.text} date={review.date} />
        ))}
      </div>
    </div>
  );
}