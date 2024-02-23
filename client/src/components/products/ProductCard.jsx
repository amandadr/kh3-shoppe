const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      {product.price > 0 && product.price !== undefined ? (
        <p>{product.price} munny</p>
      ) : product.synth === "N" || product.synthesis === "N" ? (
        <p>Unavailable</p>
      ) : (
        <p>Synthesize</p>
      )}
    </div>
  );
};

export default ProductCard;
