export const scholarClasses: Shelf = {
  id: "kat.scholar.class",
  $depends: ["3230035891"],
  category: "",
  rows: 1,
  columns: 3,
  name: "<sprite name=colours.liminal> Scholar Classes",
  expression: "[scholar.class]",
  areas: [
    {
      expression: "[scholar.class.etymology]",
      background: "hawthorn.job_shelf",
    },
    {
      x: 2,
      expression: "[scholar.class.mathematics]",
      background: "hawthorn.job_shelf",
    },
    {
      x: 3,
      expression: "[scholar.class.poetry]",
      background: "hawthorn.job_shelf",
    },
  ],
};
