const ProductCard = ({ product, onAddToCart, onEdit, onDelete }) => {
  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      <div className="d-flex flex-column card-body">
        {/* Product Title */}
        <h5 className="mb-3 card-title product-title">{product.title}</h5>

        {/* Price and Category */}
        <div className="mb-3">
          <div className="d-flex mb-2 align-items-center justify-content-between">
            <span className="px-3 py-1 badge rounded-pill bg-success-subtle text-success fw-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="px-3 py-1 badge rounded-pill bg-warning-subtle text-warning-emphasis fw-bold">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="mb-3 btn btn-primary w-100 fw-bold"
          style={{
            backgroundColor: "#4285f4",
            borderColor: "#4285f4",
            borderRadius: "6px",
            fontSize: "14px",
          }}
          onClick={() => onAddToCart(product.id)}
        >
          Add To Cart
        </button>

        {/* Edit and Delete Buttons */}
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="px-3 py-1 btn text-white rounded-pill fw-bold"
            style={{ backgroundColor: "#6366f1", fontSize: "12px" }}
            onClick={() => onEdit(product.id)}
          >
            Edit
          </button>
          <button
            className="px-3 py-1 btn text-white rounded-pill fw-bold"
            style={{ backgroundColor: "#ff0055", fontSize: "12px" }}
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
