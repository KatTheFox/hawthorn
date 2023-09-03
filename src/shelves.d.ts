type Shelf = {
  /** The unique id for your shelf.*/
  id: string;
  /** Which mods need to be loaded for the shelf to load */
  $depends?: string[];
  /** Readable name. Will be displayed in the settings. Keep it short. */
  name: string;
  /** The icon that will be displayed in the shelves menu. 128x128 preferred. For a new image, put it anywhere inside the images/ui folder. To use an existing image from another folder, prefix the id. Example: "aspects:lore" */
  icon?: string;
  /** Optional. How many rows for the entire shelf. Default=1. */
  rows?: number;
  /** Optional. How many columns for the entire shelf. Default=1 */
  columns?: number;
  /** Optional, default=2, A value from 0-4 describing the priority of the shelf. Higher priority shelves will grab cards first. */
  priority?: number;
  /** Optional. An expression describing what to move into that shelf. */
  expression?: string;
  /** Optional. An image to display as a background. */
  background?: string;
  /** Which legacies this shelf is recommended for use with. */
  legacies?: string[];
  /** Controls the alignment of the background image. */
  style?: ShelfStyle;
  /** A list of areas for your shelf. */
  areas: ShelfArea[];
  /** Which category your Shelf falls under. Used for menu organization. */
  category?: ShelfCategory;
};
type ShelfCategory =
  | "tools"
  | "abilities"
  | "lore"
  | "texts"
  | "vaults"
  | "followers"
  | "rites"
  | "influences"
  | "jobs"
  | "ways"
  | "reputation"
  | "ingredients"
  | "apostles"
  | "dancer"
  | "exile"
  | "ghoul"
  | "priest"
  | "";

type ShelfStyle = "aligncenter" | "stretch" | "repeat";
type ShelfArea = {
  /** Optional. An expression describing what to move into that shelf. */
  expression: string;
  /** Optional. X position of the area. Default=1 */
  x?: number;
  /** Optional. Y position of the area. Default=1 */
  y?: number;
  /** Optional. An image to display as a background. */
  background?: string;
  id?: string;
  /** Optional. How many rows for this area. Default=1 */
  rows?: number;
  /** Optional. How many columns for this area. Default=1 */
  columns?: number;
  /** Controls the alignment of the background image. */
  style?: ShelfStyle;
};
