import {
  fetchAccessories,
  fetchArmor,
  fetchItems,
  fetchKeyblades,
  fetchShields,
  fetchStaves,
} from "./apiHelpers";

// A basic search function (assumes you're searching by name)
export const searchCategory = async (productName) => {
  const allProducts = [
    ...(await fetchAccessories()),
    ...(await fetchArmor()),
    ...(await fetchItems()),
    ...(await fetchKeyblades()),
    ...(await fetchShields()),
    ...(await fetchStaves()),
  ];

  const result = allProducts.find((product) => product.name === productName);
  if (result) {
    return result;
  } else {
    // Handle the 'not found' case - you might throw an error
    return null;
  }
};
