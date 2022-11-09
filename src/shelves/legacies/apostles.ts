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
    },
    {
      x: 2,
      y: 1,
      expression:
        "[apostlegrail.pillar4] || [apostlegrail.pillar4.inprogress7] || [apostlegrail.pillar4.inprogress6] || [apostlegrail.pillar4.inprogress5] || [apostlegrail.pillar4.inprogress4] || [apostlegrail.pillar4.inprogress3] || [apostlegrail.pillar4.inprogress2] || [apostlegrail.pillar4.inprogress1]",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostlegrail.pillar2] || [apostlegrail.pillar2.dormant]",
    },
    {
      x: 1,
      y: 2,
      expression: "[toolgrailf]",
    },
    {
      x: 2,
      y: 2,
      expression: "[influencegrailg]",
    },
    { x: 3, y: 2, expression: "[fragmentheartg]" },
    { x: 1, y: 4, expression: "[marinette] || [marinette.enroute]" },
    { x: 1, y: 3, expression: "[ingredientgraild]" },
    { x: 2, y: 3, expression: "[ingredientmothd]" },
    { x: 3, y: 3, expression: "[ingredientheartf]" },
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
    },
    {
      x: 2,
      y: 1,
      expression: "[apostleforge.pillar3]",
    },
    {
      x: 3,
      y: 1,
      expression: "[apostleforge.pillar4] || [apostlegrail.pillar4.dormant]",
    },
    {
      x: 1,
      y: 2,
      expression: "[apostleforge.pillar5] || [echidna] || [echidna.enroute]",
    },
    {
      x: 2,
      y: 2,
      expression: "[influenceforgeg]",
    },
    { x: 3, y: 2, expression: "[fragmentknockg]" },
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
    },
    {
      x: 2,
      y: 1,
      expression: "[apostlelantern.pillar3]",
    },
    {
      x: 3,
      y: 1,
      expression:
        "[apostlelantern.pillar4] || [apostlelantern.pillar4.inprogress6] || [apostlelantern.pillar4.inprogress5] || [apostlelantern.pillar4.inprogress4] || [apostlelantern.pillar4.inprogress3] || [apostlelantern.pillar4.inprogress2] || [apostlelantern.pillar4.inprogress1]",
    },
    {
      x: 1,
      y: 2,
      expression: "[ingredientlanternf]",
    },
    {
      x: 2,
      y: 2,
      expression: "[toollanternf]",
    },
    { x: 3, y: 2, expression: "[fragmentmothe]" },
  ],
};
