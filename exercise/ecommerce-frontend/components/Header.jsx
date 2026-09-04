import React from "react";

const Header = () => {
  return (
    <header className="header-section">
      <div className="container-fluid py-4 px-4">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="mb-0 header-title">Welcome to My Store</h1>
          </div>
          <div className="col-auto">
            <button className="btn btn-success btn-sm btn-add-new">
              + Add New
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
