import React from "react";

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-4 filter-section">
      <div className="row align-items-center">
        <div className="col-auto">
          <label htmlFor="categorySelect" className="mb-0 form-label fw-bold">
            Products
          </label>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-auto">
          <select
            id="categorySelect"
            className="form-select form-select-sm filter-dropdown"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
