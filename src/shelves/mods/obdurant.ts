export const obdurantState: Shelf = {
  id: "kat.obdurant.misc",
  name: "<sprite name=colours.liminal> Obdurant Main",
  rows: 2,
  columns: 3,
  $depends: ["2944178812"],
  category: "apostles",
  areas: [
    {
      expression: "[warzone.current]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 2,
      expression: "[main]",
      background: "hawthorn.vault_shelf",
    },
    {
      x: 3,
      expression: "[resolution]",
      background: "hawthorn.medal_shelf",
    },
    { y: 2, expression: "[provisions]", background: "hawthorn.feast_shelf" },
    {
      y: 2,
      x: 2,
      expression: "[obdurant.story]",
      background: "hawthorn.lore_edge_shelf",
    },
    {
      y: 2,
      x: 3,
      expression: "[strife]",
      background: "hawthorn.strife_shelf",
    },
  ],
  legacies: ["apostle.obdurant"],
};
export const obdurantAllies: Shelf = {
  id: "kat.obdurant.allies",
  name: "<sprite name=colours.liminal> Obdurant Allies",
  rows: 2,
  columns: 10,
  legacies: ["apostle.obdurant"],
  $depends: ["2944178812"],
  category: "apostles",
  areas: [
    {
      x: 1,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 2,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 3,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 4,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 5,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 6,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 7,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 8,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 9,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 10,
      expression: "[friend] && ![local]",
      background: "hawthorn.follower_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 4,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 5,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 6,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 7,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 8,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 9,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 10,
      y: 2,
      expression: "[friend] && [local]",
      background: "hawthorn.location_shelf",
    },
  ],
};
export const obdurantEnemies: Shelf = {
  id: "kat.obdurant.enemies",
  name: "<sprite name=colours.liminal> Obdurant Enemies",
  $depends: ["2944178812"],
  rows: 1,
  columns: 10,
  category: "apostles",
  areas: [
    {
      expression: "[foe] && ![foe.hidden]",
      x: 1,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 2,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 3,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 4,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 5,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 6,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 7,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 8,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 9,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe] && ![foe.hidden]",
      x: 10,
      background: "hawthorn.foe_shelf",
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 1,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 2,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 3,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 4,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 5,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 6,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 7,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 8,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 9,
    },
    {
      expression: "[foe.hidden]",
      y: 2,
      background: "hawthorn.question_shelf",
      x: 10,
    },
  ],
  legacies: ["apostle.obdurant"],
};
export const obdurantWeapons: Shelf = {
  id: "kat.obdurant.weapons",
  name: "<sprite name=colours.liminal> Obdurant Weapons",
  $depends: ["2944178812"],
  rows: 1,
  columns: 8,
  category: "apostles",
  areas: [
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 1,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 2,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 3,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 4,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 5,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 6,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 7,
      background: "hawthorn.weapon_shelf",
    },
    {
      expression: "[weapon] && ![defiance.consecrated.colonel]",
      x: 8,
      background: "hawthorn.weapon_shelf",
    },
  ],
  legacies: ["apostle.obdurant"],
};
export const obdurantTechniques: Shelf = {
  id: "kat.obdurant.occultweapons",
  name: "<sprite name=colours.liminal> Obdurant Techniques",
  $depends: ["2944178812"],
  rows: 1,
  columns: 8,
  category: "apostles",
  areas: [
    {
      expression: "[entity/obdurant.fragmentedge*]",
      background: "hawthorn.lore_edge_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 2,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 3,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 4,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 5,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 6,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 7,
      background: "hawthorn.technique_shelf",
    },
    {
      expression:
        "( [lore] && ![entity/obdurant.fragmentedge*] ) || ( [debilitation] && [defiance.consecration.colonel] )",
      x: 8,
      background: "hawthorn.technique_shelf",
    },
  ],
  legacies: ["apostle.obdurant"],
};
export const obdurantInfrastructure: Shelf = {
  id: "kat.obdurant.infrastructure",
  name: "<sprite name=colours.liminal> Obdurant Infrastructure",
  rows: 1,
  columns: 6,
  $depends: ["2944178812"],
  category: "apostles",
  areas: [
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 1,
      background: "hawthorn.infrastructure_shelf",
    },
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 2,
      background: "hawthorn.infrastructure_shelf",
    },
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 3,
      background: "hawthorn.infrastructure_shelf",
    },
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 4,
      background: "hawthorn.infrastructure_shelf",
    },
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 5,
      background: "hawthorn.infrastructure_shelf",
    },
    {
      expression: "[infrastructure] || [infrastructure.destroyed]",
      x: 6,
      background: "hawthorn.infrastructure_shelf",
    },
  ],
};
export const obdurantToolsAndIngs: Shelf = {
  id: "kat.obdurant.toolsandsuppliess",
  name: "<sprite name=colours.liminal> Obdurant Tools and Suppliess",
  legacies: ["apostle.obdurant"],
  $depends: ["2944178812"],
  rows: 2,
  columns: 5,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 2,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 3,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 4,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 5,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 6,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 7,
      y: 1,
      expression: "[tool] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 1,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 2,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 3,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 4,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 5,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 6,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 7,
      y: 2,
      expression:
        "[supplies] && ![provisions] && ![weapon] && ![defiance.consecrated.colonel]",
      background: "hawthorn.ing_shelf",
    },
  ],
  category: "apostles",
};
