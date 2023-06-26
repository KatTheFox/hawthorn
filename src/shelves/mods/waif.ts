export const waifHourMems: Shelf = {
  category: "",
  id: "kat.waif.hour.mems",
  name: "[KS] Waif Hour Meories",
  rows: 3,
  columns: 7,
  areas: [
    // moth, watchman, velvet, malachite, thunderskin, mother of ants, witch and sister, colonel, lionsmith, elegiast, beachcrow, meniscate, sun-in-rags, horned-axe, madrugad, red grail, wolf divided, sister-and-witch, flowermaker, forge of days
    {
      id: "kat.waif.hour.mems.1",
      expression: "[waif.memorymothhour] || [waif.memorychallengemothhour]",
    },
    {
      id: "kat.waif.hour.mems.2",
      expression: "[waif.memorywatchman] || [waif.memorychallengewatchman]",
    },
    {
      id: "kat.waif.hour.mems.3",
      expression: "[waif.memoryvelvet] || [waif.memorychallengevelvet]",
    },
    {
      id: "kat.waif.hour.mems.4",
      expression: "[waif.memorymalachite] || [waif.memorychallengemalachite]",
    },
    {
      id: "kat.waif.hour.mems.5",
      expression:
        "[waif.memorythunderskin] || [waif.memorychallengethunderskin]",
    },
    {
      id: "kat.waif.hour.mems.6",
      expression:
        "[waif.memorymotherofants] || [waif.memorychallengemotherofants]",
    },
    {
      id: "kat.waif.hour.mems.7",
      expression: "[waif.memorywns] || [waif.memorychallengewns]",
    },
    {
      id: "kat.waif.hour.mems.8",
      expression: "[waif.memorycolonel] || [waif.memorychallengecolonel]",
    },
    {
      id: "kat.waif.hour.mems.9",
      expression: "[waif.memorylionsmith] || [waif.memorychallengelionsmith]",
    },
    {
      id: "kat.waif.hour.mems.10",
      expression: "[waif.memoryelegiast] || [waif.memorychallengeelegiast]",
    },
    {
      id: "kat.waif.hour.mems.11",
      expression: "[waif.memorybeachcrow] || [waif.memorychallengebeachcrow]",
    },
    {
      id: "kat.waif.hour.mems.12",
      expression: "[waif.memorymeniscate] || [waif.memorychallengemeniscate]",
    },
    {
      id: "kat.waif.hour.mems.13",
      expression: "[waif.memorysuninrags] || [waif.memorychallengesuninrags]",
    },
    {
      id: "kat.waif.hour.mems.14",
      expression: "[waif.memoryhornedaxe] || [waif.memorychallengehornedaxe]",
    },
    {
      id: "kat.waif.hour.mems.15",
      expression: "[waif.memorymadrugad] || [waif.memorychallengemadrugad]",
    },
    {
      id: "kat.waif.hour.mems.16",
      expression: "[waif.memorygrailhour] || [waif.memorychallengegrailhour]",
    },
    {
      id: "kat.waif.hour.mems.17",
      expression:
        "[waif.memorywolfdivided] || [waif.memorychallengewolfdivided]",
    },
    {
      id: "kat.waif.hour.mems.18",
      expression: "[waif.memoryvagabond] || [waif.memorychallengevagabond]",
    },
    {
      id: "kat.waif.hour.mems.19",
      expression: "[waif.memorysnw] || [waif.memorychallengesnw]",
    },
    {
      id: "kat.waif.hour.mems.20",
      expression:
        "[waif.memoryflowermaker] || [waif.memorychallengeflowermaker]",
    },
    {
      id: "kat.waif.hour.mems.21",
      expression:
        "[waif.memoryforgeofdays] || [waif.memorychallengeforgeofdays]",
    },
  ],
};
export const waifPracticalShelf: Shelf = {
  category: "",
  id: "kat.waif.practical",
  name: "[KS] Waif Practical Placeholder",
  rows: 1,
  columns: 9,
  areas: [
    // secrethistories, knock, lantern, forge, edge, winter, heart, moth, grail
    {
      id: "kat.waif.practical.secrethistories",
      expression:
        "[waif.practical] && ![waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/secrethistories]",
    },
    {
      id: "kat.waif.practical.knock",
      expression:
        "[waif.practical] && ![waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/knock]",
    },
    {
      id: "kat.waif.practical.lantern",
      expression:
        "[waif.practical] && ![waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/lantern]",
    },
    {
      id: "kat.waif.practical.forge",
      expression:
        "[waif.practical] && ![waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/forge]",
    },
    {
      id: "kat.waif.practical.edge",
      expression:
        "[waif.practical] && ![waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/edge]",
    },
    {
      id: "kat.waif.practical.winter",
      expression:
        "[waif.practical] && ![waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/winter]",
    },
    {
      id: "kat.waif.practical.heart",
      expression:
        "[waif.practical] && ![waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/heart]",
    },
    {
      id: "kat.waif.practical.moth",
      expression:
        "[waif.practical] && ![waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/moth]",
    },
    {
      id: "kat.waif.practical.grail",
      expression:
        "[waif.practical] && ![waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{[waif.practical] && ![waif.occult]}:aspectmax/grail]",
    },
  ],
};
export const waifOccultShelf: Shelf = {
  category: "",
  id: "kat.waif.occult",
  name: "[KS] Waif Occult Placeholder",
  rows: 1,
  columns: 9,
  areas: [
    // secrethistories, knock, lantern, forge, edge, winter, heart, moth, grail
    {
      id: "kat.waif.occult.secrethistories",
      expression:
        "![waif.practical] && [waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/secrethistories]",
    },
    {
      id: "kat.waif.occult.knock",
      expression:
        "![waif.practical] && [waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/knock]",
    },
    {
      id: "kat.waif.occult.lantern",
      expression:
        "![waif.practical] && [waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/lantern]",
    },
    {
      id: "kat.waif.occult.forge",
      expression:
        "![waif.practical] && [waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/forge]",
    },
    {
      id: "kat.waif.occult.edge",
      expression:
        "![waif.practical] && [waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/edge]",
    },
    {
      id: "kat.waif.occult.winter",
      expression:
        "![waif.practical] && [waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/winter]",
    },
    {
      id: "kat.waif.occult.heart",
      expression:
        "![waif.practical] && [waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/heart]",
    },
    {
      id: "kat.waif.occult.moth",
      expression:
        "![waif.practical] && [waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/moth]",
    },
    {
      id: "kat.waif.occult.grail",
      expression:
        "![waif.practical] && [waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{!waif.practical] && [waif.occult]}:aspectmax/grail]",
    },
  ],
};
export const waifBothShelf: Shelf = {
  category: "",
  id: "kat.waif.both",
  name: "[KS] Waif Both Placeholder",
  rows: 1,
  columns: 9,
  areas: [
    // secrethistories, knock, lantern, forge, edge, winter, heart, moth, grail
    {
      id: "kat.waif.both.secrethistories",
      expression:
        "[waif.practical] && [waif.occult] && ([secrethistories]>0) && [secrethistories]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/secrethistories]",
    },
    {
      id: "kat.waif.both.knock",
      expression:
        "[waif.practical] && [waif.occult] && ([knock]>0) && [knock]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/knock]",
    },
    {
      id: "kat.waif.both.lantern",
      expression:
        "[waif.practical] && [waif.occult] && ([lantern]>0) && [lantern]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/lantern]",
    },
    {
      id: "kat.waif.both.forge",
      expression:
        "[waif.practical] && [waif.occult] && ([forge]>0) && [forge]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/forge]",
    },
    {
      id: "kat.waif.both.edge",
      expression:
        "[waif.practical] && [waif.occult] && ([edge]>0) && [edge]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/edge]",
    },
    {
      id: "kat.waif.both.winter",
      expression:
        "[waif.practical] && [waif.occult] && ([winter]>0) && [winter]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/winter]",
    },
    {
      id: "kat.waif.both.heart",
      expression:
        "[waif.practical] && [waif.occult] && ([heart]>0) && [heart]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/heart]",
    },
    {
      id: "kat.waif.both.moth",
      expression:
        "[waif.practical] && [waif.occult] && ([moth]>0) && [moth]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/moth]",
    },
    {
      id: "kat.waif.both.grail",
      expression:
        "[waif.practical] && [waif.occult] && ([grail]>0) && [grail]=[~/tabletop:{[waif.practical] && [waif.occult]}:aspectmax/grail]",
    },
  ],
};
export const waifDesires: Shelf = {
  category: "",
  id: "kat.waif.desires",
  name: "[KS] Waif Desires",
  rows: 1,
  columns: 8,
  areas: [{ expression: "[desire]", columns: 8 }],
};
export const waifLocations: Shelf = {
  category: "",
  id: "kat.waif.locations",
  name: "[KS] Waif Locations",
  rows: 1,
  columns: 8,
  areas: [
    {
      expression:
        "[waif.inruins] || [waif.insea] || [waif.incaves] || [waif.inforest]",
      columns: 8,
    },
  ],
};
