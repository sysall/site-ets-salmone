import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import { productCategories, getAllProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');

  // Get products based on URL category or all products
  const baseProducts = useMemo(() => {
    if (category && productCategories[category]) {
      return getProductsByCategory(category).map(product => ({
        ...product,
        brandName: productCategories[category].name
      }));
    }
    return getAllProducts();
  }, [category]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = baseProducts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product =>
        product.brandName && product.brandName.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'brand':
          return (a.brandName || '').localeCompare(b.brandName || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [baseProducts, searchTerm, selectedCategory, selectedBrand, sortBy]);

  // Get unique categories and brands for filters
  const categories = useMemo(() => {
    const cats = [...new Set(baseProducts.map(p => p.category))];
    return cats.sort();
  }, [baseProducts]);

  const brands = useMemo(() => {
    const brandSet = new Set(baseProducts.map(p => p.brandName).filter(Boolean));
    return [...brandSet].sort();
  }, [baseProducts]);

  const currentBrandName = category && productCategories[category] 
    ? productCategories[category].name 
    : 'Tous les Produits';

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>{currentBrandName}</span>
          </div>
          <h1 className="page-title">
            {currentBrandName}
            <span className="product-count">({filteredProducts.length} produits)</span>
          </h1>
          {category && productCategories[category] && (
            <p className="page-description">
              {productCategories[category].description}
            </p>
          )}
        </div>

        {/* Filters and Search */}
        <div className="filters-section">
          <div className="filters-row">
            {/* Search */}
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filters */}
            <div className="filters-group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {!category && (
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">Toutes les marques</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              )}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Trier par nom</option>
                <option value="category">Trier par catégorie</option>
                {!category && <option value="brand">Trier par marque</option>}
              </select>
            </div>

            {/* View Mode */}
            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`products-container ${viewMode}`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">
              <div className="no-products-content">
                <Filter size={48} />
                <h3>Aucun produit trouvé</h3>
                <p>
                  Essayez de modifier vos critères de recherche ou de filtrage pour voir plus de produits.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedBrand('all');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;