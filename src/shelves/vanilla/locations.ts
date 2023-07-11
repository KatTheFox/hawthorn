export const locations: Shelf = {
  category: "",
  name: "[KS] Locations",
  id: "kat.locations",
  rows: 1,
  columns: 3,
  areas: [
    {
      id: "kat.oriflamme",
      background: "location_shelf",
      expression: "[locationauctionhouse]",
    },
    {
      id: "kat.cabaret",
      x: 2,
      background: "location_shelf",
      expression: "[locationcabaret] || [locationcabaretclosed]",
    },
    {
      id: "kat.morland",
      x: 3,
      background: "location_shelf",
      expression: "[locationbookdealer] || [locationbookdealer_exhausted]",
    },
  ],
};
