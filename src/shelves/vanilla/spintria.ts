export const spintria: Shelf = {
  category: "",
  id: "kat.spintria",
  name: "<sprite name=colours.liminal> Spintria",
  rows: 4,
  areas: [
    {
      id: "kat.spintria.gold",
      expression: "[compensationd]",
      background: "hawthorn.compensation_shelf",
    },
    {
      id: "kat.spintria.silver",
      y: 2,
      expression: "[compensationc]",
      background: "hawthorn.compensation_shelf",
    },
    {
      id: "kat.spintria.bronze",
      y: 3,
      expression: "[compensationb]",
      background: "hawthorn.compensation_shelf",
    },
    {
      id: "kat.spintria.iron",
      y: 4,
      expression: "[compensation]",
      background: "hawthorn.compensation_shelf",
    },
  ],
};
export const patrons: Shelf = {
  category: "",
  id: "kat.patrons",
  name: "<sprite name=colours.liminal> Patrons and Commisions [Compact]",
  rows: 4,
  columns: 3,
  $depends: ["2990223882"],
  areas: [
    {
      expression: "[aladim] || [aladimaway] || [aladimready]",
      background: "hawthorn.aladim_shelf",
    },
    {
      x: 2,
      expression: "[commission.aladim] ",
      background: "hawthorn.commission_shelf",
    },
    {
      x: 3,
      expression: "[compensationd]",
    },
    {
      y: 2,
      expression: "[bechet] || [bechetaway] || [bechetready]",
      background: "hawthorn.bechet_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[commission.bechet]",
      background: "hawthorn.commission_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[compensationc]",
    },
    {
      y: 3,
      expression: "[jannings] || [janningsaway] || [janningsready]",
      background: "hawthorn.jannings_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[commission.jannings]",
      background: "hawthorn.commission_shelf",
    },
    {
      x: 3,
      y: 3,
      expression: "[compensationb]",
    },
    {
      y: 4,

      expression:
        "[poppy] || [poppyaway] || [poppycommission] || [poppycommissionready] || [poppycommissionready]",
      background: "hawthorn.poppy_shelf",
    },
    {
      x: 2,
      y: 4,
      expression: "[commission.poppy]",
      background: "hawthorn.commission_shelf",
    },
    {
      x: 3,
      y: 4,
      expression: "[compensation]",
    },
  ],
};
