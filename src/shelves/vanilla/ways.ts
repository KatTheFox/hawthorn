export const waysThroughDream: Shelf = {
  name: "<sprite name=colours.liminal> Ways Back Through Dream",
  id: "kat.mansus",
  category: "ways",
  columns: 2,
  rows: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[waywood]",
      background: "hawthorn.waywood_shelf",
    },
    {
      x: 2,
      y: 1,
      expression: "[waywhite]",
      background: "hawthorn.waywhite_shelf",
    },
    {
      x: 1,
      y: 2,
      expression:
        "[waystagbefore_1] || [waystagbefore_2] || [waystagbefore_3] || [waystagbefore_4] || [waystagbefore_5] || [waystag_after]",
      background: "hawthorn.waystag_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[wayspider]",
      background: "hawthorn.wayspider_shelf",
    },

    {
      x: 1,
      y: 3,
      expression: "[waypeacock]",
      background: "hawthorn.waypeacock_shelf",
    },
    {
      x: 2,
      y: 3,
      expression:
        "[apostlelantern.pillar2] || [oracle.ability] || [oracle.ability.cooldown] || [oracle.ability.pre.cooldown]",
      background: "hawthorn.grief_shelf",
    },
  ],
};
