import React, { useState } from 'react';
import LogTable from '../components/LogTable';
import { UserCheck, Search, Shield } from 'lucide-react';

const StaffView = () => {
    const [staffId, setStaffId] = useState('');
    const [notification, setNotification] = useState(null);

    const columns = [
        { header: 'Employee ID', key: 'staff_id' },
        { header: 'Name', key: 'name' },
        { header: 'Status', key: 'status' },
        { header: 'Entry Time', key: 'entry_time' },
        { header: 'Exit Time', key: 'exit_time' },
    ];

    const mockStaffLogs = [
        { staff_id: 'EMP001', name: 'James Wilson', status: 'Auto-confirmed', entry_time: '07:45 AM', exit_time: '-' },
        { staff_id: 'EMP042', name: 'Sarah Miller', status: 'Auto-confirmed', entry_time: '08:00 AM', exit_time: '-' },
        { staff_id: 'EMP015', name: 'Michael Chen', status: 'Auto-confirmed', entry_time: '08:05 AM', exit_time: '-' },
    ];

    const handleEntry = (e) => {
        e.preventDefault();
        if (!staffId) return;

        // Mock Agent validation
        setNotification({
            type: 'success',
            message: `Agent-Confirmed: Staff entry logged for ${staffId}`
        });
        setStaffId('');
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Staff & Employee Entry</h2>
                <p style={{ color: 'var(--text-muted)' }}>Validate and log entries for verified school personnel.</p>
            </div>

            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={20} color="var(--primary)" /> Employee Gate Check
                    </h3>
                    <form onSubmit={handleEntry} style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Employee ID / Code</label>
                            <input
                                type="text"
                                value={staffId}
                                onChange={(e) => setStaffId(e.target.value)}
                                placeholder="Enter Staff ID..."
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    fontSize: '1.125rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.05em'
                                }}
                            />
                        </div>
                        <button type="submit" className="btn-primary" style={{ padding: '1rem', justifyContent: 'center', fontSize: '1rem' }}>
                            <UserCheck size={20} /> Log Entry / Exit
                        </button>
                    </form>
                    {notification && (
                        <div style={{
                            marginTop: '1.5rem',
                            padding: '1rem',
                            borderRadius: '10px',
                            backgroundColor: notification.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            color: notification.type === 'success' ? 'var(--accent)' : 'var(--danger)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Shield size={16} /> {notification.message}
                        </div>
                    )}
                </div>

                <div className="card bg-primary" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Agent Automation Stats</h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div>
                            <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>Auto-confirmed Entries</p>
                            <p style={{ fontSize: '2rem', fontWeight: 700 }}>124 <span style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.7 }}>Today</span></p>
                        </div>
                        <div>
                            <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>Validation Exceptions</p>
                            <p style={{ fontSize: '2rem', fontWeight: 700 }}>2 <span style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.7 }}>Flagged</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <LogTable title="Live Staff Attendance" data={mockStaffLogs} columns={columns} />
        </div>
    );
};

export default StaffView;
