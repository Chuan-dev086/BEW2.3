import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart, onEdit, onDelete }) => {
  if (products.length === 0) {
    return (
      <div className="py-5 text-center">
        <p className="text-muted">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      <div className="row g-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-4"
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;