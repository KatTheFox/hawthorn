type Shelf={
    /** The unique id for your shelf.*/
    id:string,
    /** Readable name. Will be displayed in the settings. Keep it short. */
    name:string,
    /** Optional. How many rows for the entire shelf. Default=1. */
    rows?:number,
    /** Optional. How many columns for the entire shelf. Default=1 */
    columns?:number,
    /** Optional. An expression describing what to move into that shelf. */
    expression?:string,
    /** Optional. An image to display as a background. */
    background?:string,
    /** Controls the alignment of the background image. */
    style?:ShelfStyle
    /** A list of areas for your shelf. */
    areas:ShelfArea[]
}
type ShelfStyle="aligncenter" | "stretch" | "repeat"
type ShelfArea={
    /** Optional. An expression describing what to move into that shelf. */
    expression:string,
    /** Optional. X position of the area. Default=1 */
    x?:number,
    /** Optional. Y position of the area. Default=1 */
    y?:number,
    /** Optional. An image to display as a background. */
    background?:string,
    id:string,
    /** Optional. How many rows for this area. Default=1 */
    rows?:number
    /** Optional. How many columns for this area. Default=1 */
    columns?:number
    /** Controls the alignment of the background image. */
    style?:ShelfStyle,
}