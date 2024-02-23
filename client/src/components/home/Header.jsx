import React from "react";
import ProductCategoryList from "./ProductCategoryList";

const Header = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <header>
      <div className="container">
        <h1>Kingdom Hearts III Shoppe</h1>
        <ProductCategoryList
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </header>
  );
};

export default Header;
