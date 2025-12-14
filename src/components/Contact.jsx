import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');

        // ----------------------------------------------------------------
        // TODO: To make this sends real emails:
        // 1. npm install @emailjs/browser
        // 2. Create account at https://www.emailjs.com/
        // 3. Uncomment the code below and add your keys
        // ----------------------------------------------------------------

        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              setFormState('success');
          }, (error) => {
              console.log(error.text);
              alert("Failed to send message. Please try again.");
              setFormState('idle');
          });
        */

        // FOR NOW: Simulate sending to "charlesopuba@gmail.com"
        console.log("--- EMAIL SUBMISSION ---");
        console.log("To Admin: charlesopuba@gmail.com");
        console.log("From User:", formData.email);
        console.log("Name:", formData.name);
        console.log("Message:", formData.message);
        console.log("------------------------");

        // Simulate network delay
        setTimeout(() => {
            setFormState('success');
            // Reset after showing thank you
            setTimeout(() => {
                setFormState('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding" style={{
            background: 'var(--color-secondary)',
            color: 'white',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} className="scroll-fade">
                    <h4 style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1rem' }}>Get in Touch</h4>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ready for your Adventure?</h2>
                    <p style={{ opacity: 0.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>Have questions about our packages or want to build a custom itinerary? Send us a message.</p>

                    <a href="mailto:charlesopuba@gmail.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        fontSize: '1.1rem'
                    }}>
                        Or email directly: charlesopuba@gmail.com
                    </a>
                </div>

                <div className="scroll-fade" style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    padding: '4rem',
                    borderRadius: '2rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: '900px',
                    margin: '0 auto',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    {formState === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }} className="animate-fade-up">
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '1.5rem',
                                animation: 'bounce 1s infinite'
                            }}>💌</div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                                Asante sana! We've received your message and will get back to you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem', opacity: formState === 'submitting' ? 0.5 : 1, transition: 'opacity 0.3s' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem',
                                            borderRadius: '10px',
                                            border: 'none',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'background 0.3s'
                                        }}
                                        onFocus={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
                                        onBlur={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem',
                                            borderRadius: '10px',
                                            border: 'none',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                        onFocus={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
                                        onBlur={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Tell us about your dream trip..."
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '10px',
                                        border: 'none',
                                        background: 'rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '1rem',
                                        resize: 'vertical',
                                        outline: 'none'
                                    }}
                                    onFocus={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
                                    onBlur={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                style={{
                                    padding: '1.2rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    cursor: formState === 'submitting' ? 'wait' : 'pointer',
                                    marginTop: '1rem',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
