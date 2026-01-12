import React, { useState } from 'react';
import LogTable from '../components/LogTable';
import { UserPlus, Filter, Search, Download } from 'lucide-react';

const VisitorsView = () => {
    const [showForm, setShowForm] = useState(false);

    const columns = [
        { header: 'Visitor Name', key: 'name' },
        { header: 'NIC/Passport', key: 'nic_passport' },
        { header: 'Type', key: 'type' },
        { header: 'Purpose', key: 'purpose' },
        { header: 'Status', key: 'status' },
        { header: 'Entry Time', key: 'entry_time' },
    ];

    const mockVisitors = [
        { name: 'John Doe', nic_passport: '881234567V', type: 'Walk-in', purpose: 'Parent Meeting', status: 'Approved', entry_time: '2026-01-12 09:15 AM' },
        { name: 'Alice Smith', nic_passport: 'N12345678', type: 'Pre-registered', purpose: 'Vendor Delivery', status: 'Auto-confirmed', entry_time: '2026-01-12 10:30 AM' },
    ];

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Visitor Management</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Manage and track all school visitors in real-time.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ backgroundColor: 'white', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
                        <Download size={18} /> Export
                    </button>
                    <button className="btn-primary" onClick={() => setShowForm(true)}>
                        <UserPlus size={18} /> Log New Visitor
                    </button>
                </div>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search by name, NIC, or purpose..."
                            style={{
                                width: '100%',
                                padding: '0.625rem 1rem 0.625rem 2.5rem',
                                borderRadius: '10px',
                                border: '1px solid var(--border)',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button style={{ backgroundColor: 'white', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
                        <Filter size={18} /> Filters
                    </button>
                </div>
            </div>

            <LogTable title="Recent Visitors" data={mockVisitors} columns={columns} />

            {showForm && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backdropFilter: 'blur(4px)'
                }}>
                    <div className="card" style={{ width: '100%', maxWidth: '600px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Log New Visitor</h3>
                            <button
                                onClick={() => setShowForm(false)}
                                style={{ backgroundColor: 'transparent', color: 'var(--text-muted)', padding: '0.25rem' }}
                            >
                                ✕
                            </button>
                        </div>

                        <form style={{ display: 'grid', gap: '1.25rem' }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Visitor Name</label>
                                    <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>NIC / Passport</label>
                                    <input type="text" placeholder="ID Number" style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Visitor Type</label>
                                    <select style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                        <option>Walk-in</option>
                                        <option>Pre-registered</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Purpose</label>
                                    <input type="text" placeholder="Meeting, Delivery, etc." style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Notes</label>
                                <textarea rows="3" placeholder="Additional details..." style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'inherit' }}></textarea>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, backgroundColor: 'white', border: '1px solid var(--border)' }}>Cancel</button>
                                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Submit Entry</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisitorsView;
