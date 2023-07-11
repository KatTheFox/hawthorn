export const abilities: Shelf = {
  category: "abilities",
  id: "kat.abilities",
  name: "[KS] Abilities",
  rows: 3,
  columns: 4,

  priority: 4,
  areas: [
    {
      id: "kat.health",
      background: "health_shelf",
      expression: "[health]",
      x: 1,
      y: 1,
    },
    {
      id: "kat.reason",
      background: "reason_shelf",
      expression: "[reason] ",
      x: 2,
      y: 1,
    },
    {
      id: "kat.passion",
      background: "passion_shelf",
      expression: "[passion]",
      x: 3,
      y: 1,
    },
    {
      id: "kat.funds",
      expression: "[funds]",
      x: 4,
      y: 1,
      background: "funds_shelf",
    },
    {
      id: "kat.strength",
      expression: "[healthskill]",
      x: 1,
      y: 2,
      background: "skillhealth_shelf",
    },
    {
      id: "kat.scholarship",
      x: 2,
      y: 2,
      expression: "[reasonskill]",
      background: "skillreason_shelf",
    },
    {
      id: "kat.imagination",
      x: 3,
      y: 2,
      expression: "[passionskill]",
      background: "skillpassion_shelf",
    },
    {
      id: "kat.job",
      x: 4,
      y: 2,
      expression: "[job]",
      background: "job_shelf",
    },
    {
      id: "kat.health.exhausted",
      x: 1,
      y: 3,
      expression: "[fatigue]",
      background: "exhausted_shelf",
    },
    {
      id: "kat.reason.exhausted",
      x: 2,
      y: 3,
      expression: "[concentration]",
      background: "exhausted_shelf",
    },
    {
      id: "kat.passion.exhausted",
      x: 3,
      y: 3,
      expression: "[disillusionment] || [passionexhausted]",
      background: "exhausted_shelf",
    },
    {
      id: "kat.desire",
      x: 4,
      y: 3,
      expression:
        "[desire] || [apostleforge.pillar1] || [apostlegrail.pillar1] || [apostlelantern.pillar1] || [apostlemoon.pillar1]",
      background: "desire_shelf",
    },
  ],
};
