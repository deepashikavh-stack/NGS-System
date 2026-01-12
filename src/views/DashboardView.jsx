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
        { name: 'John Doe', type: 'Walk-in', purpose: 'Parent Meeting', status: 'Approved', time: '09:15 AM' },
        { name: 'Alice Smith', type: 'Pre-registered', purpose: 'Vendor Delivery', status: 'Auto-confirmed', time: '10:30 AM' },
        { name: 'Bob Johnson', type: 'Walk-in', purpose: 'Service', status: 'Pending', time: '11:00 AM' },
        { name: 'Charlie Brown', type: 'Pre-registered', purpose: 'Interview', status: 'Approved', time: '11:15 AM' },
    ];

    const columns = [
        { header: 'Visitor Name', key: 'name' },
        { header: 'Type', key: 'type' },
        { header: 'Purpose', key: 'purpose' },
        { header: 'Status', key: 'status' },
        { header: 'Entry Time', key: 'time' },
    ];

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '2rem' }}>
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
                <LogTable title="Live Visitor Log" data={recentVisitors} columns={columns} />
            </div>
        </div>
    );
};

export default DashboardView;
