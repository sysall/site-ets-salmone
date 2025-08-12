import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Heart } from 'lucide-react';
import { productCategories, getAllProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = getAllProducts().slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Découvrez la <span className="text-gradient">Beauté Authentique</span>
              </h1>
              <p className="hero-description">
                ETS Salmone vous propose une sélection premium de produits de beauté et cosmétiques 
                des plus grandes marques. Sublimez votre beauté naturelle avec nos soins d'exception.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Découvrir nos Produits
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Nous Contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="heading-2 text-center mb-5">
            Pourquoi Choisir <span className="text-gradient">ETS Salmone</span> ?
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>Produits Premium</h3>
              <p>
                Nous sélectionnons uniquement les meilleures marques pour vous garantir 
                des produits de qualité exceptionnelle.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Authenticité Garantie</h3>
              <p>
                Tous nos produits sont 100% authentiques et proviennent directement 
                des fabricants officiels.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3>Livraison Rapide</h3>
              <p>
                Commandez facilement et recevez vos produits rapidement partout en 
                Côte d'Ivoire.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3>Service Client</h3>
              <p>
                Notre équipe est à votre écoute pour vous conseiller et vous accompagner 
                dans vos choix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories section">
        <div className="container">
          <h2 className="heading-2 text-center mb-5">Nos Marques</h2>
          <div className="categories-grid">
            {Object.entries(productCategories).map(([key, category]) => (
              <Link 
                key={key} 
                to={`/products/${key}`} 
                className="category-card"
              >
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="category-count">
                    {category.products.length} produits
                  </div>
                </div>
                <div className="category-arrow">
                  <ArrowRight size={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2 text-center mb-2">Produits Populaires</h2>
            <p className="text-center mb-5">
              Découvrez notre sélection de produits les plus appréciés par nos clients
            </p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              Voir Tous les Produits
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2 text-center">
              Prêt à Découvrir Nos Produits ?
            </h2>
            <p className="text-center mb-4">
              Explorez notre catalogue complet et trouvez les produits parfaits pour vous
            </p>
            <div className="text-center">
              <Link to="/products" className="btn btn-primary">
                Commencer Maintenant
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;