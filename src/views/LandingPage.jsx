import React from 'react';
import { Users, Car, ArrowRight, ShieldCheck } from 'lucide-react';

const LandingPage = ({ onNavigate, onLogin }) => {
    return (
        <div className="landing-container" style={{
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem'
        }}>
            <header style={{
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4rem',
                padding: '1rem 0'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src="/logo.png" alt="NGS Logo" style={{ width: '60px', height: 'auto' }} />
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000' }}>Nextgen Shield (Private) Limited</h1>
                </div>
                <button
                    onClick={onLogin}
                    style={{
                        backgroundColor: 'white',
                        border: '1px solid var(--border)',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 600,
                        borderRadius: '10px'
                    }}
                >
                    System Login
                </button>
            </header>

            <main style={{
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}>
                <div
                    onClick={() => onNavigate('visitors')}
                    className="card animate-fade-in"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        padding: '2rem',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        borderColor: '#1e3a8a33'
                    }}
                >
                    <div style={{
                        backgroundColor: '#1e3a8a',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        color: 'white'
                    }}>
                        <Users size={40} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.25rem' }}>Visitor Log</h2>
                        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>Track visitors and guests</p>
                    </div>
                    <div style={{
                        backgroundColor: '#f1f5f9',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        color: '#1e3a8a'
                    }}>
                        <ArrowRight size={24} />
                    </div>
                </div>

                <div
                    onClick={() => onNavigate('vehicles')}
                    className="card animate-fade-in"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        padding: '2rem',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        borderColor: '#ea580c33'
                    }}
                >
                    <div style={{
                        backgroundColor: '#ea580c',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        color: 'white'
                    }}>
                        <Car size={40} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ea580c', marginBottom: '0.25rem' }}>Vehicle Log</h2>
                        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>Record vehicle entries</p>
                    </div>
                    <div style={{
                        backgroundColor: '#fff7ed',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        color: '#ea580c'
                    }}>
                        <ArrowRight size={24} />
                    </div>
                </div>
            </main>

            <footer style={{ marginTop: 'auto', padding: '2rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} Nextgen Shield (Private) Limited. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
