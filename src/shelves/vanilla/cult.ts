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
      background: "hawthorn.society_shelf",
    },
    {
      x: 2,
      expression: "[hq]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 3,
      expression: "[mentor]",
      background: "hawthorn.mentor_shelf",
    },
  ],
};
