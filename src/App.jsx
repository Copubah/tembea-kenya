import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import BookingModal from './components/BookingModal';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { destinations } from './data/destinations';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(destinations.map(d => d.category))];

  // Filter logic
  const filteredDestinations = activeCategory === "All"
    ? destinations
    : destinations.filter(d => d.category === activeCategory);

  // Simple Intersection Observer to fade in elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-fade').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 1s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory]); // Re-run when category changes

  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Featured Destinations Section */}
      <section id="destinations" className="section-padding">
        <div className="container">
          <div className="scroll-fade" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>Top Destinations</p>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Explore the Beauties</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          </div>

          {/* Category Filter */}
          <div className="scroll-fade" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  border: activeCategory === cat ? 'none' : '1px solid #e5e7eb',
                  background: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--color-text-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {filteredDestinations.map((dest, index) => (
              <div key={dest.id} className="scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                <DestinationCard
                  destination={dest}
                  onSelect={setSelectedDestination}
                />
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
              No destinations found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" style={{
        position: 'relative',
        padding: '8rem 0',
        backgroundAttachment: 'fixed',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/diani.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container scroll-fade">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Not just a destination.<br /> It's an Experience.
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.2rem', opacity: 0.9 }}>
            From the roar of the lion in the Mara to the whisper of the palm trees in Diani, Kenya offers a symphony of sensations that will stay with you forever.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Plan Your Trip</button>
        </div>
      </section>

      <About />
      <Testimonials />
      <Contact />

      <Footer />

      {/* Modals */}
      {selectedDestination && (
        <BookingModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}

export default App;
