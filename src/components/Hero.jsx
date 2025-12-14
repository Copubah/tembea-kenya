import React from 'react';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
                    zIndex: 1
                }}></div>
                <img
                    src="/assets/hero.png"
                    alt="Magical Kenya Safari"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'scaleSlow 20s linear infinite alternate'
                    }}
                />
                <style>{`
          @keyframes scaleSlow {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
        `}</style>
            </div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                <h4 className="animate-fade-up" style={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                    fontWeight: 600
                }}>
                    Welcome to magical Kenya
                </h4>
                <h1 className="animate-fade-up delay-100" style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    marginBottom: '1.5rem',
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                    Unforgettable <br /> <i style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>Adventures</i>
                </h1>
                <p className="animate-fade-up delay-200" style={{
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    fontSize: '1.2rem',
                    opacity: 0.9
                }}>
                    Discover the breathtaking landscapes, diverse wildlife, and pristine beaches of the Pride of Africa.
                </p>
                <div className="animate-fade-up delay-300">
                    <button className="btn btn-primary">Start Exploring</button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite'
            }}>
                <div style={{
                    width: '30px',
                    height: '50px',
                    border: '2px solid rgba(255,255,255,0.5)',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '10px'
                }}>
                    <div style={{
                        width: '4px',
                        height: '8px',
                        background: 'white',
                        borderRadius: '2px'
                    }}></div>
                </div>
            </div>
            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-10px) translateX(-50%);}
          60% {transform: translateY(-5px) translateX(-50%);}
        }
      `}</style>
        </section>
    );
};

export default Hero;
