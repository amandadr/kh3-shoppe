import React from "react";

const categories = [
  "Items",
  "Accessories",
  "Armor",
  "Keyblades",
  "Shields",
  "Staves",
];

const ProductCategoryList = ({ selectedCategory, onCategoryChange }) => {
  return (
    <ul className="product-category-list">
      {categories.map((category) => (
        <li key={category}>
          <button
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductCategoryList;
