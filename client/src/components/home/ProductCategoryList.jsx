import React from "react";

import { Stack, Paper, Button } from "@mui/material";

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
    <Stack className="product-category-list" spacing={2}>
      {categories.map((category) => (
        <Paper key={category} className="product-category-list__item">
          <Button
            variant="text"
            onClick={() => onCategoryChange(category)}
            className={
              selectedCategory === category
                ? "product-category__active"
                : "product-category__inactive"
            }
          >
            {category}
          </Button>
        </Paper>
      ))}
    </Stack>
  );
};

export default ProductCategoryList;
