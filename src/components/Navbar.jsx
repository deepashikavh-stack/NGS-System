import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const Navbar = ({ activeTab }) => {
    const getTitle = () => {
        switch (activeTab) {
            case 'dashboard': return 'Operational Dashboard';
            case 'visitors': return 'Visitor Management';
            case 'staff': return 'Staff & Employee Entry';
            case 'vehicles': return 'Vehicle Entry Logs';
            case 'reports': return 'Reports & Analytics';
            default: return 'NGS System';
        }
    };

    return (
        <header className="navbar" style={{
            height: '70px',
            backgroundColor: 'rgba(248, 250, 252, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 90
        }}>
            <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{getTitle()}</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search records..."
                        style={{
                            padding: '0.5rem 1rem 0.5rem 2.5rem',
                            borderRadius: '10px',
                            border: '1px solid var(--border)',
                            width: '240px',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>

                <button style={{ backgroundColor: 'white', border: '1px solid var(--border)', padding: '0.5rem', borderRadius: '10px', position: 'relative' }}>
                    <Bell size={20} color="var(--text-muted)" />
                    <span style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--danger)',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }}></span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Security Officer</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Main Gate A</p>
                    </div>
                    <UserCircle size={32} color="var(--primary)" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
