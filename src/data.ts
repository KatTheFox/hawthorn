const abilities: Shelf = {
  id: "kat.abilities",
  name: "Abilities",
  rows: 3,
  columns: 4,
  areas: [
    { id: "kat.health", expression: "[health]", x: 1, y: 1 },
    { id: "kat.reason", expression: "[reason]", x: 2, y: 1 },
    { id: "kat.passion", expression: "[passion]", x: 3, y: 1 },
    { id: "kat.funds", expression: "[funds]", x: 4, y: 1 },
    { id: "kat.strength", expression: "[healthskill]", x: 1, y: 2 },
    {
      id: "kat.scholarship",
      x: 2,
      y: 2,
      expression: "[reasonskill]",
    },
    {
      id: "kat.imagination",
      x: 3,
      y: 2,
      expression: "[passionskill]",
    },
    {
      id: "kat.ggjob",
      x: 4,
      y: 2,
      expression:
        "[gloverandgloverjuniorjob] || [gloverandgloverjuniorjob_demotion] || [gloverandglover_difficultbossa_job] || [gloverandgloverseniorjob] || [gloverandglover_difficultbossa_gone_job] || [gloverandgloverseniorjob_youngerglovergone] || [gloverandgloverjob_demotion] || [gloverandglovertopjob] || [gloverandgloverjob_youngerglovergone_demotion] || [gloverandglovertopjob_tainted_demotion] || [gloverandglovertopjob_tainted]",
    },
    {
      id: "kat.health.exhausted",
      x: 1,
      y: 3,
      expression: "[fatigue]",
    },
    {
      id: "kat.reason.exhausted",
      x: 2,
      y: 3,
      expression: "[concentration]",
    },
    {
      id: "kat.passion.exhausted",
      x: 3,
      y: 3,
      expression: "[disillusionment] || [passionexhausted]",
    },
    { id: "kat.desire", x: 4, y: 3, expression: "desire" },
  ],
};
const locations: Shelf = {
  name: "Locations",
  id: "kat.locations",
  rows: 1,
  columns: 3,
  areas: [
    {
      id: "kat.oriflamme",
      expression: "[locationauctionhouse]",
    },
    {
      id: "kat.cabaret",
      x: 2,
      expression: "[locationcabaret] || [locationcabaretclosed]",
    },
    {
      id: "kat.morland",
      x: 3,
      expression: "[locationbookdealer] || [locationbookdealer_exhausted]",
    },
  ],
};

/**const lore:Shelf={

}*/
export const shelves = {
  shelves: [abilities, locations],
};
