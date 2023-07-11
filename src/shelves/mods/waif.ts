export const waifHourMems: Shelf = {
  category: "",
  id: "kat.waif.hour.mems",
  name: "[KS] Waif Hour Meories",
  $depends: ["2994256903"],
  rows: 3,
  priority: 3,
  columns: 7,
  areas: [
    // mothhour, watchman, velvet, malachite, thunderskin, mother of ants, wns, colonel, lionsmith, elegiast, beachcrow, meniscate, sun-in-rags, horned-axe, madrugad, grailhour, wolf divided, snw, flowermaker, forge of days
    {
      id: "kat.waif.hour.mems.1",
      background: "memory_shelf",
      expression: "[waif.memorymothhour] || [waif.memorychallengemothhour]",
      x: 1,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.2",
      background: "memory_shelf",
      expression: "[waif.memorywatchman] || [waif.memorychallengewatchman]",
      x: 2,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.3",
      background: "memory_shelf",
      expression: "[waif.memoryvelvet] || [waif.memorychallengevelvet]",
      x: 3,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.4",
      background: "memory_shelf",
      expression: "[waif.memorymalachite] || [waif.memorychallengemalachite]",
      x: 4,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.5",
      background: "memory_shelf",
      expression:
        "[waif.memorythunderskin] || [waif.memorychallengethunderskin]",
      x: 5,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.6",
      background: "memory_shelf",
      expression:
        "[waif.memorymotherofants] || [waif.memorychallengemotherofants]",
      x: 6,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.7",
      background: "memory_shelf",
      expression: "[waif.memorywns] || [waif.memorychallengewns]",
      x: 7,
      y: 1,
    },
    {
      id: "kat.waif.hour.mems.8",
      background: "memory_shelf",
      expression: "[waif.memorycolonel] || [waif.memorychallengecolonel]",
      x: 1,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.9",
      background: "memory_shelf",
      expression: "[waif.memorylionsmith] || [waif.memorychallengelionsmith]",
      x: 2,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.10",
      background: "memory_shelf",
      expression: "[waif.memoryelegiast] || [waif.memorychallengeelegiast]",
      x: 3,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.11",
      background: "memory_shelf",
      expression: "[waif.memorybeachcrow] || [waif.memorychallengebeachcrow]",
      x: 4,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.12",
      background: "memory_shelf",
      expression: "[waif.memorymeniscate] || [waif.memorychallengemeniscate]",
      x: 5,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.13",
      background: "memory_shelf",
      expression: "[waif.memorysuninrags] || [waif.memorychallengesuninrags]",
      x: 6,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.14",
      background: "memory_shelf",
      expression: "[waif.memoryhornedaxe] || [waif.memorychallengehornedaxe]",
      x: 7,
      y: 2,
    },
    {
      id: "kat.waif.hour.mems.15",
      background: "memory_shelf",
      expression: "[waif.memorymadrugad] || [waif.memorychallengemadrugad]",
      x: 1,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.16",
      background: "memory_shelf",
      expression: "[waif.memorygrailhour] || [waif.memorychallengegrailhour]",
      x: 2,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.17",
      background: "memory_shelf",
      expression:
        "[waif.memorywolfdivided] || [waif.memorychallengewolfdivided]",
      x: 3,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.18",
      background: "memory_shelf",
      expression: "[waif.memoryvagabond] || [waif.memorychallengevagabond]",
      x: 4,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.19",
      background: "memory_shelf",
      expression: "[waif.memorysnw] || [waif.memorychallengesnw]",
      x: 5,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.20",
      background: "memory_shelf",
      expression:
        "[waif.memoryflowermaker] || [waif.memorychallengeflowermaker]",
      x: 6,
      y: 3,
    },
    {
      id: "kat.waif.hour.mems.21",
      background: "memory_shelf",
      expression:
        "[waif.memoryforgeofdays] || [waif.memorychallengeforgeofdays]",
      x: 7,
      y: 3,
    },
  ],
};
export const waifPracticalShelf: Shelf = {
  $depends: ["2994256903"],
  category: "",
  id: "kat.waif.practical",
  name: "[KS] Waif Practical Items",
  background: "job",
  style: "aligncenter",
  rows: 1,
  columns: 9,
  areas: [
    {
      id: "kat.waif.practical.secrethistories",
      expression:
        "[waif.practical] && ![waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/secrethistories]",
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.knock",
      expression:
        "[waif.practical] && ![waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/knock]",
      x: 2,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.lantern",
      expression:
        "[waif.practical] && ![waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/lantern]",
      x: 3,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.forge",
      expression:
        "[waif.practical] && ![waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/forge]",
      x: 4,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.edge",
      expression:
        "[waif.practical] && ![waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/edge]",
      x: 5,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.winter",
      expression:
        "[waif.practical] && ![waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/winter]",
      x: 6,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.heart",
      expression:
        "[waif.practical] && ![waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/heart]",
      x: 7,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.moth",
      expression:
        "[waif.practical] && ![waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/moth]",
      x: 8,
      background: "job_shelf",
    },
    {
      id: "kat.waif.practical.grail",
      expression:
        "[waif.practical] && ![waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{[waif.practical] && ![waif.occult] && ![waif.hourmemory]}:aspectmax/grail]",
      x: 9,
      background: "job_shelf",
    },
  ],
};
export const waifOccultShelf: Shelf = {
  category: "",
  id: "kat.waif.occult",
  name: "[KS] Waif Occult Items",
  $depends: ["2994256903"],
  rows: 1,
  columns: 9,
  background: "ritual",
  style: "aligncenter",
  areas: [
    {
      id: "kat.waif.occult.secrethistories",
      expression:
        "![waif.practical] && [waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/secrethistories]",
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.knock",
      expression:
        "![waif.practical] && [waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/knock]",
      x: 2,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.lantern",
      expression:
        "![waif.practical] && [waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/lantern]",
      x: 3,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.forge",
      expression:
        "![waif.practical] && [waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/forge]",
      x: 4,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.edge",
      expression:
        "![waif.practical] && [waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/edge]",
      x: 5,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.winter",
      expression:
        "![waif.practical] && [waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/winter]",
      x: 6,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.heart",
      expression:
        "![waif.practical] && [waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/heart]",
      x: 7,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.moth",
      expression:
        "![waif.practical] && [waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/moth]",
      x: 8,
      background: "ritual_shelf",
    },
    {
      id: "kat.waif.occult.grail",
      expression:
        "![waif.practical] && [waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{![waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/grail]",
      x: 9,
      background: "ritual_shelf",
    },
  ],
};
export const waifBothShelf: Shelf = {
  category: "",
  $depends: ["2994256903"],
  id: "kat.waif.both",
  name: "[KS] Waif Both Items",
  rows: 1,
  columns: 9,
  areas: [
    // secrethistories, knock, lantern, forge, edge, winter, heart, moth, grail
    {
      id: "kat.waif.both.secrethistories",
      expression:
        "[waif.practical] && [waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/secrethistories]",
      background: "lore_secrethistories_shelf",
    },
    {
      id: "kat.waif.both.knock",
      expression:
        "[waif.practical] && [waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/knock]",
      background: "lore_knock_shelf",
      x: 2,
    },
    {
      id: "kat.waif.both.lantern",
      expression:
        "[waif.practical] && [waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/lantern]",
      background: "lore_lantern_shelf",
      x: 3,
    },
    {
      id: "kat.waif.both.forge",
      expression:
        "[waif.practical] && [waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/forge]",
      background: "lore_forge_shelf",
      x: 4,
    },
    {
      id: "kat.waif.both.edge",
      expression:
        "[waif.practical] && [waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/edge]",
      background: "lore_edge_shelf",
      x: 5,
    },
    {
      id: "kat.waif.both.winter",
      expression:
        "[waif.practical] && [waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/winter]",
      background: "lore_winter_shelf",
      x: 6,
    },
    {
      id: "kat.waif.both.heart",
      expression:
        "[waif.practical] && [waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/heart]",
      background: "lore_heart_shelf",
      x: 7,
    },
    {
      id: "kat.waif.both.moth",
      expression:
        "[waif.practical] && [waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/moth]",
      background: "lore_moth_shelf",
      x: 8,
    },
    {
      id: "kat.waif.both.grail",
      expression:
        "[waif.practical] && [waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{[waif.practical] && [waif.occult] && ![waif.hourmemory]}:aspectmax/grail]",
      background: "lore_grail_shelf",
      x: 9,
    },
  ],
};
export const waifDesires: Shelf = {
  category: "",
  $depends: ["2994256903"],
  id: "kat.waif.desires",
  name: "[KS] Waif Desires",
  background: "desire",
  style: "aligncenter",
  rows: 1,
  columns: 8,
  areas: [
    { expression: "[desire]", x: 1, background: "desire_shelf" },
    { expression: "[desire]", x: 2, background: "desire_shelf" },
    { expression: "[desire]", x: 3, background: "desire_shelf" },
    { expression: "[desire]", x: 4, background: "desire_shelf" },
    { expression: "[desire]", x: 5, background: "desire_shelf" },
    { expression: "[desire]", x: 6, background: "desire_shelf" },
    { expression: "[desire]", x: 7, background: "desire_shelf" },
    { expression: "[desire]", x: 8, background: "desire_shelf" },
  ],
};
export const waifLocations: Shelf = {
  category: "",
  id: "kat.waif.locations",
  $depends: ["2994256903"],
  name: "[KS] Waif Locations",
  rows: 1,
  style: "aligncenter",
  columns: 4,
  areas: [
    {
      expression:
        "[waif.inruins] || [waif.insea] || [waif.incaves] || [waif.inforest]",
      x: 1,
      background: "location_shelf",
    },
    {
      expression:
        "[waif.inruins] || [waif.insea] || [waif.incaves] || [waif.inforest]",
      x: 2,
      background: "location_shelf",
    },
    {
      expression:
        "[waif.inruins] || [waif.insea] || [waif.incaves] || [waif.inforest]",
      x: 3,
      background: "location_shelf",
    },
    {
      expression:
        "[waif.inruins] || [waif.insea] || [waif.incaves] || [waif.inforest]",
      x: 4,
      background: "location_shelf",
    },
  ],
};
export const waifChoices: Shelf = {
  category: "",
  id: "kat.waif.choices",
  background: "insight",
  style: "aligncenter",
  name: "[KS] Waif Choices",
  $depends: ["2994256903"],
  rows: 1,
  columns: 4,
  areas: [
    { expression: "[waif.choice1]", background: "choice_shelf" },
    { expression: "[waif.choice2]", x: 2, background: "choice_shelf" },
    { expression: "[waif.choice3]", x: 3, background: "choice_shelf" },
    { expression: "[waif.choice0]", x: 4, background: "choice_shelf" },
  ],
};
