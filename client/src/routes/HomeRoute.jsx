import "../styles/Home.scss";
import React, { useState } from "react";
import ProductGrid from "../components/home/ProductGrid";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductCategoryList from "../components/home/ProductCategoryList";

const HomeRoute = () => {
  const [selectedCategory, setSelectedCategory] = useState("Items");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div>
      <Header />
      <FeaturedProducts />
      <div className="products">
        <ProductCategoryList
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ProductGrid category={selectedCategory} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeRoute;
