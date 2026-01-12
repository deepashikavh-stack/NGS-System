import React, { useState } from 'react';
import LogTable from '../components/LogTable';
import { AlertTriangle, Plus, ShieldAlert, Filter } from 'lucide-react';

const IncidentsView = () => {
    const [showForm, setShowForm] = useState(false);

    const columns = [
        { header: 'Date & Time', key: 'date_time' },
        { header: 'Category', key: 'category' },
        { header: 'Severity', key: 'severity' },
        { header: 'Status', key: 'status' },
        { header: 'Description', key: 'description' },
    ];

    const mockIncidents = [
        { date_time: '2026-01-12 08:30 AM', category: 'Safety', severity: 'Medium', status: 'Under Review', description: 'Small oil spill near Gate B' },
        { date_time: '2026-01-11 02:15 PM', category: 'Security', severity: 'High', status: 'Closed', description: 'Unauthorized entry attempt at North Perimeter' },
        { date_time: '2026-01-12 11:00 AM', category: 'Health', severity: 'Low', status: 'Open', description: 'Student minor injury in playground' },
    ];

    const getSeverityColor = (sev) => {
        switch (sev.toLowerCase()) {
            case 'critical': return 'var(--danger)';
            case 'high': return '#f97316'; // orange-500
            case 'medium': return 'var(--warning)';
            case 'low': return 'var(--primary)';
            default: return 'var(--text-muted)';
        }
    };

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Incident Management</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Report and manage school safety and security incidents.</p>
                </div>
                <button className="btn-primary" onClick={() => setShowForm(true)} style={{ backgroundColor: 'var(--danger)' }}>
                    <AlertTriangle size={18} /> Report New Incident
                </button>
            </div>

            <div className="grid grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
                <div className="card" style={{ borderLeft: '4px solid var(--danger)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Open Incidents</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>5</p>
                </div>
                <div className="card" style={{ borderLeft: '4px solid var(--warning)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Under Review</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>3</p>
                </div>
                <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Resolved Today</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</p>
                </div>
                <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Total Monthly</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>24</p>
                </div>
            </div>

            <LogTable title="Incident Registry" data={mockIncidents} columns={columns} />

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
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ShieldAlert size={20} color="var(--danger)" /> Log Incident Report
                            </h3>
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
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Incident Category</label>
                                    <select style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                        <option>Security</option>
                                        <option>Safety</option>
                                        <option>Health / Medical</option>
                                        <option>Fire / Hazard</option>
                                        <option>Asset Damage</option>
                                        <option>Behavioral</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Severity Level</label>
                                    <select style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Critical</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Detailed Description</label>
                                <textarea rows="4" placeholder="Explain the incident in detail..." style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'inherit' }}></textarea>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, backgroundColor: 'white', border: '1px solid var(--border)' }}>Cancel</button>
                                <button type="submit" className="btn-primary" style={{ flex: 1, backgroundColor: 'var(--danger)' }}>Confirm Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IncidentsView;
