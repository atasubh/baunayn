import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';

function App() {
  // Simple state to toggle between Marketing view (Landing) and App view (Dashboard)
  // In a real app, this would be handled by Auth state and React Router
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <LandingPage onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App;