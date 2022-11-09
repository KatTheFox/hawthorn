export const pigments: Shelf = {
  id: "kat.pigments",
  name: "[KS] Pigments",
  category: "ingredients",
  rows: 1,
  columns: 8,
  areas: [
    {
      x: 1,
      expression: "[pigment] && [knock]",
    },
    {
      x: 2,
      expression: "[pigment] && [lantern]",
    },
    {
      x: 3,
      expression: "[pigment] && [forge]",
    },
    {
      x: 4,
      expression: "[pigment] && [edge]",
    },
    {
      x: 5,
      expression: "[pigment] && [winter]",
    },
    {
      x: 6,
      expression: "[pigment] && [heart]",
    },
    {
      x: 7,
      expression: "[pigment] && [grail]",
    },
    {
      x: 8,
      expression: "[pigment] && [moth]",
    },
  ],
};
