import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: '#f9fafb', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div className="scroll-fade">
                        <h4 style={{
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            letterSpacing: '0.1em'
                        }}>About Us</h4>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            We Create Journeys, <br /> Not Just Trips.
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Tembea was born from a passion for the untamed beauty of Kenya. We believe that travel should be transformative. It’s not just about seeing a lion; it’s about feeling the earth tremble under a herd of elephants and smelling the rain on the dry savannah.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Our team of local experts curates experiences that go beyond the guidebooks, connecting you with the heart and soul of this magical land.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>10k+</h3>
                                <p style={{ color: '#666' }}>Happy Travelers</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>15+</h3>
                                <p style={{ color: '#666' }}>Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="scroll-fade" style={{ position: 'relative', height: '500px' }}>
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            width: '80%',
                            height: '80%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            zIndex: 2
                        }}>
                            <img src="/assets/mt_kenya.png" alt="Mt Kenya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '60%',
                            height: '60%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            zIndex: 3,
                            border: '5px solid white'
                        }}>
                            <img src="/assets/hero.png" alt="Safari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Decorative Circle */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'var(--color-accent)',
                            opacity: 0.1,
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
