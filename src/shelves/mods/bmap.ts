export const bmapWincons: Shelf = {
  name: "<sprite name=colours.liminal> BMap Exile Essentials",
  id: "kat.bmap.wincons",
  category: "exile",
  rows: 2,
  $depends: ["2258368192"],
  priority: 3,
  columns: 6,
  areas: [
    {
      expression: "[temptation.defiance]",
      background: "desire_shelf",
    },
    {
      x: 2,
      expression:
        "[rkx.weakness.horned.hidden] || [rkx.weakness.flowermaker.hidden] || [rkx.weakness.wolf.hidden] || [rkx.weakness.horned] || [rkx.weakness.flowermaker] || [rkx.weakness.wolf]",
      background: "motherofants_shelf",
    },

    {
      x: 3,
      expression:
        "[rkx.weakness.heat.hidden] || [rkx.weakness.cold.hidden] || [rkx.weakness.sea.hidden] || [rkx.weakness.sea] || [rkx.weakness.heat] || [rkx.weakness.cold]",
      background: "motherofants_shelf",
    },
    {
      x: 4,
      expression:
        "[rkx.weakness.faith.hidden] || [rkx.weakness.heights.hidden] || [rkx.weakness.cats.hidden] || [rkx.weakness.faith] || [rkx.weakness.heights] || [rkx.weakness.cats]",
      background: "motherofants_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "temptation.obscurity",
      background: "desire_shelf",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.horned] && [op.horned]) || ([~/[world,threshold,output]+:rkx.weakness.flowermaker] && [op.flowermaker]) || ([~/[world,threshold,output]+:rkx.weakness.wolf] && [op.wolf]) ",
      background: "motherofants_shelf",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.heat] && [op.heat]) || ([~/[world,threshold,output]+:rkx.weakness.cold] && [op.cold]) || ([~/[world,threshold,output]+:rkx.weakness.sea] && [op.sea]) ",
      background: "motherofants_shelf",
    },
    {
      x: 4,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.faith] && [op.faith]) || ([~/[world,threshold,output]+:rkx.weakness.heights] && [op.heights]) || ([~/[world,threshold,output]+:rkx.weakness.cats] && [op.cats]) ",
      background: "motherofants_shelf",
    },
    { x: 5, y: 2, expression: "[domicile]", background: "location_shelf" },
    { x: 5, y: 1, expression: "[cash]", background: "funds_shelf" },
    { x: 6, y: 1, expression: "[contact.local]", background: "location_shelf" },
    { x: 6, y: 2, expression: "[vault]", background: "vault_shelf" },
  ],
};
export const bmapMisc: Shelf = {
  name: "<sprite name=colours.liminal> BMap Misc",
  id: "kat.bmap.misc",
  category: "exile",
  rows: 1,
  $depends: ["2258368192"],
  columns: 2,
  areas: [
    { expression: "[tallylore]", background: "lore_madrugad_shelf" },
    { x: 2, expression: "[tool.betrayersmap]", background: "bmap_shelf" },
  ],
};
export const bmapWeapons: Shelf = {
  name: "<sprite name=colours.liminal> BMap Weapons",
  id: "kat.bmap.weapons",
  category: "exile",

  rows: 1,
  $depends: ["2258368192"],
  areas: [
    { expression: "[lore] && [edge]", background: "lore_edge_shelf" },
    {
      expression: "[weapon.a] || [weapon.a.exhausted]",
      background: "tool_shelf",
      x: 2,
    },
    {
      x: 3,
      expression:
        "[weapon.b] || [weapon.b.2] || [weapon.b.1] || [weapon.b.2.exhausted] || [weapon.b.1.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 4,
      expression: "[weapon.c] || [weapon.c.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 5,
      expression: "[weapon.d] || [weapon.d.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 6,
      expression: "[weapon.e] || [weapon.e.exhauasted]",
      background: "tool_shelf",
    },
    {
      x: 7,
      expression: "[weapon.f.lionsmith] || [weapon.f.colonel]",
      background: "tool_shelf",
    },
    {
      x: 8,
      expression:
        "[weapon.c3] || [weapon.c3.exhausted] || [weapon.c3.exhausted.woundspresent] ",
      background: "tool_shelf",
    },
    {
      x: 9,
      expression: "[weapon.c2] || [weapon.c2.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 10,
      expression: "[weapon.d2] || [weapon.d2.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 11,
      expression: "[weapon.d3] || [weapon.d3.exhausted]",
      background: "tool_shelf",
    },
    {
      x: 12,
      expression: "[weapon.e2] || [weapon.e2.exhausted]",
      background: "tool_shelf",
    },
  ],
};
