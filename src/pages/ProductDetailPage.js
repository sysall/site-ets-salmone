import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, X, Phone, Mail, User } from 'lucide-react';
import { getProductById } from '../data/products';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../config/emailConfig';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderData, setOrderData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    quantity: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0yNTAgMTUwQzIwNC4xNyAxNTAgMTY3IDE4Ny4xNyAxNjcgMjMzQzE2NyAyNzguODMgMjA0LjE3IDMxNiAyNTAgMzE2QzI5NS44MyAzMTYgMzMzIDI3OC44MyAzMzMgMjMzQzMzMyAxODcuMTcgMjk1LjgzIDE1MCAyNTAgMTUwWiIgZmlsbD0iI0U5RUNFRiIvPgo8cGF0aCBkPSJNMjE3IDIxN0MyMTcgMjA3LjYxIDIyNC42MSAyMDAgMjM0IDIwMEMyNDMuMzkgMjAwIDI1MSAyMDcuNjEgMjUxIDIxN0MyNTEgMjI2LjM5IDI0My4zOSAyMzQgMjM0IDIzNEMyMjQuNjEgMjM0IDIxNyAyMjYuMzkgMjE3IDIxN1oiIGZpbGw9IiNEOUREREMiLz4KPHBhdGggZD0iTTI2NyAyMTdDMjY3IDIwNy42MSAyNzQuNjEgMjAwIDI4NCAyMDBDMjkzLjM5IDIwMCAzMDEgMjA3LjYxIDMwMSAyMTdDMzAxIDIyNi4zOSAyOTMuMzkgMjM0IDI4NCAyMzRDMjc0LjYxIDIzNCAyNjcgMjI2LjM5IDI2NyAyMTdaIiBmaWxsPSIjRDlEREQiLz4KPC9zdmc+Cg==';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Email template parameters
      const templateParams = {
        customer_name: orderData.customerName,
        customer_phone: orderData.customerPhone,
        customer_email: orderData.customerEmail,
        product_name: product.name,
        product_brand: product.brandName || 'N/A',
        product_category: product.category,
        product_price: product.price,
        quantity: orderData.quantity,
        message: orderData.message || 'Aucun message spécial',
        order_date: new Date().toLocaleDateString('fr-FR'),
        order_time: new Date().toLocaleTimeString('fr-FR')
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.ORDER,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setOrderData({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        quantity: 1,
        message: ''
      });
      
      // Auto close form after success
      setTimeout(() => {
        setShowOrderForm(false);
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Error sending order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <Link to="/products">Produits</Link>
          {product.brandName && (
            <>
              <span>/</span>
              <span>{product.brandName}</span>
            </>
          )}
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/products" className="back-button">
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>

        {/* Product Details */}
        <div className="product-detail">
          <div className="product-image-section">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-header">
              <div className="product-category">{product.category}</div>
              {product.brandName && (
                <div className="product-brand">{product.brandName}</div>
              )}
              <h1 className="product-title">{product.name}</h1>
              <div className="product-price">{product.price}</div>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-actions">
              <button
                className="btn btn-primary btn-large"
                onClick={() => setShowOrderForm(true)}
              >
                <ShoppingCart size={24} />
                Commander Maintenant
              </button>
              <Link to="/contact" className="btn btn-outline btn-large">
                <Phone size={24} />
                Nous Contacter
              </Link>
            </div>

            {/* Features */}
            <div className="product-features">
              <div className="feature">
                <Check size={20} />
                <span>Produit 100% authentique</span>
              </div>
              <div className="feature">
                <Check size={20} />
                <span>Livraison rapide au Sénégal</span>
              </div>
              <div className="feature">
                <Check size={20} />
                <span>Service client disponible</span>
              </div>
              <div className="feature">
                <Check size={20} />
                <span>Garantie de qualité</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="modal-overlay" onClick={() => setShowOrderForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Commander {product.name}</h2>
              <button
                className="modal-close"
                onClick={() => setShowOrderForm(false)}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmitOrder} className="order-form">
              <div className="form-group">
                <label className="form-label">
                  <User size={18} />
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={orderData.customerName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone size={18} />
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={orderData.customerPhone}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="+221 XX XX XX XX XX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail size={18} />
                  Adresse email (optionnel)
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  value={orderData.customerEmail}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Quantité</label>
                <input
                  type="number"
                  name="quantity"
                  value={orderData.quantity}
                  onChange={handleInputChange}
                  className="form-input"
                  min="1"
                  max="10"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message spécial (optionnel)</label>
                <textarea
                  name="message"
                  value={orderData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="3"
                  placeholder="Instructions spéciales pour votre commande..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <Check size={20} />
                  Commande envoyée avec succès ! Nous vous contacterons bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <X size={20} />
                  Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowOrderForm(false)}
                  disabled={isSubmitting}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Confirmer la commande
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;