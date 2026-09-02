/**
 * @startingPoint section="Tiles" subtitle="Flat colour tile with one uppercase word" viewport="700x400"
 */
export interface ColorTileProps {
  children?: React.ReactNode;
  /** Any tile-palette token. */
  color?: string;
  textColor?: string;
  height?: number;
  style?: React.CSSProperties;
}
export declare function ColorTile(props: ColorTileProps): JSX.Element;
