import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    return (
        <div className="card animate-fade-in" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                    padding: '0.75rem',
                    backgroundColor: `${color}15`,
                    borderRadius: '12px',
                    color: color
                }}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        color: trend === 'up' ? 'var(--accent)' : 'var(--danger)',
                        backgroundColor: trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '20px'
                    }}>
                        {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {trendValue}
                    </div>
                )}
            </div>
            <div>
                <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>{title}</h3>
                <p style={{ fontSize: '1.75rem', fontWeight: 700 }}>{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
