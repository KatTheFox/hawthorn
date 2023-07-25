export const exorcistTools: Shelf = {
  id: "kat.exorcist.tools",
  name: "<sprite name=colours.liminal> Exorcist Tools",
  $depends: ["3001901429"],
  rows: 1,
  priority: 4,
  columns: 7,
  areas: [
    {
      x: 1,
      background: "tool_shelf",
      expression: "[exorcist.mirror]",
    },
    {
      x: 2,
      background: "tool_shelf",
      expression: "[exorcist.candle]",
    },
    {
      x: 3,
      background: "tool_shelf",
      expression: "[exorcist.knife]",
    },
    {
      x: 4,
      background: "tool_shelf",
      expression: "[exorcist.bell]",
    },
    {
      x: 5,
      background: "tool_shelf",
      expression: "[exorcist.camera]",
    },
    {
      x: 6,
      background: "tool_shelf",
      expression: "[exorcist.board]",
    },
    {
      x: 7,
      background: "tool_shelf",
      expression: "[exorcist.holybook]",
    },
  ],
  category: "tools",
};
export const exorcistJob: Shelf = {
  id: "kat.exorcist.job",
  name: "<sprite name=colours.liminal> Exorcist Job",
  $depends: ["3001901429"],
  rows: 1,
  columns: 3,
  priority: 4,
  areas: [
    {
      x: 1,
      background: "job_shelf",
      expression: "[exorcist.job] || [exorcist.scamjob]",
    },
    {
      x: 2,
      background: "vault_shelf",
      expression:
        "[exorcist.haunted] || [exorcist.scamjobhouse] || [exorcist.firsthouse]",
    },
    {
      x: 3,
      background: "location_shelf",
      expression: "[exorcist.office]",
    },
  ],
};
