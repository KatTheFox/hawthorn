export const ssLore: Shelf = {
  id: "kat.skinstealer.lore",
  name: "<sprite name=colours.liminal> Skinstealer Lore",
  category: "",
  $depends: ["2792602803"],
  rows: 1,
  legacies: ["apostlemoth", "apostlemoth.frommenu", "apostlemothwithrisen"],
  columns: 9,
  areas: [
    {
      x: 1,
      expression: "[lore.secrethistories] || [lore.secrethistories.exhausted]",
      background: "hawthorn.lore_secrethistories_shelf",
    },
    {
      x: 2,
      expression: "[lore.knock] || [lore.knock.exhausted]",
      background: "hawthorn.lore_knock_shelf",
    },
    {
      x: 3,
      expression: "[lore.lantern] || [lore.lantern.exhausted]",
      background: "hawthorn.lore_lantern_shelf",
    },
    {
      x: 4,
      expression: "[lore.forge] || [lore.forge.exhausted]",
      background: "hawthorn.lore_forge_shelf",
    },
    {
      x: 5,
      expression: "[lore.edge] || [lore.edge.exhausted]",
      background: "hawthorn.lore_edge_shelf",
    },
    {
      x: 6,
      expression: "[lore.winter] || [lore.winter.exhausted]",
      background: "hawthorn.lore_winter_shelf",
    },
    {
      x: 7,
      expression: "[lore.heart] || [lore.heart.exhausted]",
      background: "hawthorn.lore_heart_shelf",
    },
    {
      x: 8,
      expression: "[lore.grail] || [lore.grail.exhausted]",
      background: "hawthorn.lore_grail_shelf",
    },
    {
      x: 9,
      expression: "[lore.moth] || [lore.moth.exhausted]",
      background: "hawthorn.lore_moth_shelf",
    },
  ],
};
export const ssStashes: Shelf = {
  id: "kat.skinstealer.stashes",
  legacies: ["apostlemoth", "apostlemoth.frommenu", "apostlemothwithrisen"],
  name: "<sprite name=colours.liminal> Skinstealer Hiding Places",
  rows: 1,
  columns: 15,
  $depends: ["2792602803"],
  areas: [
    {
      expression: "[stashlocation.empty]",
      x: 1,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 2,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 3,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 4,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 5,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 6,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 7,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 8,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 9,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 10,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 11,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 12,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 13,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 14,
      background: "hawthorn.nameless_shelf",
    },
    {
      expression: "[stashlocation.empty]",
      x: 15,
      background: "hawthorn.nameless_shelf",
    },
  ],
};
export const ssWays: Shelf = {
  id: "kat.skinstealer.ways",
  legacies: ["apostlemoth", "apostlemoth.frommenu", "apostlemothwithrisen"],
  $depends: ["2792602803"],
  name: "<sprite name=colours.liminal> Skinstealer Ways Back Through Dream",
  rows: 3,
  columns: 2,
  areas: [
    { expression: "[moth.way.wooddoor]", background: "hawthorn.way_shelf" },
    { x: 2, expression: "[moth.way.well]", background: "hawthorn.way_shelf" },
    {
      y: 2,
      expression: "[moth.way.templewheel]",
      background: "hawthorn.way_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[moth.way.woodwound]",
      background: "hawthorn.way_shelf",
    },
    {
      y: 3,
      expression: "[moth.way.ruinedhive]",
      background: "hawthorn.way_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[moth.medusa] || [moth.medusa.exhausted]",
      background: "hawthorn.medusa_shelf",
    },
  ],
};
export const ssAbilities: Shelf = {
  legacies: ["apostlemoth", "apostlemoth.frommenu", "apostlemothwithrisen"],
  id: "kat.skinstealer.abilities",
  name: "<sprite name=colours.liminal> Skinstealer Abilities",
  rows: 4,
  columns: 4,
  $depends: ["2792602803"],
  areas: [
    {
      expression: "([healthmoth] || [fatigue.moth]) && ![ingredient]",
      background: "hawthorn.health_shelf",
    },
    {
      x: 2,
      expression: "([reasonmoth] || [concentration.moth]) && ![ingredient]",
      background: "hawthorn.reason_shelf",
    },
    {
      x: 3,
      expression: "([passionmoth] ||[passionexhausted.moth]) && ![ingredient]",
      background: "hawthorn.passion_shelf",
    },
    {
      x: 4,
      expression: "[funds]",
      background: "hawthorn.funds_shelf",
    },
    {
      y: 2,
      expression:
        "([health] || [fatigue] ) && ![healthmoth] && ![fatigue.moth]",
      background: "hawthorn.health_shelf",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([reason] || [concentration] ) && ![reasonmoth] && ![concentration.moth]",
      background: "hawthorn.reason_shelf",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([passion] || [disillusionment] || [passionexhausted] ) && ![passionmoth] && ![passionexhausted.moth]",
      background: "hawthorn.passion_shelf",
    },
    {
      x: 4,
      y: 2,
      expression: "[job]",
      background: "hawthorn.job_shelf",
    },
    {
      y: 3,
      expression: "[vigour]",
      background: "hawthorn.health_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[breakthrough]",
      background: "hawthorn.reason_shelf",
    },
    {
      x: 3,
      y: 3,
      expression: "[inspiration]",
      background: "hawthorn.passion_shelf",
    },
    {
      x: 4,
      y: 3,
      expression: "[desire]",
      background: "hawthorn.desire_shelf",
    },
    {
      x: 1,
      y: 4,
      expression: "[currentid]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 2,
      y: 4,
      expression: "[uqyearnings] || [yearning.revealed] || [uqfalseyearnings]",
      background: "hawthorn.choice_shelf",
    },
    {
      x: 3,
      y: 4,
      expression: "[property]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 4,
      y: 4,
      expression: "[romanticinterest]",
      background: "hawthorn.romance_shelf",
    },
  ],
};
export const ssRituls: Shelf = {
  legacies: ["apostlemoth", "apostlemoth.frommenu", "apostlemothwithrisen"],
  name: "<sprite name=colours.liminal> Skinstealer Rituals",
  id: "kat.ss.rites",
  $depends: ["2792602803"],
  rows: 1,
  columns: 5,
  areas: [
    { expression: "[rite.exitingants]", background: "hawthorn.ritual_shelf" },
    {
      x: 2,
      expression: "[rite.floodedflint]",
      background: "hawthorn.ritual_shelf",
    },
    {
      x: 3,
      expression: "[rite.dancegreycat]",
      background: "hawthorn.ritual_shelf",
    },
    {
      x: 4,
      expression: "[rite.musicianssacrifice]",
      background: "hawthorn.ritual_shelf",
    },
    {
      x: 5,
      expression: "[rite.honeyshunger]",
      background: "hawthorn.ritual_shelf",
    },
  ],
};
