export const cult: Shelf = {
  category: "",
  id: "kat.cult",
  name: "<sprite name=colours.liminal> Cult",
  rows: 1,
  columns: 3,
  areas: [
    {
      x: 1,
      expression: "[society]",
      background: "society_shelf",
    },
    {
      x: 2,
      expression: "[hq]",
      background: "location_shelf",
    },
    {
      x: 3,
      expression: "[mentor]",
      background: "mentor_shelf",
    },
  ],
};
