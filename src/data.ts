const abilities: Shelf = {
  category: "abilities",
  id: "kat.abilities",
  name: "[KS] Abilities",
  rows: 3,
  columns: 4,
  areas: [
    {
      id: "kat.health",
      background: "statshelf_health",
      expression: "[health]",
      x: 1,
      y: 1,
    },
    {
      id: "kat.reason",
      background: "statshelf_reason",
      expression: "[reason]",
      x: 2,
      y: 1,
    },
    {
      id: "kat.passion",
      background: "statshelf_passion",
      expression: "[passion]",
      x: 3,
      y: 1,
    },
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
      background: "statshelf_health_exhausted",
    },
    {
      id: "kat.reason.exhausted",
      x: 2,
      y: 3,
      expression: "[concentration]",
      background: "statshelf_reason_exhausted",
    },
    {
      id: "kat.passion.exhausted",
      x: 3,
      y: 3,
      expression: "[disillusionment] || [passionexhausted]",
      background: "statshelf_passion_exhausted",
    },
    { id: "kat.desire", x: 4, y: 3, expression: "desire" },
  ],
};
const cult: Shelf = {
  category: "",
  id: "kat.cult",
  name: "[KS] Cult",
  rows: 1,
  columns: 3,
  areas: [
    {
      x: 1,
      expression: "[society]",
    },
    {
      x: 2,
      expression: "[hq]",
    },
    {
      x: 3,
      expression: "[mentor]",
    },
  ],
};
const spintria: Shelf = {
  category: "",
  id: "kat.spintria",
  name: "[KS] Spintria",
  rows: 4,
  areas: [
    { id: "kat.spintria.gold", expression: "[compensationd]" },
    { id: "kat.spintria.silver", y: 2, expression: "[compensationc]" },
    { id: "kat.spintria.bronze", y: 3, expression: "[compensationb]" },
    { id: "kat.spintria.iron", y: 4, expression: "[compensation]" },
  ],
};
const locations: Shelf = {
  category: "",
  name: "[KS] Locations",
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
  name: "[KS] Lore",
  category: "lore",
  id: "kat.lore",
  rows: 8,
  columns: 9,
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
      id: "paintingmastersecrethistories",
      expression: "[paintingmastersecrethistories]",
      x: 1,
      y: 1,
    },
    {
      id: "paintingmasterknock",
      expression: "[paintingmasterknock]",
      x: 2,
      y: 1,
    },
    {
      id: "paintingmasterlantern",
      expression: "[paintingmasterlantern]",
      x: 3,
      y: 1,
    },
    {
      id: "paintingmasterforge",
      expression: "[paintingmasterforge]",
      x: 4,
      y: 1,
    },
    {
      id: "paintingmasteredge",
      expression: "[paintingmasteredge]",
      x: 5,
      y: 1,
    },
    {
      id: "paintingmasterwinter",
      expression: "[paintingmasterwinter]",
      x: 6,
      y: 1,
    },
    {
      id: "paintingmasterheart",
      expression: "[paintingmasterheart]",
      x: 7,
      y: 1,
    },
    {
      id: "paintingmastergrail",
      expression: "[paintingmastergrail]",
      x: 8,
      y: 1,
    },
    {
      id: "paintingmastermoth",
      expression: "[paintingmastermoth]",
      x: 9,
      y: 1,
    },
  ],
};
const loreNoSH: Shelf = {
  name: "[KS] Lore (No Secret Histories)",
  category: "lore",
  id: "kat.lore.compat",
  rows: 8,
  columns: 8,
  areas: [
    {
      expression: "[fragmentknock]",
      x: 1,
      y: 2,
    },
    {
      expression: "[fragmentknockb]",
      x: 1,
      y: 3,
    },
    {
      expression: "[fragmentknockc]",
      x: 1,
      y: 4,
    },
    {
      expression: "[fragmentknockd]",
      x: 1,
      y: 5,
    },
    {
      expression: "[fragmentknocke]",
      x: 1,
      y: 6,
    },
    {
      expression: "[fragmentknockf]",
      x: 1,
      y: 7,
    },
    {
      expression: "[fragmentknockg]",
      x: 1,
      y: 8,
    },
    {
      expression: "[fragmentlantern]",
      x: 2,
      y: 2,
    },
    {
      expression: "[fragmentlanternb]",
      x: 2,
      y: 3,
    },
    {
      expression: "[fragmentlanternc]",
      x: 2,
      y: 4,
    },
    {
      expression: "[fragmentlanternd]",
      x: 2,
      y: 5,
    },
    {
      expression: "[fragmentlanterne]",
      x: 2,
      y: 6,
    },
    {
      expression: "[fragmentlanternf]",
      x: 2,
      y: 7,
    },
    {
      expression: "[fragmentlanterng]",
      x: 2,
      y: 8,
    },

    {
      expression: "[fragmentforge]",
      x: 3,
      y: 2,
    },
    {
      expression: "[fragmentforgeb]",
      x: 3,
      y: 3,
    },
    {
      expression: "[fragmentforgec]",
      x: 3,
      y: 4,
    },
    {
      expression: "[fragmentforged]",
      x: 3,
      y: 5,
    },
    {
      expression: "[fragmentforgee]",
      x: 3,
      y: 6,
    },
    {
      expression: "[fragmentforgef]",
      x: 3,
      y: 7,
    },
    {
      expression: "[fragmentforgeg]",
      x: 3,
      y: 8,
    },
    {
      expression: "[fragmentedge]",
      x: 4,
      y: 2,
    },
    {
      expression: "[fragmentedgeb]",
      x: 4,
      y: 3,
    },
    {
      expression: "[fragmentedgec]",
      x: 4,
      y: 4,
    },
    {
      expression: "[fragmentedged]",
      x: 4,
      y: 5,
    },
    {
      expression: "[fragmentedgee]",
      x: 4,
      y: 6,
    },
    {
      expression: "[fragmentedgef]",
      x: 4,
      y: 7,
    },
    {
      expression: "[fragmentedgeg]",
      x: 4,
      y: 8,
    },

    {
      expression: "[fragmentwinter]",
      x: 5,
      y: 2,
    },
    {
      expression: "[fragmentwinterb]",
      x: 5,
      y: 3,
    },
    {
      expression: "[fragmentwinterc]",
      x: 5,
      y: 4,
    },
    {
      expression: "[fragmentwinterd]",
      x: 5,
      y: 5,
    },
    {
      expression: "[fragmentwintere]",
      x: 5,
      y: 6,
    },
    {
      expression: "[fragmentwinterf]",
      x: 5,
      y: 7,
    },
    {
      expression: "[fragmentwinterg]",
      x: 5,
      y: 8,
    },

    {
      expression: "[fragmentheart]",
      x: 6,
      y: 2,
    },
    {
      expression: "[fragmentheartb]",
      x: 6,
      y: 3,
    },
    {
      expression: "[fragmentheartc]",
      x: 6,
      y: 4,
    },
    {
      expression: "[fragmentheartd]",
      x: 6,
      y: 5,
    },
    {
      expression: "[fragmenthearte]",
      x: 6,
      y: 6,
    },
    {
      expression: "[fragmentheartf]",
      x: 6,
      y: 7,
    },
    {
      expression: "[fragmentheartg]",
      x: 6,
      y: 8,
    },

    {
      expression: "[fragmentgrail]",
      x: 7,
      y: 2,
    },
    {
      expression: "[fragmentgrailb]",
      x: 7,
      y: 3,
    },
    {
      expression: "[fragmentgrailc]",
      x: 7,
      y: 4,
    },
    {
      expression: "[fragmentgraild]",
      x: 7,
      y: 5,
    },
    {
      expression: "[fragmentgraile]",
      x: 7,
      y: 6,
    },
    {
      expression: "[fragmentgrailf]",
      x: 7,
      y: 7,
    },
    {
      expression: "[fragmentgrailg]",
      x: 7,
      y: 8,
    },
    {
      expression: "[fragmentmoth]",
      x: 8,
      y: 2,
    },
    {
      expression: "[fragmentmothb]",
      x: 8,
      y: 3,
    },
    {
      expression: "[fragmentmothc]",
      x: 8,
      y: 4,
    },
    {
      expression: "[fragmentmothd]",
      x: 8,
      y: 5,
    },
    {
      expression: "[fragmentmothe]",
      x: 8,
      y: 6,
    },
    {
      expression: "[fragmentmothf]",
      x: 8,
      y: 7,
    },
    {
      expression: "[fragmentmothg]",
      x: 8,
      y: 8,
    },
    {
      id: "paintingmastersecrethistories",
      expression: "[paintingmastersecrethistories]",
      x: 1,
      y: 1,
    },
    {
      id: "paintingmasterknock",
      expression: "[paintingmasterknock]",
      x: 1,
      y: 1,
    },
    {
      id: "paintingmasterlantern",
      expression: "[paintingmasterlantern]",
      x: 2,
      y: 1,
    },
    {
      id: "paintingmasterforge",
      expression: "[paintingmasterforge]",
      x: 3,
      y: 1,
    },
    {
      id: "paintingmasteredge",
      expression: "[paintingmasteredge]",
      x: 4,
      y: 1,
    },
    {
      id: "paintingmasterwinter",
      expression: "[paintingmasterwinter]",
      x: 5,
      y: 1,
    },
    {
      id: "paintingmasterheart",
      expression: "[paintingmasterheart]",
      x: 6,
      y: 1,
    },
    {
      id: "paintingmastergrail",
      expression: "[paintingmastergrail]",
      x: 7,
      y: 1,
    },
    {
      id: "paintingmastermoth",
      expression: "[paintingmastermoth]",
      x: 8,
      y: 1,
    },
  ],
};
const rites: Shelf = {
  id: "kat.rites",
  category: "rites",
  name: "[KS] Rites",
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
  category: "followers",
  name: "[KS] Followers",
  rows: 4,
  columns: 8,
  areas: [
    {
      expression:
        "[neville_a] || [neville_b] || [neville_c] || [neville_r] || [neville_p] || [neville_d]",
      x: 1,
      y: 1,
    },
    {
      expression:
        "[enid_a] || [enid_b] || [enid_c] || [enid_r] || [enid_p] || [enid_d]",
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
      expression:
        "[cat_a] || [cat_b] || [cat_c] || [cat_r] || [cat_p] || [cat_d]",
      x: 2,
      y: 1,
    },
    {
      expression:
        "[clifton_a] || [clifton_b] || [clifton_c] || [clifton_r] || [clifton_p] || [clifton_d]",
      x: 2,
      y: 2,
    },
    {
      expression:
        "[slee_a] || [slee_b] || [slee_c] || [slee_r] || [slee_p] || [slee_d]",
      x: 2,
      y: 3,
    },
    {
      expression:
        "[laidlaw_a] || [laidlaw_b] || [laidlaw_c] || [laidlaw_r] || [laidlaw_p] || [laidlaw_d]",
      x: 3,
      y: 1,
    },
    {
      expression:
        "[tristan_a] || [tristan_b] || [tristan_c] || [tristan_r] || [tristan_p] || [tristan_d]",
      x: 3,
      y: 2,
    },
    {
      expression:
        "[valciane_a] || [valciane_b] || [valciane_c] || [valciane_r] || [valciane_p] || [valciane_d]",
      x: 3,
      y: 3,
    },
    {
      expression:
        "[elridge_a] || [elridge_b] || [elridge_c] || [elridge_r] || [elridge_p] || [elridge_d]",
      x: 4,
      y: 3,
    },
    {
      expression:
        "[rose_a] || [rose_b] || [rose_c] || [rose_r] || [rose_p] || [rose_d]",
      x: 4,
      y: 1,
    },
    {
      expression:
        "[victor_a] || [victor_b] || [victor_c] || [victor_r] || [victor_p] || [victor_d]",
      x: 4,
      y: 2,
    },
    {
      expression:
        "[auclair_a] || [auclair_b] || [auclair_c] || [auclair_r] || [auclair_p] || [auclair_d]",
      x: 5,
      y: 1,
    },
    {
      expression:
        "[violet_a] || [violet_b] || [violet_c] || [violet_r] || [violet_p] || [violet_d]",
      x: 5,
      y: 2,
    },
    {
      expression:
        "[clovette_a] || [clovette_b] || [clovette_c] || [clovette_r] || [clovette_p] || [clovette_d]",
      x: 6,
      y: 1,
    },
    {
      expression:
        "[dorothy_a] || [dorothy_b] || [dorothy_c] || [dorothy_r] || [dorothy_p] || [dorothy_d]",
      x: 6,
      y: 2,
    },
    {
      expression:
        "[leo_a] || [leo_b] || [leo_c] || [leo_r] || [leo_p] || [leo_d]",
      x: 6,
      y: 3,
    },
    {
      expression:
        "[renira_a] || [renira_b] || [renira_c] || [renira_r] || [renira_p] || [renira_d]",
      x: 7,
      y: 1,
    },
    {
      expression:
        "[saliba_a] || [saliba_b] || [saliba_c] || [saliba_r] || [saliba_p] || [saliba_d]",
      x: 7,
      y: 2,
    },
    {
      expression:
        "[porter_a] || [porter_b] || [porter_c] || [porter_r] || [porter_p] || [porter_d]",
      x: 8,
      y: 3,
    },
    {
      expression:
        "[sylvia_a] || [sylvia_b] || [sylvia_c] || [sylvia_r] || [sylvia_p] || [sylvia_d]",
      x: 8,
      y: 2,
    },
    {
      expression:
        "[ysabet_a] || [ysabet_b] || [ysabet_c] || [ysabet_r] || [ysabet_p] || [ysabet_d]",
      x: 8,
      y: 1,
    },
  ],
};
const tools: Shelf = {
  name: "[KS] Tools",
  id: "kat.tools",
  category: "tools",
  rows: 1,
  columns: 9,
  expression:
    "![paintingmastersecrethistories] && ![paintingmasterknock] && ![paintingmasterlantern] && ![paintingmasterforge] && ![paintingmasteredge] && ![paintingmasterwinter] && ![paintingmasterheart] && ![paintingmastergrail] && ![paintingmastermoth]",
  areas: [
    {
      x: 1,
      y: 1,
      expression:
        "[tool] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{[tool] && ![paintingmastersecrethistories]}:aspectmax/secrethistories]",
    },
    {
      x: 2,
      y: 1,
      expression:
        "[tool] && ([knock]>0) && [knock]=[~/tabletop:{[tool] && ![paintingmasterknock]}:aspectmax/knock]",
    },
    {
      x: 3,
      y: 1,
      expression:
        "[tool] && ([lantern]>0) && [lantern]=[~/tabletop:{[tool] && ![paintingmasterlantern]}:aspectmax/lantern]",
    },
    {
      x: 4,
      y: 1,
      expression:
        "[tool] && ([forge]>0) && [forge]=[~/tabletop:{[tool] && ![paintingmasterforge]}:aspectmax/forge]",
    },
    {
      x: 5,
      y: 1,
      expression:
        "[tool] && ([edge]>0) && [edge]=[~/tabletop:{[tool] && ![paintingmasteredge]}:aspectmax/edge]",
    },
    {
      x: 6,
      y: 1,
      expression:
        "[tool] && ([winter]>0) && [winter]=[~/tabletop:{[tool] && ![paintingmasterwinter]}:aspectmax/winter]",
    },
    {
      x: 7,
      y: 1,
      expression:
        "[tool] && ([heart]>0) && [heart]=[~/tabletop:{[tool] && ![paintingmasterheart]}:aspectmax/heart]",
    },
    {
      x: 8,
      y: 1,
      expression:
        "[tool] && ([grail]>0) && [grail]=[~/tabletop:{[tool] && ![paintingmastergrail]}:aspectmax/grail]",
    },
    {
      x: 9,
      y: 1,
      expression:
        "[tool] && ([moth]>0) && [moth]=[~/tabletop:{[tool] && ![paintingmastermoth]}:aspectmax/moth]",
    },
  ],
};
const apostleGrail: Shelf = {
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
const pigments: Shelf = {
  id: "kat.pigments",
  name: "[KS] Pigments",
  category: "ingredients",
  rows: 1,
  columns: 8,
  areas: [
    {
      x: 1,
      expression: "[pigment] && [knock]",
    },
    {
      x: 2,
      expression: "[pigment] && [lantern]",
    },
    {
      x: 3,
      expression: "[pigment] && [forge]",
    },
    {
      x: 4,
      expression: "[pigment] && [edge]",
    },
    {
      x: 5,
      expression: "[pigment] && [winter]",
    },
    {
      x: 6,
      expression: "[pigment] && [heart]",
    },
    {
      x: 7,
      expression: "[pigment] && [grail]",
    },
    {
      x: 8,
      expression: "[pigment] && [moth]",
    },
  ],
};
const apostleForge: Shelf = {
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
const apostleLantern: Shelf = {
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
const waysThroughDream: Shelf = {
  name: "[KS] Ways Back Through Dream",
  id: "kat.mansus",
  category: "ways",
  columns: 2,
  rows: 3,
  areas: [
    {
      x: 1,
      y: 1,
      expression: "[waywood]",
    },
    { x: 2, y: 1, expression: "[waywhite]" },
    {
      x: 1,
      y: 2,
      expression:
        "[waystagbefore_1] || [waystagbefore_2] || [waystagbefore_3] || [waystagbefore_4] || [waystagbefore_5] || [waystag_after]",
    },
    { x: 2, y: 2, expression: "[wayspider]" },
    { x: 1, y: 3, expression: "[waypeacock]" },
    { x: 2, y: 3, expression: "[apostlelantern.pillar2]" },
  ],
};
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
const exileAllies: Shelf = {
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
const exileWincons: Shelf = {
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
const pentiments: Shelf = {
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
const ssLore: Shelf = {
  id: "kat.skinstealer.lore",
  name: "[KS] Skinstealer Lore",
  category: "",
  rows: 1,
  columns: 9,
  areas: [
    { x: 1, expression: "[lore.secrethistories]" },
    { x: 1, expression: "[lore.knock]" },
    { x: 1, expression: "[lore.lantern]" },
    { x: 1, expression: "[lore.forge]" },
    { x: 1, expression: "[lore.edge]" },
    { x: 1, expression: "[lore.winter]" },
    { x: 1, expression: "[lore.heart]" },
    { x: 1, expression: "[lore.grail]" },
    { x: 1, expression: "[lore.moth]" },
  ],
};
const ssAbilities: Shelf = {
  id: "kat.skinstealer.abilities",
  name: "[KS] Skinstealer Abilities",
  rows: 3,
  columns: 4,
  areas: [
    {
      expression: "[healthmoth]",
    },
    {
      x: 2,
      expression: "[reasonmoth]",
    },
    {
      x: 3,
      expression: "[passionmoth]",
    },
    {
      x: 4,
      expression: "[funds]",
    },
    {
      y: 2,
      expression: "[health]",
    },
    {
      x: 2,
      y: 2,
      expression: "[reason]",
    },
    {
      x: 3,
      y: 2,
      expression: "[passion]",
    },
    {
      x: 4,
      y: 2,
      expression: "[job]",
    },
    {
      y: 3,
      expression: "[vigour]",
    },
    {
      x: 2,
      y: 3,
      expression: "[breakthrough]",
    },
    {
      x: 3,
      y: 3,
      expression: "[inspiration]",
    },
    {
      x: 4,
      y: 3,
      expression: "[desire]",
    },
  ],
};
export const shelves = {
  shelves: [
    abilities,
    locations,
    spintria,
    lore,
    ssLore,
    tools,
    ssAbilities,
    rites,
    followers,
    loreNoSH,
    pentiments,
    waysThroughDream,
    apostleLantern,
    pigments,
    apostleGrail,
    apostleForge,
    cult,
    exileAllies,
    exileWeapons,
    exileWincons,
  ],
};
