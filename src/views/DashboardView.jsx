import React from 'react';
import StatCard from '../components/StatCard';
import LogTable from '../components/LogTable';
import { Users, UserPlus, Car, AlertTriangle } from 'lucide-react';

const DashboardView = () => {
    const stats = [
        { title: 'Total Visitors Today', value: '42', icon: Users, trend: 'up', trendValue: '+12%', color: '#2563eb' },
        { title: 'Staff On-Site', value: '128', icon: UserPlus, trend: 'up', trendValue: '+5%', color: '#10b981' },
        { title: 'Vehicle Entries', value: '18', icon: Car, trend: 'down', trendValue: '-2%', color: '#f59e0b' },
    ];

    const recentVisitors = [
        { name: 'John Doe', type: 'Visitor', displayDetail: 'Parent Meeting', status: 'Approved', time: '2026-01-12T09:15:00' },
        { name: 'Alice Smith', type: 'Visitor', displayDetail: 'Vendor Delivery', status: 'Auto-confirmed', time: '2026-01-12T10:30:00' },
        { name: 'Bob Johnson', type: 'Visitor', displayDetail: 'Service', status: 'Pending', time: '2026-01-12T11:00:00' },
    ];

    const recentStaff = [
        { name: 'Dr. Sarah Wilson', type: 'Staff', displayDetail: 'EMP001', status: 'Confirmed', time: '2026-01-12T08:30:00' },
        { name: 'Mr. James Miller', type: 'Staff', displayDetail: 'EMP042', status: 'Confirmed', time: '2026-01-12T08:45:00' },
    ];

    const unifiedData = [
        ...recentVisitors,
        ...recentStaff
    ].sort((a, b) => new Date(b.time) - new Date(a.time))
        .map(entry => ({
            ...entry,
            formattedTime: new Date(entry.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }));

    const columns = [
        { header: 'Type', key: 'type' },
        { header: 'Name', key: 'name' },
        { header: 'Detail (Purpose/ID)', key: 'displayDetail' },
        { header: 'Status', key: 'status' },
        { header: 'Time', key: 'formattedTime' },
    ];

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '2rem' }}>
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
                <LogTable title="Unified Access Log (Visitors & Staff)" data={unifiedData} columns={columns} />
            </div>
        </div>
    );
};

export default DashboardView;
