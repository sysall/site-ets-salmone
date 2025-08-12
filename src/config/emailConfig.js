// EmailJS Configuration
// To set up email functionality, you need to:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create email templates for orders and contact forms
// 4. Replace the placeholder values below with your actual EmailJS credentials

export const EMAIL_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: 'service_ets_salmone', // Replace with your actual service ID
  
  // Your EmailJS template IDs
  TEMPLATES: {
    ORDER: 'template_order', // Template for order emails
    CONTACT: 'template_contact' // Template for contact form emails
  },
  
  // Your EmailJS public key
  PUBLIC_KEY: 'your_public_key', // Replace with your actual public key
  
  // Company email where orders and messages will be sent
  COMPANY_EMAIL: 'contact@etssalmone.ci'
};

// Email template suggestions:

/* ORDER EMAIL TEMPLATE:
Subject: Nouvelle Commande - {{product_name}}

Bonjour,

Vous avez reçu une nouvelle commande :

Détails du Client:
- Nom: {{customer_name}}
- Téléphone: {{customer_phone}}
- Email: {{customer_email}}

Détails de la Commande:
- Produit: {{product_name}}
- Marque: {{product_brand}}
- Catégorie: {{product_category}}
- Prix: {{product_price}}
- Quantité: {{quantity}}

Message spécial: {{message}}

Date de commande: {{order_date}} à {{order_time}}

Cordialement,
Système ETS Salmone
*/

/* CONTACT EMAIL TEMPLATE:
Subject: Nouveau Message - {{subject}}

Bonjour,

Vous avez reçu un nouveau message via le formulaire de contact :

De: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Sujet: {{subject}}

Message:
{{message}}

Envoyé le {{sent_date}} à {{sent_time}}

Cordialement,
Système ETS Salmone
*/