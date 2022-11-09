export const ssLore: Shelf = {
  id: "kat.skinstealer.lore",
  name: "[KS] Skinstealer Lore",
  category: "",
  rows: 1,
  columns: 9,
  areas: [
    {
      x: 1,
      expression: "[lore.secrethistories] || [lore.secrethistories.exhausted]",
    },
    { x: 2, expression: "[lore.knock] || [lore.knock.exhausted]" },
    { x: 3, expression: "[lore.lantern] || [lore.lantern.exhausted]" },
    { x: 4, expression: "[lore.forge] || [lore.forge.exhausted]" },
    { x: 5, expression: "[lore.edge] || [lore.edge.exhausted]" },
    { x: 6, expression: "[lore.winter] || [lore.winter.exhausted]" },
    { x: 7, expression: "[lore.heart] || [lore.heart.exhausted]" },
    { x: 8, expression: "[lore.grail] || [lore.grail.exhausted]" },
    { x: 9, expression: "[lore.moth] || [lore.moth.exhausted]" },
  ],
};
export const ssAbilities: Shelf = {
  id: "kat.skinstealer.abilities",
  name: "[KS] Skinstealer Abilities",
  rows: 3,
  columns: 4,
  areas: [
    {
      expression: "[healthmoth] && ![ingredient]",
    },
    {
      x: 2,
      expression: "[reasonmoth] && ![ingredient]",
    },
    {
      x: 3,
      expression: "[passionmoth] && ![ingredient]",
    },
    {
      x: 4,
      expression: "[funds]",
    },
    {
      y: 2,
      expression: "[health] && ![healthmoth]",
    },
    {
      x: 2,
      y: 2,
      expression: "[reason] && ![reasonmoth]",
    },
    {
      x: 3,
      y: 2,
      expression: "[passion] && ![passionmoth]",
    },
    {
      x: 4,
      y: 2,
      expression: "[job]",
    },
    {
      y: 3,
      expression: "[vigour]",
    },
    {
      x: 2,
      y: 3,
      expression: "[breakthrough]",
    },
    {
      x: 3,
      y: 3,
      expression: "[inspiration]",
    },
    {
      x: 4,
      y: 3,
      expression: "[desire]",
    },
  ],
};
