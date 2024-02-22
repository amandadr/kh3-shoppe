import React from "react";
import { useAccessories } from "../hooks/useAccessories";
import { useArmor } from "../hooks/useArmor";
import { useItems } from "../hooks/useItems";
import { useKeyblades } from "../hooks/useKeyblades";
import { useShields } from "../hooks/useShields";
import { useStaves } from "../hooks/useStaves";

const HomeRoute = () => {
  const { isLoading: accessoriesLoading, data: accessories } = useAccessories();
  const { isLoading: armorLoading, data: armor } = useArmor();
  const { isLoading: itemsLoading, data: items } = useItems();
  const { isLoading: keybladesLoading, data: keyblades } = useKeyblades();
  const { isLoading: shieldsLoading, data: shields } = useShields();
  const { isLoading: stavesLoading, data: staves } = useStaves();

  const isLoading =
    accessoriesLoading ||
    armorLoading ||
    itemsLoading ||
    keybladesLoading ||
    shieldsLoading ||
    stavesLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Kingdom Hearts Shop</h1>
      <h2>Accessories</h2>
      <ul>
        {accessories &&
          accessories.map((accessory) => (
            <li key={accessory.id}>{accessory.name}</li>
          ))}
      </ul>
      <h2>Armor</h2>
      <ul>
        {armor.map((armor) => (
          <li key={armor.id}>{armor.name}</li>
        ))}
      </ul>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h2>Keyblades</h2>
      <ul>
        {keyblades.map((keyblade) => (
          <li key={keyblade.id}>{keyblade.name}</li>
        ))}
      </ul>
      <h2>Shields</h2>
      <ul>
        {shields.map((shield) => (
          <li key={shield.id}>{shield.name}</li>
        ))}
      </ul>
      <h2>Staves</h2>
      <ul>
        {staves.map((staff) => (
          <li key={staff.id}>{staff.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeRoute;
