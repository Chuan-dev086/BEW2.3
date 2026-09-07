const Filter = ({ categories, selectedCategory, onCategoryChange, onAddNew }) => {
  return (
    <div className="mb-4 filter-section">
      <div className="d-flex mb-3 justify-content-between align-items-center">
        <h2 className="mb-0 mx-5 fw-bold h4">Products</h2>
        <button
          className="mx-3 btn btn-success btn-add-new fw-bold"
          onClick={onAddNew}
        >
          Add New
        </button>
      </div>

      <div>
        <select
          id="categorySelect"
          className="pe-4 form-select form-select-sm filter-dropdown"
          style={{ width: "auto", marginLeft:"36px" , minWidth:"150px"}}
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
  );
};

export default Filter;
