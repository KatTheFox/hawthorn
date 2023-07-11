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
      background: "lore_secrethistories_shelf",
    },
    {
      x: 2,
      expression: "[lore.knock] || [lore.knock.exhausted]",
      background: "lore_knock_shelf",
    },
    {
      x: 3,
      expression: "[lore.lantern] || [lore.lantern.exhausted]",
      background: "lore_lantern_shelf",
    },
    {
      x: 4,
      expression: "[lore.forge] || [lore.forge.exhausted]",
      background: "lore_forge_shelf",
    },
    {
      x: 5,
      expression: "[lore.edge] || [lore.edge.exhausted]",
      background: "lore_edge_shelf",
    },
    {
      x: 6,
      expression: "[lore.winter] || [lore.winter.exhausted]",
      background: "lore_winter_shelf",
    },
    {
      x: 7,
      expression: "[lore.heart] || [lore.heart.exhausted]",
      background: "lore_heart_shelf",
    },
    {
      x: 8,
      expression: "[lore.grail] || [lore.grail.exhausted]",
      background: "lore_grail_shelf",
    },
    {
      x: 9,
      expression: "[lore.moth] || [lore.moth.exhausted]",
      background: "lore_moth_shelf",
    },
  ],
};
export const ssStashes: Shelf = {
  id: "kat.skinstealer.stashes",
  name: "[KS] Skinstealer Hiding Places",
  rows: 1,
  columns: 15,
  $depends: ["2792602803"],
  areas: [
    { expression: "[stashlocation.empty]", x: 1, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 2, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 3, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 4, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 5, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 6, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 7, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 8, background: "nameless_shelf" },
    { expression: "[stashlocation.empty]", x: 9, background: "nameless_shelf" },
    {
      expression: "[stashlocation.empty]",
      x: 10,
      background: "nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 11,
      background: "nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 12,
      background: "nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 13,
      background: "nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 14,
      background: "nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 15,
      background: "nameless_shelf",
    },
  ],
};
export const ssWays: Shelf = {
  id: "kat.skinstealer.ways",
  $depends: ["2792602803"],
  name: "[KS] Skinstealer Ways Back Through Dream",
  rows: 3,
  columns: 2,
  areas: [
    { expression: "[moth.way.wooddoor]", background: "way_shelf" },
    { x: 2, expression: "[moth.way.well]", background: "way_shelf" },
    {
      y: 2,
      expression: "[moth.way.templewheel]",
      background: "way_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[moth.way.woodwound]",
      background: "way_shelf",
    },
    { y: 3, expression: "[moth.way.ruinedhive]", background: "way_shelf" },
    {
      x: 2,
      y: 3,
      expression: "[moth.medusa] || [moth.medusa.exhausted]",
      background: "medusa_shelf",
    },
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
      background: "health_shelf",
    },
    {
      x: 2,
      expression: "([reasonmoth] || [concentration.moth]) && ![ingredient]",
      background: "reason_shelf",
    },
    {
      x: 3,
      expression: "([passionmoth] ||[passionexhausted.moth]) && ![ingredient]",
      background: "passion_shelf",
    },
    {
      x: 4,
      expression: "[funds]",
      background: "funds_shelf",
    },
    {
      y: 2,
      expression:
        "([health] || [fatigue] ) && ![healthmoth] && ![fatigue.moth]",
      background: "health_shelf",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([reason] || [concentration] ) && ![reasonmoth] && ![concentration.moth]",
      background: "reason_shelf",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([passion] || [disillusionment] || [passionexhausted] ) && ![passionmoth] && ![passionexhausted.moth]",
      background: "passion_shelf",
    },
    {
      x: 4,
      y: 2,
      expression: "[job]",
      background: "job_shelf",
    },
    {
      y: 3,
      expression: "[vigour]",
      background: "health_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[breakthrough]",
      background: "reason_shelf",
    },
    {
      x: 3,
      y: 3,
      expression: "[inspiration]",
      background: "passion_shelf",
    },
    {
      x: 4,
      y: 3,
      expression: "[desire]",
      background: "desire_shelf",
    },
    {
      x: 1,
      y: 4,
      expression: "[currentid]",
      background: "id_shelf",
    },
    {
      x: 2,
      y: 4,
      expression: "[uqyearnings] || [yearning.revealed] || [uqfalseyearnings]",
      background: "choice_shelf",
    },
    {
      x: 3,
      y: 4,
      expression: "[property]",
      background: "location_shelf",
    },
    {
      x: 4,
      y: 4,
      expression: "[romanticinterest]",
      background: "romance_shelf",
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
    { expression: "[rite.exitingants]", background: "ritual_shelf" },
    { x: 2, expression: "[rite.floodedflint]", background: "ritual_shelf" },
    { x: 3, expression: "[rite.dancegreycat]", background: "ritual_shelf" },
    {
      x: 4,
      expression: "[rite.musicianssacrifice]",
      background: "ritual_shelf",
    },
    { x: 5, expression: "[rite.honeyshunger]", background: "ritual_shelf" },
  ],
};
