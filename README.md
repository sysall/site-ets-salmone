# ETS Salmone - Site Web de Vente de Produits de Beauté

Un site web moderne et responsive pour ETS Salmone, permettant de présenter et vendre des produits de beauté et cosmétiques des marques Françoise Bedon, Patricia Reynier et Longrich.

## 🚀 Fonctionnalités

- **Catalogue de produits** avec filtres et recherche
- **Pages de détail produit** avec images et descriptions complètes
- **Formulaire de commande** intégré avec envoi par email
- **Page de contact** avec formulaire de contact
- **Design responsive** optimisé pour mobile et desktop
- **Interface moderne** avec animations et transitions fluides

## 📦 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Configurer EmailJS** (voir section Configuration Email ci-dessous)

3. **Démarrer l'application** :
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 📧 Configuration Email

Pour que les formulaires de commande et de contact fonctionnent, vous devez configurer EmailJS :

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Configurer un service email
- Dans votre dashboard EmailJS, ajoutez un service email (Gmail, Outlook, etc.)
- Notez le **Service ID** généré

### 3. Créer les templates email
Créez deux templates dans EmailJS :

#### Template de Commande (template_order)
```
Sujet: Nouvelle Commande - {{product_name}}

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
```

#### Template de Contact (template_contact)
```
Sujet: Nouveau Message - {{subject}}

Bonjour,

Nouveau message via le formulaire de contact :

De: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Sujet: {{subject}}

Message:
{{message}}

Envoyé le {{sent_date}} à {{sent_time}}
```

### 4. Mettre à jour la configuration
Modifiez le fichier `src/config/emailConfig.js` avec vos vraies valeurs :

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'votre_service_id',
  TEMPLATES: {
    ORDER: 'template_order',
    CONTACT: 'template_contact'
  },
  PUBLIC_KEY: 'votre_cle_publique',
  COMPANY_EMAIL: 'votre_email@exemple.com'
};
```

## 🏗️ Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.js       # En-tête de navigation
│   ├── Footer.js       # Pied de page
│   └── ProductCard.js  # Carte de produit
├── pages/              # Pages principales
│   ├── HomePage.js     # Page d'accueil
│   ├── ProductsPage.js # Catalogue de produits
│   ├── ProductDetailPage.js # Détail d'un produit
│   └── ContactPage.js  # Page de contact
├── data/               # Données des produits
│   └── products.js     # Catalogue de produits
├── config/             # Configuration
│   └── emailConfig.js  # Configuration email
└── App.js              # Composant principal
```

## 🎨 Marques et Produits

Le site présente trois marques principales :

### Françoise Bedon
- Crèmes éclaircissantes
- Laits corporels
- Savons gommants
- Sérums éclaircissants

### Patricia Reynier
- Crèmes à l'argan
- Produits Gold 24K
- Sérums éclaircissants
- Savons de luxe

### Longrich
- Suppléments nutritionnels
- Produits d'hygiène
- Cosmétiques naturels
- Accessoires de santé

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :
- **Desktop** : Layout en grille avec sidebar
- **Tablette** : Layout adaptatif avec navigation condensée
- **Mobile** : Layout vertical avec menu hamburger

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Netlify
1. Connectez votre repository GitHub à Netlify
2. Configurez les variables d'environnement pour EmailJS
3. Le site sera automatiquement déployé

### Déploiement sur Vercel
1. Installez Vercel CLI : `npm i -g vercel`
2. Lancez : `vercel`
3. Suivez les instructions

## 🔧 Personnalisation

### Ajouter de nouveaux produits
Modifiez le fichier `src/data/products.js` pour ajouter de nouveaux produits ou catégories.

### Modifier le design
Les styles sont organisés par composant. Chaque composant a son fichier CSS associé.

### Changer les couleurs
Les couleurs principales sont définies dans `src/App.css` avec des variables CSS.

## 📞 Support

Pour toute question technique ou demande de personnalisation, contactez l'équipe de développement.

## 📄 Licence

Ce projet est développé spécifiquement pour ETS Salmone. Tous droits réservés.