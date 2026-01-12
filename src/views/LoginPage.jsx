import React, { useState } from 'react';
import { ShieldCheck, Lock, User, ArrowLeft } from 'lucide-react';

const LoginPage = ({ onLogin, onBack }) => {
    const [role, setRole] = useState('Security Officer');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple mock login
        if (username && password) {
            onLogin({ username, role });
        } else {
            alert('Please enter credentials');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
                <button
                    onClick={onBack}
                    style={{
                        backgroundColor: 'transparent',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        padding: 0
                    }}
                >
                    <ArrowLeft size={18} /> Back to Landing
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img src="/logo.png" alt="NGS Logo" style={{ width: '80px', height: 'auto', marginBottom: '1rem' }} />
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>System Login</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Security Personnel & Management</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Target Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border)', backgroundColor: 'white' }}
                        >
                            <option>Security Officer</option>
                            <option>Admin / Management</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '1rem', justifyContent: 'center', fontSize: '1rem' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
