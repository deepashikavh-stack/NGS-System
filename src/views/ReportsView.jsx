import React, { useState } from 'react';
import StatCard from '../components/StatCard';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip as ChartTooltip,
    Legend as ChartLegend,
} from 'chart.js';
import { Bar as BarChartJS } from 'react-chartjs-2';
import { Users, Car, Calendar, FileText } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    ChartTooltip,
    ChartLegend
);

const ReportsView = () => {
    const [range, setRange] = useState('Weekly');

    const barData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Visitors',
                data: [65, 59, 80, 81, 56, 40, 30],
                backgroundColor: '#2563eb',
                borderRadius: 6,
            },
            {
                label: 'Staff',
                data: [120, 115, 130, 125, 110, 20, 15],
                backgroundColor: '#10b981',
                borderRadius: 6,
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Incidents',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.5)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="animate-fade-in" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Reports & Analytics</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Analyze system data and generate compliance reports.</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'white', padding: '0.25rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    {['Daily', 'Weekly', 'Monthly', 'Annual'].map(r => (
                        <button
                            key={r}
                            onClick={() => setRange(r)}
                            style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: range === r ? 'var(--primary)' : 'transparent',
                                color: range === r ? 'white' : 'var(--text-muted)',
                                borderRadius: '10px'
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '2rem' }}>
                <StatCard title="Total Visitors" value="1,284" icon={Users} trend="up" trendValue="+8%" color="#2563eb" />
                <StatCard title="Staff Logs" value="4,520" icon={Users} trend="up" trendValue="+2%" color="#10b981" />
                <StatCard title="Vehicle Entries" value="842" icon={Car} trend="down" trendValue="-3%" color="#f59e0b" />
            </div>

            <div className="grid grid-cols-1 gap-4" style={{ marginBottom: '2rem' }}>
                <div className="card">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Traffic Overview ({range})</h3>
                    <div style={{ height: '300px' }}>
                        <BarChartJS data={barData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Available Reports</h3>
                    <button className="btn-primary">
                        <Calendar size={18} /> Schedule Report
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', borderRadius: '10px' }}>
                                <FileText size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Daily Operational Summary</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Generated: Today, 05:00 PM</p>
                            </div>
                        </div>
                        <button style={{ color: 'var(--primary)', fontWeight: 600, backgroundColor: 'transparent' }}>Download PDF</button>
                    </div>
                    <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', borderRadius: '10px' }}>
                                <FileText size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Weekly Security Analytics</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Generated: Yesterday, 12:00 AM</p>
                            </div>
                        </div>
                        <button style={{ color: 'var(--primary)', fontWeight: 600, backgroundColor: 'transparent' }}>Download Excel</button>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>System Audit Logs</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'var(--background)' }}>
                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Action</th>
                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Entity</th>
                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>User/Agent</th>
                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Timestamp</th>
                                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Auto-confirmation</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Staff Entry</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--primary)' }}>NGS-Agent-01</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Today, 08:30 AM</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Verified EMP001</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Record Creation</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Visitor</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Officer - Gate A</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Today, 09:15 AM</td>
                                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>ID: 881234567V</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportsView;
