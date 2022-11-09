export const locations: Shelf = {
  category: "",
  name: "[KS] Locations",
  id: "kat.locations",
  rows: 1,
  columns: 3,
  areas: [
    {
      id: "kat.oriflamme",
      expression: "[locationauctionhouse]",
    },
    {
      id: "kat.cabaret",
      x: 2,
      expression: "[locationcabaret] || [locationcabaretclosed]",
    },
    {
      id: "kat.morland",
      x: 3,
      expression: "[locationbookdealer] || [locationbookdealer_exhausted]",
    },
  ],
};
