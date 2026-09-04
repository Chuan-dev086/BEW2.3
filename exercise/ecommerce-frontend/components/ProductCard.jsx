const ProductCard = ({ product, onAddToCart, onEdit, onDelete }) => {
  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      <div className="d-flex flex-column card-body">
        {/* Product Title */}
        <h5 className="mb-3 card-title product-title">{product.title}</h5>

        {/* Price and Category */}
        <div className="mb-3">
          <div className="d-flex mb-2 align-items-center justify-content-between">
            <span className="text-success fw-bold product-price">
              ${product.price.toFixed(2)}
            </span>
            <span
              className="badge-category"
              style={{ backgroundColor: product.categoryColor }}
            >
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="mb-3 btn btn-primary btn-sm btn-add-to-cart w-100"
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>

        {/* Edit and Delete Buttons */}
        <div className="d-flex gap-2">
          <button
            className="flex-grow-1 btn btn-edit btn-sm"
            onClick={() => onEdit(product.id)}
          >
            Edit
          </button>
          <button
            className="flex-grow-1 btn btn-delete btn-sm"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
