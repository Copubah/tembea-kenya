import React from 'react';

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "United Kingdom",
        text: "The trip to Maasai Mara was absolutely life-changing. We saw the Big Five on our very first day! Tembea took care of every detail.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        name: "David & Maria",
        location: "Spain",
        text: "Diani Beach is paradise on earth. The resort recommendation was perfect and the private dhow cruise at sunset was magical.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "Michael Chen",
        location: "Singapore",
        text: "Climbing Mt. Kenya was tough but the guides were incredibly professional and supportive. I couldn't have done it without them.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=11"
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div className="scroll-fade" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h4 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>Testimonials</h4>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>What our Travelers Say</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {reviews.map((review, index) => (
                        <div key={review.id} className="scroll-fade" style={{
                            padding: '2.5rem',
                            background: '#f9fafb',
                            borderRadius: '1.5rem',
                            transition: 'transform 0.3s ease',
                            transitionDelay: `${index * 100}ms`,
                            position: 'relative'
                        }}>
                            <div style={{ fontSize: '4rem', color: 'var(--color-primary)', opacity: 0.2, position: 'absolute', top: '1rem', left: '2rem', fontFamily: 'serif' }}>"</div>

                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', zIndex: 2, position: 'relative' }}>
                                {review.text}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 style={{ fontSize: '1rem', fontWeight: 700 }}>{review.name}</h5>
                                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{review.location}</span>
                                </div>
                                <div style={{ marginLeft: 'auto', color: '#fbbf24' }}>
                                    {'★'.repeat(review.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
