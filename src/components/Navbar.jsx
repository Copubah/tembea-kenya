import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: 'all 0.4s ease',
            padding: scrolled ? '1rem 0' : '2rem 0',
            background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
            backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    color: scrolled ? 'var(--color-text-dark)' : 'white'
                }}>
                    Tembea<span style={{ color: 'var(--color-primary)' }}>.</span>
                </a>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{
                            fontWeight: 500,
                            color: scrolled ? 'var(--color-text-dark)' : 'white',
                            opacity: 0.9
                        }}>
                            {item}
                        </a>
                    ))}
                </div>

                <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                    Book Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
