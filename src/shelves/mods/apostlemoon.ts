export const apostleMoon: Shelf = {
  id: "kat.apostlemoon",
  name: "<sprite name=colours.liminal> Apostle Moon",
  $depends: ["2995921343"],
  rows: 3,
  columns: 3,
  priority: 4,
  areas: [
    {
      x: 1,
      background: "coldfire_shelf",
      expression:
        "[apostlemoon.coldfire] || ([influence] && [winter] && [winter]=[~/tabletop:{[influence]}:aspectmax/winter] )",
    },
    {
      x: 2,
      background: "keyholder_shelf",
      expression: "[apostlemoon.spirit.keyholder] ",
    },
    {
      x: 3,
      background: "mercury_shelf",
      expression: "[apostlemoon.tool.mask] || [apostlemoon.flowing.silver]",
    },
    {
      x: 1,
      y: 2,
      background: "key_shelf",
      expression: "[apostlemoon.burning.key] || [apostlemoon.burning.key.idea]",
    },
    {
      x: 2,
      y: 2,
      background: "soul_shelf",
      expression: "[apostlemoon.prepared.soul]",
    },
    {
      x: 3,
      y: 2,
      background: "morgen_shelf",
      expression:
        "[apostlemoon.morgen.enroute] || [apostlemoon.morgen] || [apostlemoon.morgen.promise]",
    },
    {
      x: 1,
      y: 3,
      background: "ing_shelf",
      expression: "[toolforgeb] || [apostlemoon.mercury.cinnabar]",
    },
    {
      x: 2,
      y: 3,
      background: "ing_shelf",
      expression: "[apostlemoon.mercury.xanthotic] || [ingredientforged]",
    },
    {
      x: 3,
      y: 3,
      background: "ing_shelf",
      expression: "[apostlemoon.mercury.glassfinger] || [ingredientlanternd]",
    },
  ],
  category: "apostles",
};
export const soulementsShelf: Shelf = {
  id: "kat.soulements",
  name: "<sprite name=colours.liminal> Apostle Moon Soul Elements",
  $depends: ["2995921343"],
  rows: 3,
  columns: 3,
  areas: [
    {
      background: "ability_shelf",
      expression: "[s.body]",
    },
    {
      y: 2,
      background: "ability_shelf",
      expression: "[s.chor]",
    },
    {
      y: 3,
      background: "ability_shelf",
      expression: "[s.wist]",
    },
    {
      x: 2,
      background: "ability_shelf",
      expression: "[s.phost]",
    },
    {
      x: 2,
      y: 2,
      background: "ability_shelf",
      expression: "[s.mettle]",
    },
    {
      x: 2,
      y: 3,
      background: "ability_shelf",
      expression: "[s.shapt]",
    },
    {
      x: 3,
      background: "ability_shelf",
      expression: "[s.ereb]",
    },
    {
      x: 3,
      y: 2,
      background: "ability_shelf",
      expression: "[s.trist]",
    },
    {
      x: 3,
      y: 3,
      background: "ability_shelf",
      expression: "[s.fet]",
    },
  ],
  category: "apostles",
};
