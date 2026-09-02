export interface ObjectTileProps {
  /** Path to the cut-out image. */
  src?: string;
  alt?: string;
  color?: string;
  title?: string;
  /** Secondary caption, rendered at 60% opacity. */
  meta?: string;
  textColor?: string;
  fit?: "contain" | "cover";
  height?: number;
  style?: React.CSSProperties;
}
export declare function ObjectTile(props: ObjectTileProps): JSX.Element;
