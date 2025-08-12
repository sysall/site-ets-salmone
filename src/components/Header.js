import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img 
              src="/images/ETS Salmome logo.PNG" 
              alt="ETS Salmone Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback" style={{display: 'none'}}>
              <ShoppingBag className="logo-icon" />
              <span className="logo-text">ETS Salmone</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Accueil
            </Link>
            <Link to="/products" className={`nav-link ${isActive('/products')}`}>
              Produits
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link-mobile ${isActive('/')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/products" 
            className={`nav-link-mobile ${isActive('/products')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Produits
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link-mobile ${isActive('/contact')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;