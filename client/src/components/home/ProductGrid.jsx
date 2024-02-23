import React from "react";
import ProductCard from "../products/ProductCard";

import { useAccessories } from "../../hooks/useAccessories";
import { useArmor } from "../../hooks/useArmor";
import { useItems } from "../../hooks/useItems";
import { useKeyblades } from "../../hooks/useKeyblades";
import { useShields } from "../../hooks/useShields";
import { useStaves } from "../../hooks/useStaves";

const ProductGrid = ({ category }) => {
  const {
    isLoading: accessoriesLoading,
    error: accessoriesError,
    data: accessories,
  } = useAccessories();
  const {
    isLoading: armorLoading,
    error: armorError,
    data: armor,
  } = useArmor();
  const {
    isLoading: itemsLoading,
    error: itemsError,
    data: items,
  } = useItems();
  const {
    isLoading: keybladesLoading,
    error: keybladesError,
    data: keyblades,
  } = useKeyblades();
  const {
    isLoading: shieldsLoading,
    error: shieldsError,
    data: shields,
  } = useShields();
  const {
    isLoading: stavesLoading,
    error: stavesError,
    data: staves,
  } = useStaves();

  const isLoading =
    accessoriesLoading ||
    armorLoading ||
    itemsLoading ||
    keybladesLoading ||
    shieldsLoading ||
    stavesLoading;

  const error =
    accessoriesError ||
    armorError ||
    itemsError ||
    keybladesError ||
    shieldsError ||
    stavesError;

  let products = [];

  switch (category) {
    case "Accessories":
      products = accessories;
      break;
    case "Armor":
      products = armor;
      break;
    case "Items":
      products = items;
      break;
    case "Keyblades":
      products = keyblades;
      break;
    case "Shields":
      products = shields;
      break;
    case "Staves":
      products = staves;
      break;
    default:
      products = items;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
