export const apostleGrail: Shelf = {
  id: "kat.apostle.grail",
  category: "apostles",
  name: "[KS] Grail Apostle",
  rows: 4,
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[apostlegrail.pillar3]",
      background: "spices_shelf",
    },
    {
      x: 2,
      y: 1,
      expression:
        "[apostlegrail.pillar4] || [apostlegrail.pillar4.inprogress7] || [apostlegrail.pillar4.inprogress6] || [apostlegrail.pillar4.inprogress5] || [apostlegrail.pillar4.inprogress4] || [apostlegrail.pillar4.inprogress3] || [apostlegrail.pillar4.inprogress2] || [apostlegrail.pillar4.inprogress1]",
      background: "masks_shelf",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostlegrail.pillar2] || [apostlegrail.pillar2.dormant]",
      background: "illhealth_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[toolgrailf]",
      background: "tool_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[influencegrailg]",
      background: "influence_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentheartg]",
      background: "lore_heart_shelf",
    },
    {
      x: 1,
      y: 4,
      expression: "[marinette] || [marinette.enroute]",
      background: "feast_shelf",
    },
    {
      x: 1,
      y: 3,
      expression: "[ingredientgraild]",
      background: "ingredient_shelf",
    },
    {
      x: 2,
      y: 3,
      expression: "[ingredientmothd]",
      background: "ingredient_shelf",
    },
    {
      x: 3,
      y: 3,
      expression: "[ingredientheartf]",
      background: "ingredient_shelf",
    },
  ],
};
export const apostleForge: Shelf = {
  id: "kat.apostle.forge",
  name: "[KS] Forge Apostle",
  category: "apostles",
  rows: 2,
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression:
        "[apostleforge.pillar2] || [apostleforge.pillar2.dormant] || [toolforgef]",
      background: "apostleforge_pillar2_shelf",
    },
    {
      x: 2,
      y: 1,
      expression:
        "[ingredientforge] || [ingredientforgeb] || [ingredientforgef] || [apostleforge.pillar3]",
      background: "ing_shelf",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostleforge.pillar4] || [apostlegrail.pillar4.dormant]",
      background: "apostleforge_pillar4_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[apostleforge.pillar5] || [echidna] || [echidna.enroute]",
      background: "feast_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[influenceforgeg]",
      background: "influence_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentknockg]",
      background: "lore_knock_shelf",
    },
  ],
};
export const apostleLantern: Shelf = {
  id: "kat.apostle.lantern",
  name: "[KS] Lantern Apostle",

  category: "apostles",
  rows: 2,
  columns: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[kleidouchos] || [kleidouchos.enroute]",
      background: "feast_shelf",
    },
    {
      x: 2,
      y: 1,
      expression: "[apostlelantern.pillar3]",
      background: "grief_shelf",
    },
    {
      x: 3,
      y: 1,
      expression:
        "[apostlelantern.pillar4] || [apostlelantern.pillar4.inprogress6] || [apostlelantern.pillar4.inprogress5] || [apostlelantern.pillar4.inprogress4] || [apostlelantern.pillar4.inprogress3] || [apostlelantern.pillar4.inprogress2] || [apostlelantern.pillar4.inprogress1]",
      background: "masks_shelf",
    },
    {
      x: 1,
      y: 2,
      expression: "[ingredientlanternf]",
      background: "ing_shelf",
    },
    {
      x: 2,
      y: 2,
      expression: "[toollanternf]",
      background: "tool_shelf",
    },
    {
      x: 3,
      y: 2,
      expression: "[fragmentmothe]",
      background: "lore_moth_shelf",
    },
  ],
};
