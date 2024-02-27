import "../../styles/Home.scss";
import React from "react";
import ProductCard from "../products/ProductCard";

import { useAccessories } from "../../hooks/useAccessories";
import { useArmor } from "../../hooks/useArmor";
import { useItems } from "../../hooks/useItems";
import { useKeyblades } from "../../hooks/useKeyblades";
import { useShields } from "../../hooks/useShields";
import { useStaves } from "../../hooks/useStaves";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

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
    <Box className="product-grid-container">
      <div className="product-grid__title">|| {category}</div>
      <Grid
        container
        className="product-grid"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product) => (
          <Grid xs={5} className="product-grid__item">
            <ProductCard
              key={product.id}
              product={product}
              classPass={"product-card__grid"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
