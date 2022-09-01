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
const spintria: Shelf = {
  id: "kat.spintria",
  name: "Spintria",
  rows: 4,
  areas: [
    { id: "kat.spintria.gold", expression: "[compensationd]" },
    { id: "kat.spintria.silver", y: 2, expression: "[compensationc]" },
    { id: "kat.spintria.bronze", y: 3, expression: "[compensationb]" },
    { id: "kat.spintria.iron", y: 4, expression: "[compensation]" },
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
const lore: Shelf = {
  name: "Lore",
  id: "kat.lore",
  rows: 8,
  columns: 9,
  expression: "[lore]",
  areas: [
    {
      expression: "[fragmentsecrethistories]",
      x: 1,
      y: 2,
    },
    {
      expression: "[fragmentsecrethistoriesb]",
      x: 1,
      y: 3,
    },
    {
      expression: "[fragmentsecrethistoriesc]",
      x: 1,
      y: 4,
    },
    {
      expression: "[fragmentsecrethistoriesd]",
      x: 1,
      y: 5,
    },
    {
      expression: "[fragmentsecrethistoriese]",
      x: 1,
      y: 6,
    },
    {
      expression: "[fragmentsecrethistoriesf]",
      x: 1,
      y: 7,
    },
    {
      expression: "[fragmentsecrethistoriesg]",
      x: 1,
      y: 8,
    },

    {
      expression: "[fragmentknock]",
      x: 2,
      y: 2,
    },
    {
      expression: "[fragmentknockb]",
      x: 2,
      y: 3,
    },
    {
      expression: "[fragmentknockc]",
      x: 2,
      y: 4,
    },
    {
      expression: "[fragmentknockd]",
      x: 2,
      y: 5,
    },
    {
      expression: "[fragmentknocke]",
      x: 2,
      y: 6,
    },
    {
      expression: "[fragmentknockf]",
      x: 2,
      y: 7,
    },
    {
      expression: "[fragmentknockg]",
      x: 2,
      y: 8,
    },
    {
      expression: "[fragmentlantern]",
      x: 3,
      y: 2,
    },
    {
      expression: "[fragmentlanternb]",
      x: 3,
      y: 3,
    },
    {
      expression: "[fragmentlanternc]",
      x: 3,
      y: 4,
    },
    {
      expression: "[fragmentlanternd]",
      x: 3,
      y: 5,
    },
    {
      expression: "[fragmentlanterne]",
      x: 3,
      y: 6,
    },
    {
      expression: "[fragmentlanternf]",
      x: 3,
      y: 7,
    },
    {
      expression: "[fragmentlanterng]",
      x: 3,
      y: 8,
    },

    {
      expression: "[fragmentforge]",
      x: 4,
      y: 2,
    },
    {
      expression: "[fragmentforgeb]",
      x: 4,
      y: 3,
    },
    {
      expression: "[fragmentforgec]",
      x: 4,
      y: 4,
    },
    {
      expression: "[fragmentforged]",
      x: 4,
      y: 5,
    },
    {
      expression: "[fragmentforgee]",
      x: 4,
      y: 6,
    },
    {
      expression: "[fragmentforgef]",
      x: 4,
      y: 7,
    },
    {
      expression: "[fragmentforgeg]",
      x: 4,
      y: 8,
    },
    {
      expression: "[fragmentedge]",
      x: 5,
      y: 2,
    },
    {
      expression: "[fragmentedgeb]",
      x: 5,
      y: 3,
    },
    {
      expression: "[fragmentedgec]",
      x: 5,
      y: 4,
    },
    {
      expression: "[fragmentedged]",
      x: 5,
      y: 5,
    },
    {
      expression: "[fragmentedgee]",
      x: 5,
      y: 6,
    },
    {
      expression: "[fragmentedgef]",
      x: 5,
      y: 7,
    },
    {
      expression: "[fragmentedgeg]",
      x: 5,
      y: 8,
    },

    {
      expression: "[fragmentwinter]",
      x: 6,
      y: 2,
    },
    {
      expression: "[fragmentwinterb]",
      x: 6,
      y: 3,
    },
    {
      expression: "[fragmentwinterc]",
      x: 6,
      y: 4,
    },
    {
      expression: "[fragmentwinterd]",
      x: 6,
      y: 5,
    },
    {
      expression: "[fragmentwintere]",
      x: 6,
      y: 6,
    },
    {
      expression: "[fragmentwinterf]",
      x: 6,
      y: 7,
    },
    {
      expression: "[fragmentwinterg]",
      x: 6,
      y: 8,
    },

    {
      expression: "[fragmentheart]",
      x: 7,
      y: 2,
    },
    {
      expression: "[fragmentheartb]",
      x: 7,
      y: 3,
    },
    {
      expression: "[fragmentheartc]",
      x: 7,
      y: 4,
    },
    {
      expression: "[fragmentheartd]",
      x: 7,
      y: 5,
    },
    {
      expression: "[fragmenthearte]",
      x: 7,
      y: 6,
    },
    {
      expression: "[fragmentheartf]",
      x: 7,
      y: 7,
    },
    {
      expression: "[fragmentheartg]",
      x: 7,
      y: 8,
    },

    {
      expression: "[fragmentgrail]",
      x: 8,
      y: 2,
    },
    {
      expression: "[fragmentgrailb]",
      x: 8,
      y: 3,
    },
    {
      expression: "[fragmentgrailc]",
      x: 8,
      y: 4,
    },
    {
      expression: "[fragmentgraild]",
      x: 8,
      y: 5,
    },
    {
      expression: "[fragmentgraile]",
      x: 8,
      y: 6,
    },
    {
      expression: "[fragmentgrailf]",
      x: 8,
      y: 7,
    },
    {
      expression: "[fragmentgrailg]",
      x: 8,
      y: 8,
    },
    {
      expression: "[fragmentmoth]",
      x: 9,
      y: 2,
    },
    {
      expression: "[fragmentmothb]",
      x: 9,
      y: 3,
    },
    {
      expression: "[fragmentmothc]",
      x: 9,
      y: 4,
    },
    {
      expression: "[fragmentmothd]",
      x: 9,
      y: 5,
    },
    {
      expression: "[fragmentmothe]",
      x: 9,
      y: 6,
    },
    {
      expression: "[fragmentmothf]",
      x: 9,
      y: 7,
    },
    {
      expression: "[fragmentmothg]",
      x: 9,
      y: 8,
    },
    {
      expression: "[paintingmastersecrethistories]",
      x: 1,
      y: 1,
    },
    {
      expression: "[paintingmasterknock]",
      x: 2,
      y: 1,
    },
    {
      expression: "[paintingmasterlantern]",
      x: 3,
      y: 1,
    },
    {
      expression: "[paintingmasterforge]",
      x: 4,
      y: 1,
    },
    {
      expression: "[paintingmasteredge]",
      x: 5,
      y: 1,
    },
    {
      expression: "[paintingmasterwinter]",
      x: 6,
      y: 1,
    },
    {
      expression: "[paintingmasterheart]",
      x: 7,
      y: 1,
    },
    {
      expression: "[paintingmastergrail]",
      x: 8,
      y: 1,
    },
    {
      expression: "[paintingmastermoth]",
      x: 9,
      y: 1,
    },
  ],
};
const rites: Shelf = {
  id: "kat.rites",
  name: "Rites",
  rows: 1,
  columns: 10,
  areas: [
    {
      x: 1,
      expression: "[ritual]",
    },
    {
      x: 2,
      expression: "[ritual]",
    },
    {
      x: 3,
      expression: "[ritual]",
    },
    {
      x: 4,
      expression: "[ritual]",
    },
    {
      x: 5,
      expression: "[ritual]",
    },
    {
      x: 6,
      expression: "[ritual]",
    },
    {
      x: 7,
      expression: "[ritual]",
    },
    {
      x: 8,
      expression: "[ritual]",
    },
    {
      x: 9,
      expression: "[ritual]",
    },
    {
      x: 10,
      expression: "[ritual]",
    },
  ],
};
const followers: Shelf = {
  id: "kat.followers",
  name: "Followers",
  rows: 4,
  columns: 8,
  areas: [
    {
      expression:
        "[neville_a] || [neville_b] || [neville_c] || [neville_r] || [neville_p]",
      x: 1,
      y: 1,
    },
    {
      expression: "[enid_a] || [enid_b] || [enid_c] || [enid_r] || [enid_p]",
      x: 1,
      y: 2,
    },
    {
      expression: "[generic_a_knock] || [generic_b_knock] || [generic_c_knock]",
      x: 1,
      y: 4,
    },
    {
      expression:
        "[generic_a_lantern] || [generic_b_lantern] || [generic_c_lantern]",
      x: 2,
      y: 4,
    },
    {
      expression: "[generic_a_forge] || [generic_b_forge] || [generic_c_forge]",
      x: 3,
      y: 4,
    },
    {
      expression: "[generic_a_edge] || [generic_b_edge] || [generic_c_edge]",
      x: 4,
      y: 4,
    },
    {
      expression:
        "[generic_a_winter] || [generic_b_winter] || [generic_c_winter]",
      x: 5,
      y: 4,
    },
    {
      expression: "[generic_a_heart] || [generic_b_heart] || [generic_c_heart]",
      x: 6,
      y: 4,
    },
    {
      expression: "[generic_a_grail] || [generic_b_grail] || [generic_c_grail]",
      x: 7,
      y: 4,
    },
    {
      expression: "[generic_a_moth] || [generic_b_moth] || [generic_c_moth]",
      x: 8,
      y: 4,
    },
    {
      expression: "[cat_a] || [cat_b] || [cat_c] || [cat_r] || [cat_p]",
      x: 2,
      y: 1,
    },
    {
      expression:
        "[clifton_a] || [clifton_b] || [clifton_c] || [clifton_r] || [clifton_p]",
      x: 2,
      y: 2,
    },
    {
      expression: "[slee_a] || [slee_b] || [slee_c] || [slee_r] || [slee_p]",
      x: 2,
      y: 3,
    },
    {
      expression:
        "[laidlaw_a] || [laidlaw_b] || [laidlaw_c] || [laidlaw_r] || [laidlaw_p]",
      x: 3,
      y: 1,
    },
    {
      expression:
        "[tristan_a] || [tristan_b] || [tristan_c] || [tristan_r] || [tristan_p]",
      x: 3,
      y: 2,
    },
    {
      expression:
        "[valciane_a] || [valciane_b] || [valciane_c] || [valciane_r] || [valciane_p]",
      x: 3,
      y: 3,
    },
    {
      expression:
        "[elridge_a] || [elridge_b] || [elridge_c] || [elridge_r] || [elridge_p]",
      x: 4,
      y: 3,
    },
    {
      expression: "[rose_a] || [rose_b] || [rose_c] || [rose_r] || [rose_p]",
      x: 4,
      y: 1,
    },
    {
      expression:
        "[victor_a] || [victor_b] || [victor_c] || [victor_r] || [victor_p]",
      x: 4,
      y: 2,
    },
    {
      expression:
        "[auclair_a] || [auclair_b] || [auclair_c] || [auclair_r] || [auclair_p]",
      x: 5,
      y: 1,
    },
    {
      expression:
        "[violet_a] || [violet_b] || [violet_c] || [violet_r] || [violet_p]",
      x: 5,
      y: 2,
    },
    {
      expression:
        "[clovette_a] || [clovette_b] || [clovette_c] || [clovette_r] || [clovette_p]",
      x: 6,
      y: 1,
    },
    {
      expression:
        "[dorothy_a] || [dorothy_b] || [dorothy_c] || [dorothy_r] || [dorothy_p]",
      x: 6,
      y: 2,
    },
    {
      expression: "[leo_a] || [leo_b] || [leo_c] || [leo_r] || [leo_p]",
      x: 6,
      y: 3,
    },
    {
      expression:
        "[renira_a] || [renira_b] || [renira_c] || [renira_r] || [renira_p]",
      x: 7,
      y: 1,
    },
    {
      expression:
        "[saliba_a] || [saliba_b] || [saliba_c] || [saliba_r] || [saliba_p]",
      x: 7,
      y: 2,
    },
    {
      expression:
        "[porter_a] || [porter_b] || [porter_c] || [porter_r] || [porter_p]",
      x: 8,
      y: 3,
    },
    {
      expression:
        "[sylvia_a] || [sylvia_b] || [sylvia_c] || [sylvia_r] || [sylvia_p]",
      x: 8,
      y: 2,
    },
    {
      expression:
        "[ysabet_a] || [ysabet_b] || [ysabet_c] || [ysabet_r] || [ysabet_p]",
      x: 8,
      y: 1,
    },
  ],
};
export const shelves = {
  shelves: [abilities, locations, spintria, lore, rites, followers],
};
