import React from 'react';

const DestinationCard = ({ destination, onSelect }) => {
    return (
        <div className="destination-card" style={{
            background: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <div style={{ overflow: 'hidden', height: '250px', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span>★</span> {destination.rating}
                </div>
                <img
                    src={destination.image}
                    alt={destination.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    className="card-image"
                />
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                    color: 'var(--color-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem'
                }}>
                    {destination.location}
                </p>
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                    color: 'var(--color-text-dark)'
                }}>
                    {destination.title}
                </h3>
                <p style={{
                    color: '#666',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    flex: 1
                }}>
                    {destination.description}
                </p>

                <button style={{
                    background: 'transparent',
                    color: 'var(--color-secondary)',
                    border: '2px solid var(--color-secondary)',
                    padding: '0.75rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%'
                }}
                    onClick={() => onSelect(destination)}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--color-secondary)';
                        e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--color-secondary)';
                    }}
                >
                    Explore {destination.category}
                </button>
            </div>

            <style>{`
        .destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.2);
        }
        .destination-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
        </div>
    );
};

export default DestinationCard;
