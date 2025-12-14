import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#111', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Tembea<span style={{ color: 'var(--color-primary)' }}>.</span></h3>
                        <p style={{ opacity: 0.7, marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Showcasing the untouched beauty of Kenya. From the white sandy beaches to the vast savannas, experience Africa like never before.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['IG', 'FB', 'TW'].map(social => (
                                <div key={social} style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s'
                                }}>
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', opacity: 0.8, lineHeight: 2.2 }}>
                            <li><a href="#">Destinations</a></li>
                            <li><a href="#">Tours & Safaris</a></li>
                            <li><a href="#">Travel Guide</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Contact</h4>
                        <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Nairobi, Kenya</p>
                        <a href="mailto:charlesopuba@gmail.com" style={{ opacity: 0.7, textDecoration: 'none', color: 'white' }}>charlesopuba@gmail.com</a>
                        <p style={{ opacity: 0.7, marginTop: '0.5rem' }}>+254 700 000 000</p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Newsletter</h4>
                        <p style={{ opacity: 0.7, marginBottom: '1rem' }}>Subscribe for travel tips and exclusive offers.</p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="email" placeholder="Email address" style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                background: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                flex: 1
                            }} />
                            <button style={{
                                padding: '0 1.5rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                background: 'var(--color-primary)',
                                color: 'white',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.5,
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} Tembea Kenya. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
