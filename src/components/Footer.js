import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/images/ETS Salmome logo.PNG" 
                alt="ETS Salmone Logo" 
                className="footer-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="footer-logo-fallback" style={{display: 'none'}}>
                <ShoppingBag className="logo-icon" />
                <span className="logo-text">ETS Salmone</span>
              </div>
            </div>
            <p className="footer-description">
              Votre partenaire de confiance pour des produits de beauté et cosmétiques de qualité premium. 
              Nous proposons les meilleures marques pour sublimer votre beauté naturelle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Liens Rapides</h3>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/products">Tous les Produits</Link></li>
              <li><Link to="/products/francoise-bedon">Françoise Bedon</Link></li>
              <li><Link to="/products/patricia-reynier">Patricia Reynier</Link></li>
              <li><Link to="/products/longrich">Longrich</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Catégories</h3>
            <ul className="footer-links">
              <li><a href="#cremes">Crèmes</a></li>
              <li><a href="#laits">Laits Corporels</a></li>
              <li><a href="#serums">Sérums</a></li>
              <li><a href="#savons">Savons</a></li>
              <li><a href="#supplements">Suppléments</a></li>
              <li><a href="#hygiene">Hygiène</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+225 XX XX XX XX XX</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>contact@etssalmone.ci</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 ETS Salmone. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Politique de Confidentialité</a>
              <a href="#terms">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;