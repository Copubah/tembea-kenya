import React, { useState } from 'react';

const BookingModal = ({ destination, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        guests: 1
    });

    if (!destination) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2);
        // Simulate API call
        setTimeout(() => {
            setStep(3);
        }, 1500);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            background: 'rgba(0,0,0,0.6)',
            animation: 'fadeIn 0.3s ease'
        }} onClick={onClose}>
            <div style={{
                width: '90%',
                maxWidth: '900px',
                maxHeight: '90vh',
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'row', // Desktop default
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 10,
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>✕</button>

                {/* Image Section - Left Side */}
                <div style={{ flex: '1', position: 'relative', display: 'none', minHeight: '300px' }} className="d-md-block">
                    <img
                        src={destination.image}
                        alt={destination.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        padding: '2rem',
                        color: 'white'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{destination.title}</h2>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            📍 {destination.location}
                        </p>
                    </div>
                </div>

                {/* Content Section - Right Side */}
                <div style={{ flex: '1', padding: '3rem', overflowY: 'auto', position: 'relative' }}>

                    {/* Mobile Header (Image backup) */}
                    <div className="d-md-none" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{destination.title}</h2>
                        <p style={{ color: '#666' }}>{destination.location}</p>
                    </div>

                    {step === 1 && (
                        <div className="animate-fade-up">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div>
                                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', fontWeight: 600 }}>Price per person</span>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>{destination.price}</div>
                                </div>
                                <div style={{ background: '#f3f4f6', padding: '0.5rem 1rem', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 500 }}>
                                    {destination.duration}
                                </div>
                            </div>

                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Highlights</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
                                {destination.highlights.map(h => (
                                    <span key={h} style={{
                                        background: '#fff0eb',
                                        color: 'var(--color-primary)',
                                        padding: '0.4rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        ✓ {h}
                                    </span>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Book this Trip</h4>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #e5e7eb',
                                            outline: 'none', transition: 'border 0.3s'
                                        }}
                                    />
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input
                                            required
                                            type="date"
                                            style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #e5e7eb' }}
                                        />
                                        <input
                                            type="number"
                                            min="1"
                                            placeholder="Guests"
                                            value={formData.guests}
                                            onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                            style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #e5e7eb' }}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                        Confirm Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {step === 2 && (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div className="spinner"></div>
                            <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>Processing your request...</p>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fade-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#059669', fontSize: '2.5rem' }}>
                                ✓
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You're all set!</h3>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>
                                We've received your booking request for <strong>{destination.title}</strong>. An agent will contact you shortly to finalize the details.
                            </p>
                            <button onClick={onClose} className="btn" style={{ background: '#f3f4f6', color: '#374151' }}>
                                Close & Explore More
                            </button>
                        </div>
                    )}

                </div>
            </div>
            <style>{`
        .d-md-block { display: none; }
        .d-md-none { display: block; }
        @media (min-width: 768px) {
            .d-md-block { display: block !important; }
            .d-md-none { display: none !important; }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default BookingModal;
