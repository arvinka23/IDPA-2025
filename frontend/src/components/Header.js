import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">Liquiditätsnachweis</span>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Dashboard
          </Link>
          <Link 
            to="/kontenplan" 
            className={location.pathname === '/kontenplan' ? 'active' : ''}
          >
            Kontenplan
          </Link>
          <Link 
            to="/buchungen" 
            className={location.pathname === '/buchungen' ? 'active' : ''}
          >
            Buchungen
          </Link>
          <Link 
            to="/bilanz" 
            className={location.pathname === '/bilanz' ? 'active' : ''}
          >
            Bilanz
          </Link>
          <Link 
            to="/liquiditaet" 
            className={location.pathname === '/liquiditaet' ? 'active' : ''}
          >
            Liquidität
          </Link>
        </nav>
        <div className="user-menu">
          <span className="user-name">{user?.username || user?.firma}</span>
          <button onClick={logout} className="btn-logout">
            Abmelden
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
