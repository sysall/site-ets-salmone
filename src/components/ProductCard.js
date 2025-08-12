import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzEyNy45MSAxMDAgMTEwIDExNy45MSAxMTAgMTQwQzExMCAxNjIuMDkgMTI3LjkxIDE4MCAxNTAgMTgwQzE3Mi4wOSAxODAgMTkwIDE2Mi4wOSAxOTAgMTQwQzE5MCAxMTcuOTEgMTcyLjA5IDEwMCAxNTAgMTAwWiIgZmlsbD0iI0U5RUNFRiIvPgo8cGF0aCBkPSJNMTMwIDEzMEMxMzAgMTI0LjQ3NyAxMzQuNDc3IDEyMCAxNDAgMTIwQzE0NS41MjMgMTIwIDE1MCAxMjQuNDc3IDE1MCAxMzBDMTUwIDEzNS41MjMgMTQ1LjUyMyAxNDAgMTQwIDE0MEMxMzQuNDc3IDE0MCAxMzAgMTM1LjUyMyAxMzAgMTMwWiIgZmlsbD0iI0Q5REREQyIvPgo8cGF0aCBkPSJNMTYwIDEzMEMxNjAgMTI0LjQ3NyAxNjQuNDc3IDEyMCAxNzAgMTIwQzE3NS41MjMgMTIwIDE4MCAxMjQuNDc3IDE4MCAxMzBDMTgwIDEzNS41MjMgMTc1LjUyMyAxNDAgMTcwIDE0MEMxNjQuNDc3IDE0MCAxNjAgMTM1LjUyMyAxNjAgMTMwWiIgZmlsbD0iI0Q5REREQyIvPgo8L3N2Zz4K';
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={handleImageError}
        />
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
            <Eye size={16} />
            Voir Détails
          </Link>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        {product.brandName && (
          <div className="product-brand">{product.brandName}</div>
        )}
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="product-price">{product.price}</div>
          <Link to={`/product/${product.id}`} className="btn btn-outline btn-sm">
            <ShoppingCart size={16} />
            Commander
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;