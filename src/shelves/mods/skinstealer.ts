export const ssLore: Shelf = {
  id: "kat.skinstealer.lore",
  name: "[KS] Skinstealer Lore",
  category: "",
  $depends: ["2792602803"],
  rows: 1,
  columns: 9,
  areas: [
    {
      x: 1,
      expression: "[lore.secrethistories] || [lore.secrethistories.exhausted]",
    },
    { x: 2, expression: "[lore.knock] || [lore.knock.exhausted]" },
    { x: 3, expression: "[lore.lantern] || [lore.lantern.exhausted]" },
    { x: 4, expression: "[lore.forge] || [lore.forge.exhausted]" },
    { x: 5, expression: "[lore.edge] || [lore.edge.exhausted]" },
    { x: 6, expression: "[lore.winter] || [lore.winter.exhausted]" },
    { x: 7, expression: "[lore.heart] || [lore.heart.exhausted]" },
    { x: 8, expression: "[lore.grail] || [lore.grail.exhausted]" },
    { x: 9, expression: "[lore.moth] || [lore.moth.exhausted]" },
  ],
};
export const ssStashes: Shelf = {
  id: "kat.skinstealer.stashes",
  name: "[KS] Skinstealer Hiding Places",
  rows: 1,
  columns: 15,
  $depends: ["2792602803"],
  areas: [{ expression: "[stashlocation.empty]", columns: 15 }],
};
export const ssWays: Shelf = {
  id: "kat.skinstealer.ways",
  $depends: ["2792602803"],
  name: "[KS] Skinstealer Ways Back Through Dream",
  rows: 3,
  columns: 2,
  areas: [
    { expression: "[moth.way.wooddoor]" },
    { x: 2, expression: "[moth.way.well]" },
    { y: 2, expression: "[moth.way.templewheel]" },
    { x: 2, y: 2, expression: "[moth.way.woodwound]" },
    { y: 3, expression: "[moth.way.ruinedhive]" },
    { x: 2, y: 3, expression: "[moth.medusa] || [moth.medusa.exhausted]" },
  ],
};
export const ssAbilities: Shelf = {
  id: "kat.skinstealer.abilities",
  name: "[KS] Skinstealer Abilities",
  rows: 4,
  columns: 4,
  $depends: ["2792602803"],
  areas: [
    {
      expression: "([healthmoth] || [fatigue.moth]) && ![ingredient]",
    },
    {
      x: 2,
      expression: "([reasonmoth] || [concentration.moth]) && ![ingredient]",
    },
    {
      x: 3,
      expression: "([passionmoth] ||[passionexhausted.moth]) && ![ingredient]",
    },
    {
      x: 4,
      expression: "[funds]",
    },
    {
      y: 2,
      expression:
        "([health] || [fatigue] ) && ![healthmoth] && ![fatigue.moth]",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([reason] || [concentration] ) && ![reasonmoth] && ![concentration.moth]",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([passion] || [disillusionment] || [passionexhausted] ) && ![passionmoth] && ![passionexhausted.moth]",
    },
    {
      x: 4,
      y: 2,
      expression: "[job]",
    },
    {
      y: 3,
      expression: "[vigour]",
    },
    {
      x: 2,
      y: 3,
      expression: "[breakthrough]",
    },
    {
      x: 3,
      y: 3,
      expression: "[inspiration]",
    },
    {
      x: 4,
      y: 3,
      expression: "[desire]",
    },
    {
      x: 1,
      y: 4,
      expression: "[currentid]",
    },
    {
      x: 2,
      y: 4,
      expression: "[uqyearnings] || [yearning.revealed] || [uqfalseyearnings]",
    },
    {
      x: 3,
      y: 4,
      expression: "[property]",
    },
    {
      x: 4,
      y: 4,
      expression: "[romanticinterest]",
    },
  ],
};
export const ssRituls: Shelf = {
  name: "[KS] Skinstealer Rituals",
  id: "kat.ss.rites",
  $depends: ["2792602803"],
  rows: 1,
  columns: 5,
  areas: [
    { expression: "[rite.exitingants]" },
    { x: 2, expression: "[rite.floodedflint]" },
    { x: 3, expression: "[rite.dancegreycat]" },
    { x: 4, expression: "[rite.musicianssacrifice]" },
    { x: 5, expression: "[rite.honeyshunger]" },
  ],
};
