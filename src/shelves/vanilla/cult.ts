export const cult: Shelf = {
  category: "",
  id: "kat.cult",
  name: "<sprite name=colours.liminal> Cult, HQ, and Mentor",
  rows: 1,
  columns: 3,
  areas: [
    {
      x: 1,
      expression: "[society]",
      background: "hawthorn.society_shelf",
    },
    {
      x: 2,
      expression: "[hq]",
      background: "hawthorn.location_shelf",
    },
    {
      x: 3,
      expression: "[mentor]",
      background: "hawthorn.mentor_shelf",
    },
  ],
};
// DO NOT ADD THIS TO data.ts!! The expressions here are too large for the engine to process and it
// crashes the game on startup. You have been warned
export const cult2: Shelf = {
  category: "",
  id: "kat.cult2",
  name: "<sprite name=colours.liminal> Cult, Cult Tool, and Cult Lore",
  rows: 1,
  priority: 4,
  columns: 3,
  rootCache: [
    {
      cultAspect:
        "if([~/+:cultsecrethistories_1]>0,9,if([~/+:society:aspectmax/venerationlantern]>0,1,if([~/+:society:aspectmax/venerationforge]>0,2,if([~/+:society:aspectmax/venerationedge]>0,3,if([~/+:society:aspectmax/venerationwinter]>0,4,if([~/+:society:aspectmax/venerationheart]>0,5,if([~/+:society:aspectmax/venerationgrail]>0,6,if([~/+:society:aspectmax/venerationmoth]>0,7,if([~/+:society:aspectmax/venerationknock]>0,8,0)))))))))",
    },
  ],
  areas: [
    {
      x: 1,
      expression: "[society]",
      background: "hawthorn.society_shelf",
    },
    {
      x: 2,
      expression:
        "[tool] && ([( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]>0) && [( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]=[~/tabletop:{[tool] && ![( [root/cultAspect] = 1 && [paintingmasterlantern] ) || ( [root/cultAspect] = 2 && [paintingmasterforge] ) || ( [root/cultAspect] = 3 && [paintingmasteredge] ) || ( [root/cultAspect] = 4 && [paintingmasterwinter] ) || ( [root/cultAspect] = 5 && [paintingmasterheart] ) || ( [root/cultAspect] = 6 && [paintingmastergrail] ) || ( [root/cultAspect] = 7 && [paintingmastermoth] ) || ( [root/cultAspect] = 8 && [paintingmasterknock] )|| ( [root/cultAspect] = 9 && [paintingmastersecrethistories] ) || ( [root/cultAspect] = 0 && [paintingmasterlantern] )]}:aspectmax/( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]",
      background: "hawthorn.tool_shelf",
    },
    {
      x: 3,
      expression:
        "[lore] && ([( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]>0) && [( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]=[~/tabletop:lore:aspectmax/( [root/cultAspect] = 1 && [lantern] ) || ( [root/cultAspect] = 2 && [forge] ) || ( [root/cultAspect] = 3 && [edge] ) || ( [root/cultAspect] = 4 && [winter] ) || ( [root/cultAspect] = 5 && [heart] ) || ( [root/cultAspect] = 6 && [grail] ) || ( [root/cultAspect] = 7 && [moth] ) || ( [root/cultAspect] = 8 && [knock] )|| ( [root/cultAspect] = 9 && [secrethistories] ) || ( [root/cultAspect] = 0 && [lantern] )]",
      background: "hawthorn.lore_shelf",
    },
  ],
};
