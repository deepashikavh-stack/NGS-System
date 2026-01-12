import React from 'react';
import { MoreVertical, CheckCircle, Clock, XCircle } from 'lucide-react';

const LogTable = ({ title, data, columns }) => {
    const getStatusBadge = (status) => {
        let styles = {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600
        };

        switch (status.toLowerCase()) {
            case 'approved':
            case 'confirmed':
            case 'auto-confirmed':
                return <span style={{ ...styles, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)' }}><CheckCircle size={12} /> {status}</span>;
            case 'pending':
                return <span style={{ ...styles, backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}><Clock size={12} /> {status}</span>;
            case 'rejected':
            case 'closed':
                return <span style={{ ...styles, backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}><XCircle size={12} /> {status}</span>;
            default:
                return <span style={{ ...styles, backgroundColor: 'var(--background)', color: 'var(--text-muted)' }}>{status}</span>;
        }
    };

    const getMethodBadge = (method) => {
        let styles = {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600
        };

        if (method && method.includes('Agent-Auto')) {
            return <span style={{ ...styles, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)' }}>🤖 {method}</span>;
        } else if (method && method.includes('Manual')) {
            return <span style={{ ...styles, backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>👤 {method}</span>;
        } else {
            return <span style={{ ...styles, backgroundColor: 'var(--background)', color: 'var(--text-muted)' }}>{method || 'N/A'}</span>;
        }
    };

    return (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{title}</h3>
                <button style={{ backgroundColor: 'transparent', padding: '0.25rem', color: 'var(--text-muted)' }}>
                    <MoreVertical size={20} />
                </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--background)' }}>
                            {columns.map((col, idx) => (
                                <th key={idx} style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {col.header}
                                </th>
                            ))}
                            <th style={{ padding: '1rem 1.5rem' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + 1} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                    No recent records found.
                                </td>
                            </tr>
                        ) : (
                            data.map((row, rowIdx) => {
                                const isStaff = row.type === 'Staff';
                                const isVisitor = row.type === 'Visitor';

                                return (
                                    <tr
                                        key={rowIdx}
                                        style={{
                                            borderBottom: '1px solid var(--border)',
                                            transition: 'var(--transition)',
                                            backgroundColor: isStaff ? '#f0f7ff' : isVisitor ? '#f0fff4' : 'transparent'
                                        }}
                                    >
                                        {columns.map((col, colIdx) => (
                                            <td key={colIdx} style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                                {col.key === 'status'
                                                    ? getStatusBadge(row[col.key])
                                                    : col.key === 'method'
                                                        ? getMethodBadge(row[col.key])
                                                        : row[col.key]}
                                            </td>
                                        ))}
                                        <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                            <button style={{ backgroundColor: 'transparent', color: 'var(--text-muted)' }}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LogTable;
