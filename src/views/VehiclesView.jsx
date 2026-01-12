import React, { useState } from 'react';
import LogTable from '../components/LogTable';
import { Car, Search, PlusCircle, Camera } from 'lucide-react';

const VehiclesView = () => {
    const [showForm, setShowForm] = useState(false);

    const columns = [
        { header: 'Vehicle Number', key: 'vehicle_number' },
        { header: 'Vehicle Type', key: 'type' },
        { header: 'Driver Name', key: 'driver' },
        { header: 'Entry Time', key: 'entry_time' },
        { header: 'Exit Time', key: 'exit_time' },
    ];

    const mockVehicles = [
        { vehicle_number: 'WP CAS-1234', type: 'Car', driver: 'John Doe', entry_time: '08:30 AM', exit_time: '-' },
        { vehicle_number: 'WP LV-5678', type: 'Van (School)', driver: 'Sunil Perera', entry_time: '07:15 AM', exit_time: '07:45 AM' },
        { vehicle_number: 'WP GA-9012', type: 'Truck (Vendor)', driver: 'Aruna Silva', entry_time: '10:00 AM', exit_time: '-' },
    ];

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Vehicle Entry Management</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Monitor and log all vehicles entering the school premises.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ backgroundColor: 'white', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
                        <Camera size={18} /> ANPR Simulation
                    </button>
                    <button className="btn-primary" onClick={() => setShowForm(true)}>
                        <PlusCircle size={18} /> New Vehicle Entry
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <LogTable title="Live Vehicle Log" data={mockVehicles} columns={columns} />
            </div>

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
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Vehicle Entry Log</h3>
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
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Vehicle Number</label>
                                    <input type="text" placeholder="WP ABC-1234" style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Vehicle Type</label>
                                    <select style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                        <option>Car</option>
                                        <option>Van (School)</option>
                                        <option>Van (Private)</option>
                                        <option>Bus</option>
                                        <option>Motorbike</option>
                                        <option>Truck (Vendor)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Driver Name</label>
                                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, backgroundColor: 'white', border: '1px solid var(--border)' }}>Cancel</button>
                                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Log Vehicle Entry</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehiclesView;
