export const apostleGrail: Shelf = {
  id: "kat.apostle.grail",
  category: "apostles",
  name: "<sprite name=colours.liminal> Grail Apostle",
  rows: 4,
  legacies: ["apostlegrail", "apostlegrailwithrisen"],
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[apostlegrail.pillar3]",
      background: "hawthorn.spices_shelf",
    },
    {
      x: 2,
      y: 1,
      expression:
        "[apostlegrail.pillar4] || [apostlegrail.pillar4.inprogress7] || [apostlegrail.pillar4.inprogress6] || [apostlegrail.pillar4.inprogress5] || [apostlegrail.pillar4.inprogress4] || [apostlegrail.pillar4.inprogress3] || [apostlegrail.pillar4.inprogress2] || [apostlegrail.pillar4.inprogress1]",
      background: "hawthorn.masks_shelf",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostlegrail.pillar2] || [apostlegrail.pillar2.dormant]",
      background: "hawthorn.illhealth_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[toolgrailf]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[influencegrailg]",
      background: "hawthorn.influence_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentheartg]",
      background: "hawthorn.lore_heart_shelf",
    },
    {
      x: 1,
      y: 4,
      expression: "[marinette] || [marinette.enroute]",
      background: "hawthorn.feast_shelf",
    },
    {
      x: 1,
      y: 3,
      expression: "[ingredientgraild]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[ingredientmothd]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 3,
      y: 3,
      expression: "[ingredientheartf]",
      background: "hawthorn.ing_shelf",
    },
  ],
};
export const apostleForge: Shelf = {
  id: "kat.apostle.forge",
  name: "<sprite name=colours.liminal> Forge Apostle",
  legacies: ["apostleforge", "apostleforgewithrisen"],
  category: "apostles",
  rows: 2,
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression:
        "[apostleforge.pillar2] || [apostleforge.pillar2.dormant] || [toolforgef]",
      background: "hawthorn.apostleforge_pillar2_shelf",
    },
    {
      x: 2,
      y: 1,
      expression:
        "[ingredientforge] || [ingredientforgeb] || [ingredientforgef] || [apostleforge.pillar3]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostleforge.pillar4] || [apostlegrail.pillar4.dormant]",
      background: "hawthorn.apostleforge_pillar4_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[apostleforge.pillar5] || [echidna] || [echidna.enroute]",
      background: "hawthorn.feast_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[influenceforgeg]",
      background: "hawthorn.influence_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentknockg]",
      background: "hawthorn.lore_knock_shelf",
    },
  ],
};
export const apostleLantern: Shelf = {
  id: "kat.apostle.lantern",
  name: "<sprite name=colours.liminal> Lantern Apostle",
  legacies: ["apostlelantern", "apostlelanternwithrisen"],

  category: "apostles",
  rows: 2,
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[kleidouchos] || [kleidouchos.enroute]",
      background: "hawthorn.feast_shelf",
    },
    {
      x: 2,
      y: 1,
      expression: "[apostlelantern.pillar3]",
      background: "hawthorn.grief_shelf",
    },
    {
      x: 3,
      y: 1,
      expression:
        "[apostlelantern.pillar4] || [apostlelantern.pillar4.inprogress6] || [apostlelantern.pillar4.inprogress5] || [apostlelantern.pillar4.inprogress4] || [apostlelantern.pillar4.inprogress3] || [apostlelantern.pillar4.inprogress2] || [apostlelantern.pillar4.inprogress1]",
      background: "hawthorn.masks_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[ingredientlanternf]",
      background: "hawthorn.ing_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[toollanternf]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentmothe]",
      background: "hawthorn.lore_moth_shelf",
    },
  ],
};
