export const tools: Shelf = {
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
