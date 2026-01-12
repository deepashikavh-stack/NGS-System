import React, { useState } from 'react';
import { Users, UserPlus, Filter, Search, CheckCircle, XCircle, LogOut, Eye } from 'lucide-react';

const EntryManagementView = () => {
    const [typeFilter, setTypeFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock unified data combining visitors and staff
    const unifiedEntries = [
        {
            id: 'v1',
            name: 'John Doe',
            type: 'Visitor',
            identifier: '881234567V',
            purpose: 'Parent Meeting',
            entryTime: '2026-01-12T09:15:00',
            exitTime: null,
            confirmationStatus: 'Manual',
            status: 'Confirmed',
            preRegistered: false
        },
        {
            id: 'v2',
            name: 'Alice Smith',
            type: 'Visitor',
            identifier: 'N12345678',
            purpose: 'Vendor Delivery',
            entryTime: '2026-01-12T10:30:00',
            exitTime: null,
            confirmationStatus: 'Agent-Auto',
            status: 'Confirmed',
            preRegistered: true
        },
        {
            id: 's1',
            name: 'Dr. Sarah Wilson',
            type: 'Staff',
            identifier: 'EMP001',
            purpose: 'Mathematics Department',
            entryTime: '2026-01-12T08:30:00',
            exitTime: null,
            confirmationStatus: 'Agent-Auto',
            status: 'Confirmed',
            preRegistered: false
        },
        {
            id: 's2',
            name: 'Mr. James Miller',
            type: 'Staff',
            identifier: 'EMP042',
            purpose: 'Science Department',
            entryTime: '2026-01-12T08:45:00',
            exitTime: null,
            confirmationStatus: 'Agent-Auto',
            status: 'Confirmed',
            preRegistered: false
        },
        {
            id: 'v3',
            name: 'Bob Johnson',
            type: 'Visitor',
            identifier: '921234567V',
            purpose: 'Service',
            entryTime: '2026-01-12T11:00:00',
            exitTime: null,
            confirmationStatus: 'Manual',
            status: 'Pending',
            preRegistered: false
        },
    ];

    // Filter logic
    const filteredEntries = unifiedEntries.filter(entry => {
        const matchesType = typeFilter === 'All' || entry.type === typeFilter;
        const matchesStatus = statusFilter === 'All' || entry.status === statusFilter;
        const matchesSearch = entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.identifier.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesStatus && matchesSearch;
    }).sort((a, b) => new Date(b.entryTime) - new Date(a.entryTime));

    const getTypeColor = (type) => {
        return type === 'Visitor' ? '#2563eb' : '#10b981';
    };

    const getStatusColor = (status, confirmationStatus) => {
        if (status === 'Pending') return '#f59e0b';
        if (confirmationStatus === 'Agent-Auto') return '#6b7280';
        return '#10b981';
    };

    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Entry Management</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Unified view of all visitor and staff entries</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#eff6ff',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Visitors: {unifiedEntries.filter(e => e.type === 'Visitor').length}</span>
                    </div>
                    <div style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f0fdf4',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Staff: {unifiedEntries.filter(e => e.type === 'Staff').length}</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: '1rem', alignItems: 'end' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Type</label>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}
                        >
                            <option>All</option>
                            <option>Visitor</option>
                            <option>Staff</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '8px', border: '1px solid var(--border)' }}
                        >
                            <option>All</option>
                            <option>Confirmed</option>
                            <option>Pending</option>
                        </select>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setTypeFilter('All');
                                setStatusFilter('All');
                                setSearchQuery('');
                            }}
                            style={{
                                width: '100%',
                                padding: '0.625rem',
                                backgroundColor: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Filter size={18} /> Clear Filters
                        </button>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Search</label>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by name or ID..."
                                style={{
                                    width: '100%',
                                    padding: '0.625rem 1rem 0.625rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Unified Entry Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--background)' }}>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Name</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Type</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>ID/Code</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Purpose/Dept</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Entry Time</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Exit Time</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Status</th>
                                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEntries.length === 0 ? (
                                <tr>
                                    <td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                        No entries found matching your filters.
                                    </td>
                                </tr>
                            ) : (
                                filteredEntries.map((entry) => (
                                    <tr
                                        key={entry.id}
                                        style={{
                                            borderBottom: '1px solid var(--border)',
                                            backgroundColor: entry.type === 'Visitor' ? '#eff6ff' : '#f0fdf4',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>{entry.name}</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.375rem',
                                                padding: '0.25rem 0.625rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                backgroundColor: entry.type === 'Visitor' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                                color: getTypeColor(entry.type)
                                            }}>
                                                {entry.type === 'Visitor' ? <Users size={12} /> : <UserPlus size={12} />}
                                                {entry.type}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{entry.identifier}</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{entry.purpose}</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{formatTime(entry.entryTime)}</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            {entry.exitTime ? formatTime(entry.exitTime) : <span style={{ color: 'var(--text-muted)' }}>—</span>}
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.375rem',
                                                padding: '0.25rem 0.625rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                backgroundColor: entry.status === 'Pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                                color: getStatusColor(entry.status, entry.confirmationStatus)
                                            }}>
                                                {entry.status === 'Pending' ? '⏳' : entry.confirmationStatus === 'Agent-Auto' ? '🤖' : '👤'}
                                                {entry.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                {entry.status === 'Pending' && (
                                                    <button
                                                        style={{
                                                            padding: '0.375rem 0.75rem',
                                                            backgroundColor: 'var(--accent)',
                                                            color: 'white',
                                                            borderRadius: '6px',
                                                            fontSize: '0.75rem',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.25rem'
                                                        }}
                                                    >
                                                        <CheckCircle size={14} /> Confirm
                                                    </button>
                                                )}
                                                {!entry.exitTime && entry.status === 'Confirmed' && (
                                                    <button
                                                        style={{
                                                            padding: '0.375rem 0.75rem',
                                                            backgroundColor: 'var(--warning)',
                                                            color: 'white',
                                                            borderRadius: '6px',
                                                            fontSize: '0.75rem',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.25rem'
                                                        }}
                                                    >
                                                        <LogOut size={14} /> Check-out
                                                    </button>
                                                )}
                                                <button
                                                    style={{
                                                        padding: '0.375rem 0.75rem',
                                                        backgroundColor: 'white',
                                                        border: '1px solid var(--border)',
                                                        borderRadius: '6px',
                                                        fontSize: '0.75rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.25rem'
                                                    }}
                                                >
                                                    <Eye size={14} /> View
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EntryManagementView;
