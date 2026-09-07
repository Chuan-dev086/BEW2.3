import { useState, useEffect } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Mock products data
const mockProducts = [
  {
    id: 1,
    title: "Animal Crossing: New Horizons",
    price: 49.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 2,
    title: "Astro's Playroom",
    price: 19.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    price: 39.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 4,
    title: "DualSense Wireless Controller",
    price: 59.99,
    category: "Accessories",
    categoryLabel: "ACCESSORIES",
  
  },
  {
    id: 5,
    title: "Gaming Headset",
    price: 99.99,
    category: "Accessories",
    categoryLabel: "ACCESSORIES",  },
  {
    id: 6,
    title: "God of War",
    price: 49.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 7,
    title: "Halo Infinite",
    price: 59.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 8,
    title: "Mario Kart 8 Deluxe",
    price: 44.99,
    category: "Games",
    categoryLabel: "GAMES",
  },
  {
    id: 9,
    title: "Nintendo Switch OLED",
    price: 349.99,
    category: "Consoles",
    categoryLabel: "CONSOLES",
  },
  {
    id: 10,
    title: "PlayStation 5",
    price: 499.99,
    category: "Consoles",
    categoryLabel: "CONSOLES",
  },
  {
    id: 11,
    title: "Xbox Series X",
    price: 499.99,
    category: "Consoles",
    categoryLabel: "CONSOLES",
  },
  {
    id: 12,
    title: "PlayStation Plus",
    price: 9.99,
    category: "Subscriptions",
    categoryLabel: "SUBSCRIPTIONS",
  },
];

const mockCategories = [
  "All Categories",
  "Consoles",
  "Games",
  "Accessories",
  "Subscriptions",
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Replace with actual API call:
        // const response = await fetch('https://api.example.com/products');
        // const data = await response.json();

        setProducts(mockProducts);
        setCategories(mockCategories);
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Implement cart functionality
  };

  const handleEdit = (productId) => {
    console.log(`Edit product ${productId}`);
    // Implement edit functionality
  };

  const handleDelete = (productId) => {
    console.log(`Delete product ${productId}`);
    // Implement delete functionality
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <div className="container py-4 px-4">
          {error && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {error}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {loading ? (
            <div className="py-5 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading products...</p>
            </div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
