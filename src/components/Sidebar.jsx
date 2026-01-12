import React from 'react';
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Car,
    AlertTriangle,
    BarChart3,
    Settings,
    LogOut,
    ShieldCheck
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'visitors', label: 'Visitors', icon: Users },
        { id: 'staff', label: 'Staff Entry', icon: UserPlus },
        { id: 'vehicles', label: 'Vehicles', icon: Car },
        { id: 'incidents', label: 'Incidents', icon: AlertTriangle },
        { id: 'reports', label: 'Reports', icon: BarChart3 },
    ];

    return (
        <div className="sidebar" style={{
            width: '260px',
            height: '100vh',
            backgroundColor: 'white',
            borderRight: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 100
        }}>
            <div className="logo-container" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2.5rem',
                padding: '0.5rem'
            }}>
                <div style={{
                    backgroundColor: 'var(--primary)',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    color: 'white'
                }}>
                    <ShieldCheck size={24} />
                </div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>NGS Shield</h1>
            </div>

            <nav style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none' }}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    style={{
                                        width: '100%',
                                        justifyContent: 'flex-start',
                                        padding: '0.75rem 1rem',
                                        backgroundColor: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                                        color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                                        borderRadius: '10px',
                                        transition: 'var(--transition)'
                                    }}
                                >
                                    <Icon size={20} />
                                    <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="sidebar-footer" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <button
                    style={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'transparent',
                        color: 'var(--text-muted)'
                    }}
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </button>
                <button
                    style={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'transparent',
                        color: 'var(--danger)'
                    }}
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
