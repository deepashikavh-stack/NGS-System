import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardView from './views/DashboardView';
import VisitorsView from './views/VisitorsView';
import StaffView from './views/StaffView';
import VehiclesView from './views/VehiclesView';
import IncidentsView from './views/IncidentsView';
import ReportsView from './views/ReportsView';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
      case 'incidents':
        return <IncidentsView />;
      case 'reports':
        return <ReportsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{
        flex: 1,
        marginLeft: '260px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)'
      }}>
        <Navbar activeTab={activeTab} />
        <div className="main-content" style={{ flex: 1 }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
