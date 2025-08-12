# Instructions de Configuration - ETS Salmone

## 🚀 Démarrage Rapide

1. **Installer Node.js** (version 16 ou plus récente)
   - Téléchargez depuis [nodejs.org](https://nodejs.org/)

2. **Installer les dépendances** :
   ```bash
   cd "site ETS Salmome"
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   npm start
   ```
   Le site sera accessible sur http://localhost:3000

## 📧 Configuration Email (OBLIGATOIRE)

Pour que les formulaires de commande fonctionnent, vous DEVEZ configurer EmailJS :

### Étape 1: Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Vérifiez votre email

### Étape 2: Ajouter un service email
1. Dans votre dashboard, cliquez sur "Email Services"
2. Cliquez "Add New Service"
3. Choisissez votre fournisseur email (Gmail recommandé)
4. Suivez les instructions de connexion
5. **IMPORTANT** : Notez le Service ID généré

### Étape 3: Créer les templates
Créez 2 templates email :

#### Template 1: Commandes (ID: template_order)
```
Sujet: Nouvelle Commande - {{product_name}}

Bonjour,

Nouvelle commande reçue :

CLIENT:
- Nom: {{customer_name}}
- Téléphone: {{customer_phone}}
- Email: {{customer_email}}

PRODUIT:
- Nom: {{product_name}}
- Marque: {{product_brand}}
- Prix: {{product_price}}
- Quantité: {{quantity}}

Message: {{message}}

Commande passée le {{order_date}} à {{order_time}}
```

#### Template 2: Contact (ID: template_contact)
```
Sujet: Message Contact - {{subject}}

Nouveau message de contact :

De: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Sujet: {{subject}}

Message:
{{message}}

Envoyé le {{sent_date}} à {{sent_time}}
```

### Étape 4: Obtenir la clé publique
1. Allez dans "Account" > "API Keys"
2. Copiez votre Public Key

### Étape 5: Configurer l'application
Modifiez le fichier `src/config/emailConfig.js` :

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'votre_service_id_ici',
  TEMPLATES: {
    ORDER: 'template_order',
    CONTACT: 'template_contact'
  },
  PUBLIC_KEY: 'votre_cle_publique_ici',
  COMPANY_EMAIL: 'votre_email@entreprise.com'
};
```

## 📱 Test de Fonctionnement

1. Lancez l'application : `npm start`
2. Allez sur un produit et testez la commande
3. Vérifiez que vous recevez l'email
4. Testez le formulaire de contact

## 🔧 Personnalisation

### Modifier les produits
Éditez `src/data/products.js` pour :
- Ajouter de nouveaux produits
- Modifier les prix
- Changer les descriptions

### Changer les informations de contact
Modifiez `src/pages/ContactPage.js` pour :
- Mettre à jour le numéro de téléphone
- Changer l'adresse email
- Modifier l'adresse physique

### Personnaliser les couleurs
Dans `src/App.css`, modifiez les variables CSS :
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

## 🚀 Déploiement

### Option 1: Netlify (Recommandé)
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Connectez votre repository GitHub
3. Configurez : Build command: `npm run build`, Publish directory: `build`
4. Déployez !

### Option 2: Vercel
1. Installez Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions

### Option 3: Hébergement traditionnel
1. Exécutez : `npm run build`
2. Uploadez le contenu du dossier `build/` sur votre serveur

## ⚠️ Points Importants

1. **EmailJS est OBLIGATOIRE** - Sans configuration email, les commandes ne fonctionneront pas
2. **Testez avant déploiement** - Vérifiez que tous les formulaires fonctionnent
3. **Images des produits** - Elles sont dans les dossiers de marques, assurez-vous qu'elles sont accessibles
4. **Responsive** - Le site s'adapte automatiquement aux mobiles

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est installé
2. Vérifiez la configuration EmailJS
3. Consultez les logs dans la console du navigateur
4. Contactez le développeur si nécessaire

## 📞 Contact Technique

Pour toute assistance technique ou modification, contactez l'équipe de développement avec :
- Les détails de l'erreur
- Capture d'écran si possible
- Étapes pour reproduire le problème