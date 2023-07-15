export const waysThroughDream: Shelf = {
  name: "[KS] Ways Back Through Dream",
  id: "kat.mansus",
  category: "ways",
  columns: 2,
  rows: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[waywood]",
      background: "waywood_shelf",
    },
    { x: 2, y: 1, expression: "[waywhite]", background: "waywhite_shelf" },
    {
      x: 1,
      y: 2,
      expression:
        "[waystagbefore_1] || [waystagbefore_2] || [waystagbefore_3] || [waystagbefore_4] || [waystagbefore_5] || [waystag_after]",
      background: "waystag_shelf",
    },
    { x: 2, y: 2, expression: "[wayspider]", background: "wayspider_shelf" },

    { x: 1, y: 3, expression: "[waypeacock]", background: "waypeacock_shelf" },
    {
      x: 2,
      y: 3,
      expression:
        "[apostlelantern.pillar2] || [oracle.ability] || [oracle.ability.cooldown] || [oracle.ability.pre.cooldown]",
      background: "grief_shelf",
    },
  ],
};
