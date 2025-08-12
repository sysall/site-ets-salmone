import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../config/emailConfig';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        sent_date: new Date().toLocaleDateString('fr-FR'),
        sent_time: new Date().toLocaleTimeString('fr-FR')
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.CONTACT,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Contactez-Nous</h1>
          <p className="page-description">
            Nous sommes là pour vous aider ! N'hésitez pas à nous contacter pour toute question 
            concernant nos produits ou pour passer une commande.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Informations de Contact</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Téléphone</h3>
                  <p>+221 XX XX XX XX XX</p>
                  <p>Disponible 24h/7j</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>contact@etssalmone.sn</p>
                  <p>Réponse sous 24h</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>Adresse</h3>
                  <p>Dakar, Sénégal</p>
                  <p>Livraison dans tout le pays</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h3>Horaires</h3>
                  <p>Lundi - Vendredi: 8h - 18h</p>
                  <p>Samedi: 9h - 16h</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="why-choose-us">
              <h3>Pourquoi Nous Choisir ?</h3>
              <ul className="features-list">
                <li>
                  <Check size={20} />
                  <span>Produits 100% authentiques et de qualité premium</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>Livraison rapide dans tout le Sénégal</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>Service client réactif et professionnel</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>Conseils personnalisés pour vos besoins</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>Prix compétitifs et promotions régulières</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Envoyez-nous un Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="+221 XX XX XX XX XX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Sujet *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Commande produit">Commande de produit</option>
                  <option value="Information produit">Information sur un produit</option>
                  <option value="Livraison">Question sur la livraison</option>
                  <option value="Service client">Service client</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  required
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <Check size={20} />
                  Message envoyé avec succès ! Nous vous contacterons bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <X size={20} />
                  Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-content">
            <h2>Besoin d'Aide Immédiate ?</h2>
            <p>
              Appelez-nous directement pour une assistance rapide ou pour passer votre commande par téléphone.
            </p>
            <a href="tel:+221XXXXXXXXX" className="btn btn-outline btn-large">
              <Phone size={20} />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;