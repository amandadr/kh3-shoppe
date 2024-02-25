import "../../styles/Featured.scss";
import React, { useEffect, useState } from "react";
import { searchCategory } from "../../helpers/searchProducts";
import ProductCard from "../products/ProductCard";

import Carousel from "react-material-ui-carousel";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeaturedProducts = async () => {
    try {
      setIsLoading(true);
      const results = await Promise.all([
        searchCategory("Sorcerer's Ring"),
        searchCategory("Storm Anchor"),
        searchCategory("Fire Bangle"),
      ]);
      setFeaturedProducts(results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  if (isLoading) return <div>Loading featured products...</div>;
  if (error) return <div>Error: {error.message} </div>;

  return (
    <section className="featured-products">
      <h2>Mog's Picks:</h2>
      <Carousel className="featured-products-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;
