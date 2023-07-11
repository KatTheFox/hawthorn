export const exileWeapons: Shelf = {
  id: "kat.exile.weapons",
  category: "exile",
  name: "[KS] Weapons",
  rows: 1,
  columns: 7,
  areas: [
    { expression: "[lore]", background: "lore_edge_shelf" },
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
  ],
};
export const exileAllies: Shelf = {
  name: "[KS] Allies",
  id: "kat.exile.allies",
  category: "exile",
  rows: 1,
  columns: 8,
  areas: [
    {
      expression:
        "[contact.smuggler] || [contact.smuggler.fatigued] || [ally.smuggler] || [ally.smuggler.fatigued]",
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.visionary] || [contact.visionary.fatigued] || [ally.visionary] || [ally.visionary.fatigued]",
      x: 2,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.delver] || [contact.delver.fatigued] || [ally.delver] || [ally.delver.fatigued]",
      x: 3,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.huntress] || [contact.huntress.fatigued] || [ally.huntress] || [ally.huntress.fatigued]",
      x: 4,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.ghoul] || [contact.ghoul.fatigued] || [ally.ghoul] || [ally.ghoul.fatigued]",
      x: 5,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.vivisectionist] || [contact.vivisectionist.fatigued] || [ally.vivisectionist] || [ally.vivisectionist.fatigued]",
      x: 6,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.fivegoer] || [contact.fivegoer.fatigued] || [ally.fivegoer] || [ally.fivegoer.fatigued]",
      x: 7,
      background: "follower_shelf",
    },
    {
      expression:
        "[contact.barber] || [contact.barber.fatigued] || [ally.barber] || [ally.barber.fatigued]",
      x: 8,
      background: "follower_shelf",
    },
  ],
};
export const exileWincons: Shelf = {
  name: "[KS] Exile Misc",
  id: "kat.exile.wincons",
  category: "exile",
  rows: 2,
  columns: 5,
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
  ],
};
export const pentiments: Shelf = {
  id: "kat.exile.pentiments",
  name: "[KS] Pentiments",
  category: "exile",
  columns: 10,
  areas: [
    {
      x: 1,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 2,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 3,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 4,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 5,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 6,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 7,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 8,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 9,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
    {
      x: 10,
      expression: "[pentiment]",
      background: "pentiment_shelf",
    },
  ],
};
