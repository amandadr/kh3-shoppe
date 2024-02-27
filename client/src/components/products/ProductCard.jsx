import "../../styles/Featured.scss";

const ProductCard = ({ product, classPass }) => {
  return (
    <div className={`product-card ${classPass}`}>
      <div className="product-card__name">{product.name}</div>
      {product.price > 0 && product.price !== undefined ? (
        <div className="product-card__details">
          <div className="product-card__price">{product.price}</div>
          <div className="product-card__munny">Munny</div>
        </div>
      ) : product.synth === "N" || product.synthesis === "N" ? (
        <div className="product-card__details unavailable">Unavailable</div>
      ) : (
        <div className="product-card__details synthesize">Synthesize</div>
      )}
    </div>
  );
};

export default ProductCard;
