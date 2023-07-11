export const pigments: Shelf = {
  id: "kat.pigments",
  name: "[KS] Pigments",
  category: "ingredients",
  rows: 1,
  columns: 8,
  areas: [
    {
      x: 1,
      background: "pigment_shelf",
      expression: "[pigment] && [knock]",
    },
    {
      x: 2,
      background: "pigment_shelf",
      expression: "[pigment] && [lantern]",
    },
    {
      x: 3,
      background: "pigment_shelf",
      expression: "[pigment] && [forge]",
    },
    {
      x: 4,
      background: "pigment_shelf",
      expression: "[pigment] && [edge]",
    },
    {
      x: 5,
      background: "pigment_shelf",
      expression: "[pigment] && [winter]",
    },
    {
      x: 6,
      background: "pigment_shelf",
      expression: "[pigment] && [heart]",
    },
    {
      x: 7,
      background: "pigment_shelf",
      expression: "[pigment] && [grail]",
    },
    {
      x: 8,
      background: "pigment_shelf",
      expression: "[pigment] && [moth]",
    },
  ],
};
