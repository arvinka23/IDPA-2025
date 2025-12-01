import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Kontenplan from './pages/Kontenplan';
import Buchungen from './pages/Buchungen';
import Bilanz from './pages/Bilanz';
import Liquiditaet from './pages/Liquiditaet';
import Login from './pages/Login';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="loading">Laden...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

function AppContent() {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/kontenplan" element={
            <ProtectedRoute>
              <Kontenplan />
            </ProtectedRoute>
          } />
          <Route path="/buchungen" element={
            <ProtectedRoute>
              <Buchungen />
            </ProtectedRoute>
          } />
          <Route path="/bilanz" element={
            <ProtectedRoute>
              <Bilanz />
            </ProtectedRoute>
          } />
          <Route path="/liquiditaet" element={
            <ProtectedRoute>
              <Liquiditaet />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
