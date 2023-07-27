export const abilities: Shelf = {
  category: "abilities",
  id: "kat.abilities",
  name: "<sprite name=colours.liminal> Abilities",
  rows: 3,
  columns: 4,
  areas: [
    {
      id: "kat.health",
      background: "hawthorn.health_shelf",
      expression: "[health]",
      x: 1,
      y: 1,
    },
    {
      id: "kat.reason",
      background: "hawthorn.reason_shelf",
      expression: "[reason] ",
      x: 2,
      y: 1,
    },
    {
      id: "kat.passion",
      background: "hawthorn.passion_shelf",
      expression: "[passion]",
      x: 3,
      y: 1,
    },
    {
      id: "kat.funds",
      expression: "[funds]",
      x: 4,
      y: 1,
      background: "hawthorn.funds_shelf",
    },
    {
      id: "kat.strength",
      expression: "[healthskill]",
      x: 1,
      y: 2,
      background: "hawthorn.skillhealth_shelf",
    },
    {
      id: "kat.scholarship",
      x: 2,
      y: 2,
      expression: "[reasonskill]",
      background: "hawthorn.skillreason_shelf",
    },
    {
      id: "kat.imagination",
      x: 3,
      y: 2,
      expression: "[passionskill]",
      background: "hawthorn.skillpassion_shelf",
    },
    {
      id: "kat.job",
      x: 4,
      y: 2,
      expression: "[job]",
      background: "hawthorn.job_shelf",
    },
    {
      id: "kat.health.exhausted",
      x: 1,
      y: 3,
      expression: "[fatigue]",
      background: "hawthorn.exhausted_shelf",
    },
    {
      id: "kat.reason.exhausted",
      x: 2,
      y: 3,
      expression: "[concentration]",
      background: "hawthorn.exhausted_shelf",
    },
    {
      id: "kat.passion.exhausted",
      x: 3,
      y: 3,
      expression: "[disillusionment] || [passionexhausted]",
      background: "hawthorn.exhausted_shelf",
    },
    {
      id: "kat.desire",
      x: 4,
      y: 3,
      expression:
        "[desire] || [apostleforge.pillar1] || [apostlegrail.pillar1] || [apostlelantern.pillar1] || [apostlemoon.pillar1]",
      background: "hawthorn.desire_shelf",
    },
  ],
};
