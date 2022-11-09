export const exileWeapons: Shelf = {
  id: "kat.exile.weapons",
  category: "exile",
  name: "[KS] Weapons",
  rows: 1,
  columns: 7,
  areas: [
    { expression: "[lore]" },
    {
      expression: "[weapon.a] || [weapon.a.exhausted]",
      x: 2,
    },
    {
      x: 3,
      expression:
        "[weapon.b] || [weapon.b.2] || [weapon.b.1] || [weapon.b.2.exhausted] || [weapon.b.1.exhausted]",
    },
    {
      x: 4,
      expression: "[weapon.c] || [weapon.c.exhausted]",
    },
    { x: 5, expression: "[weapon.d] || [weapon.d.exhausted]" },
    { x: 6, expression: "[weapon.e] || [weapon.e.exhauasted]" },
    { x: 7, expression: "[weapon.f.lionsmith] || [weapon.f.colonel]" },
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
    },
    {
      expression:
        "[contact.visionary] || [contact.visionary.fatigued] || [ally.visionary] || [ally.visionary.fatigued]",
      x: 2,
    },
    {
      expression:
        "[contact.delver] || [contact.delver.fatigued] || [ally.delver] || [ally.delver.fatigued]",
      x: 3,
    },
    {
      expression:
        "[contact.huntress] || [contact.huntress.fatigued] || [ally.huntress] || [ally.huntress.fatigued]",
      x: 4,
    },
    {
      expression:
        "[contact.ghoul] || [contact.ghoul.fatigued] || [ally.ghoul] || [ally.ghoul.fatigued]",
      x: 5,
    },
    {
      expression:
        "[contact.vivisectionist] || [contact.vivisectionist.fatigued] || [ally.vivisectionist] || [ally.vivisectionist.fatigued]",
      x: 6,
    },
    {
      expression:
        "[contact.fivegoer] || [contact.fivegoer.fatigued] || [ally.fivegoer] || [ally.fivegoer.fatigued]",
      x: 7,
    },
    {
      expression:
        "[contact.barber] || [contact.barber.fatigued] || [ally.barber] || [ally.barber.fatigued]",
      x: 8,
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
    },
    {
      x: 2,
      expression:
        "[rkx.weakness.horned.hidden] || [rkx.weakness.flowermaker.hidden] || [rkx.weakness.wolf.hidden] || [rkx.weakness.horned] || [rkx.weakness.flowermaker] || [rkx.weakness.wolf]",
    },

    {
      x: 3,
      expression:
        "[rkx.weakness.heat.hidden] || [rkx.weakness.cold.hidden] || [rkx.weakness.sea.hidden] || [rkx.weakness.sea] || [rkx.weakness.heat] || [rkx.weakness.cold]",
    },
    {
      x: 4,
      expression:
        "[rkx.weakness.faith.hidden] || [rkx.weakness.heights.hidden] || [rkx.weakness.cats.hidden] || [rkx.weakness.faith] || [rkx.weakness.heights] || [rkx.weakness.cats]",
    },
    {
      x: 1,
      y: 2,
      expression: "temptation.obscurity",
    },
    {
      x: 2,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.horned] && [op.horned]) || ([~/[world,threshold,output]+:rkx.weakness.flowermaker] && [op.flowermaker]) || ([~/[world,threshold,output]+:rkx.weakness.wolf] && [op.wolf]) ",
    },
    {
      x: 3,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.heat] && [op.heat]) || ([~/[world,threshold,output]+:rkx.weakness.cold] && [op.cold]) || ([~/[world,threshold,output]+:rkx.weakness.sea] && [op.sea]) ",
    },
    {
      x: 4,
      y: 2,
      expression:
        "([~/[world,threshold,output]+:rkx.weakness.faith] && [op.faith]) || ([~/[world,threshold,output]+:rkx.weakness.heights] && [op.heights]) || ([~/[world,threshold,output]+:rkx.weakness.cats] && [op.cats]) ",
    },
    { x: 5, y: 2, expression: "[domicile]" },
    { x: 5, y: 1, expression: "[cash]" },
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
    },
    {
      x: 2,
      expression: "[pentiment]",
    },
    {
      x: 3,
      expression: "[pentiment]",
    },
    {
      x: 4,
      expression: "[pentiment]",
    },
    {
      x: 5,
      expression: "[pentiment]",
    },
    {
      x: 6,
      expression: "[pentiment]",
    },
    {
      x: 7,
      expression: "[pentiment]",
    },
    {
      x: 8,
      expression: "[pentiment]",
    },
    {
      x: 9,
      expression: "[pentiment]",
    },
    {
      x: 10,
      expression: "[pentiment]",
    },
  ],
};
