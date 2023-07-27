export const exileWeapons: Shelf = {
  id: "kat.exile.weapons",
  category: "exile",
  name: "<sprite name=colours.liminal> Weapons",
  priority: 4,
  rows: 1,
  columns: 7,
  areas: [
    { expression: "[lore] && [edge]", background: "hawthorn.lore_edge_shelf" },
    {
      expression: "[weapon.a] || [weapon.a.exhausted]",
      background: "hawthorn.tool_shelf",
      x: 2,
    },
    {
      x: 3,
      expression:
        "[weapon.b] || [weapon.b.2] || [weapon.b.1] || [weapon.b.2.exhausted] || [weapon.b.1.exhausted]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 4,
      expression: "[weapon.c] || [weapon.c.exhausted]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 5,
      expression: "[weapon.d] || [weapon.d.exhausted]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 6,
      expression: "[weapon.e] || [weapon.e.exhauasted]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 7,
      expression: "[weapon.f.lionsmith] || [weapon.f.colonel]",
      background: "hawthorn.tool_shelf",
    },
  ],
};
export const exileAssets: Shelf = {
  id: "kat.exile.assets",
  category: "exile",
  name: "<sprite name=colours.liminal> Assets",
  rows: 1,
  columns: 8,
  areas: [
    {
      x: 1,
      expression:
        "[asset] && ![weapon] && ([knock]>0) && [knock]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/knock]",
      background: "hawthorn.lore_knock_shelf",
    },
    {
      x: 2,
      expression:
        "[asset] && ![weapon] && ([lantern]>0) && [lantern]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/lantern]",
      background: "hawthorn.lore_lantern_shelf",
    },
    {
      x: 3,
      expression:
        "[asset] && ![weapon] && ([forge]>0) && [forge]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/forge]",
      background: "hawthorn.lore_forge_shelf",
    },
    {
      x: 4,
      expression:
        "[asset] && ![weapon] && ([edge]>0) && [edge]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/edge]",
      background: "hawthorn.lore_edge_shelf",
    },
    {
      x: 5,
      expression:
        "[asset] && ![weapon] && ([winter]>0) && [winter]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/winter]",
      background: "hawthorn.lore_winter_shelf",
    },
    {
      x: 6,
      expression:
        "[asset] && ![weapon] && ([heart]>0) && [heart]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/heart]",
      background: "hawthorn.lore_heart_shelf",
    },
    {
      x: 7,
      expression:
        "[asset] && ![weapon] && ([grail]>0) && [grail]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/grail]",
      background: "hawthorn.lore_grail_shelf",
    },
    {
      x: 8,
      expression:
        "[asset] && ![weapon] && ([moth]>0) && [moth]=[~/[world,threshold,output]+:{[asset] && ![cash] && ![weapon]}:aspectmax/moth]",
      background: "hawthorn.lore_moth_shelf",
    },
  ],
};
export const exileYearsAndTraces: Shelf = {
  id: "kat.exile.years",
  category: "exile",
  name: "<sprite name=colours.liminal> Years and Traces",
  rows: 1,
  columns: 3,
  areas: [
    {
      expression: "[decade.stolen]",
      background: "hawthorn.decade_shelf",
    },
    {
      x: 2,
      expression: "[year.stolen]",
      background: "hawthorn.year_shelf",
    },
    {
      x: 3,
      expression: "[trace]",
      background: "hawthorn.trace_shelf",
    },
  ],
};
export const exileAllies: Shelf = {
  name: "<sprite name=colours.liminal> Allies",
  id: "kat.exile.allies",
  category: "exile",
  rows: 1,
  columns: 8,
  areas: [
    {
      expression:
        "[contact.smuggler] || [contact.smuggler.fatigued] || [ally.smuggler] || [ally.smuggler.fatigued]",
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.visionary] || [contact.visionary.fatigued] || [ally.visionary] || [ally.visionary.fatigued]",
      x: 2,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.delver] || [contact.delver.fatigued] || [ally.delver] || [ally.delver.fatigued]",
      x: 3,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.huntress] || [contact.huntress.fatigued] || [ally.huntress] || [ally.huntress.fatigued]",
      x: 4,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.ghoul] || [contact.ghoul.fatigued] || [ally.ghoul] || [ally.ghoul.fatigued]",
      x: 5,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.vivisectionist] || [contact.vivisectionist.fatigued] || [ally.vivisectionist] || [ally.vivisectionist.fatigued]",
      x: 6,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.fivegoer] || [contact.fivegoer.fatigued] || [ally.fivegoer] || [ally.fivegoer.fatigued]",
      x: 7,
      background: "hawthorn.follower_shelf",
    },
    {
      expression:
        "[contact.barber] || [contact.barber.fatigued] || [ally.barber] || [ally.barber.fatigued]",
      x: 8,
      background: "hawthorn.follower_shelf",
    },
  ],
};
export const exileWincons: Shelf = {
  name: "<sprite name=colours.liminal> Exile Essentials",
  id: "kat.exile.wincons",
  category: "exile",
  rows: 2,
  columns: 6,
  priority: 3,
  areas: [
    {
      expression: "[temptation.defiance]",
      background: "hawthorn.desire_shelf",
    },
    {
      x: 2,
      expression:
        "[rkx.weakness.horned.hidden] || [rkx.weakness.flowermaker.hidden] || [rkx.weakness.wolf.hidden] || [rkx.weakness.horned] || [rkx.weakness.flowermaker] || [rkx.weakness.wolf]",
      background: "hawthorn.motherofants_shelf",
    },

    {
      x: 3,
      expression:
        "[rkx.weakness.heat.hidden] || [rkx.weakness.cold.hidden] || [rkx.weakness.sea.hidden] || [rkx.weakness.sea] || [rkx.weakness.heat] || [rkx.weakness.cold]",
      background: "hawthorn.motherofants_shelf",
    },
    {
      x: 4,
      expression:
        "[rkx.weakness.faith.hidden] || [rkx.weakness.heights.hidden] || [rkx.weakness.cats.hidden] || [rkx.weakness.faith] || [rkx.weakness.heights] || [rkx.weakness.cats]",
      background: "hawthorn.motherofants_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "temptation.obscurity",
      background: "hawthorn.desire_shelf",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.horned] && [op.horned]) || ([~/[world,threshold,output]+:rkx.weakness.flowermaker] && [op.flowermaker]) || ([~/[world,threshold,output]+:rkx.weakness.wolf] && [op.wolf]) ",
      background: "hawthorn.motherofants_shelf",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.heat] && [op.heat]) || ([~/[world,threshold,output]+:rkx.weakness.cold] && [op.cold]) || ([~/[world,threshold,output]+:rkx.weakness.sea] && [op.sea]) ",
      background: "hawthorn.motherofants_shelf",
    },
    {
      x: 4,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.faith] && [op.faith]) || ([~/[world,threshold,output]+:rkx.weakness.heights] && [op.heights]) || ([~/[world,threshold,output]+:rkx.weakness.cats] && [op.cats]) ",
      background: "hawthorn.motherofants_shelf",
    },
    {
      x: 5,
      y: 2,
      expression: "[domicile]",
      background: "hawthorn.location_shelf",
    },
    { x: 5, y: 1, expression: "[cash]", background: "hawthorn.funds_shelf" },
    {
      x: 6,
      y: 1,
      expression: "[contact.local]",
      background: "hawthorn.location_shelf",
    },
    { x: 6, y: 2, expression: "[vault]", background: "hawthorn.vault_shelf" },
  ],
};

export const pentiments: Shelf = {
  id: "kat.exile.pentiments",
  name: "<sprite name=colours.liminal> Pentiments",
  category: "exile",
  columns: 7,
  priority: 3,
  areas: [
    {
      x: 1,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 2,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 3,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 4,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 5,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 6,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
    {
      x: 7,
      expression: "[pentiment]",
      background: "hawthorn.pentiment_shelf",
    },
  ],
};
