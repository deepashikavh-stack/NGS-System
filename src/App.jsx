import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import VisitorsView from './views/VisitorsView';
import StaffView from './views/StaffView';
import VehiclesView from './views/VehiclesView';
import ReportsView from './views/ReportsView';
import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import { ArrowLeft } from 'lucide-react';
import './App.css';

function App() {
  const [view, setView] = useState('landing'); // landing, login, app
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [publicMode, setPublicMode] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setView('app');
    setActiveTab('dashboard');
    setPublicMode(false);
  };

  const handlePublicAccess = (targetView) => {
    setActiveTab(targetView);
    setView('app');
    setPublicMode(true);
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'visitors':
        return <VisitorsView />;
      case 'staff':
        return <StaffView />;
      case 'vehicles':
        return <VehiclesView />;
      case 'reports':
        return <ReportsView />;
      default:
        return <DashboardView />;
    }
  };

  if (view === 'landing') {
    return <LandingPage onNavigate={handlePublicAccess} onLogin={() => setView('login')} />;
  }

  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
      {!publicMode && <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />}

      <main style={{
        flex: 1,
        marginLeft: publicMode ? '0' : '260px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)'
      }}>
        {publicMode ? (
          <header style={{
            padding: '1.5rem 2rem',
            backgroundColor: 'white',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <button
              onClick={() => setView('landing')}
              style={{ backgroundColor: 'transparent', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={20} /> Back to Home
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/logo.png" alt="Logo" style={{ width: '32px', height: 'auto' }} />
              <span style={{ fontWeight: 700 }}>Nextgen Shield</span>
            </div>
          </header>
        ) : (
          <Navbar activeTab={activeTab} user={user} />
        )}

        <div className="main-content" style={{ flex: 1 }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
