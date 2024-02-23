import React, { useState } from "react";
import ProductGrid from "../components/home/ProductGrid";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import FeaturedProducts from "../components/home/FeaturedProducts";

const HomeRoute = () => {
  const [selectedCategory, setSelectedCategory] = useState("Items");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div>
      <Header
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <FeaturedProducts />
      <ProductGrid category={selectedCategory} />
      <Footer />
    </div>
  );
};

export default HomeRoute;
