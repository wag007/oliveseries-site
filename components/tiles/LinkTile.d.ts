export interface LinkTileProps {
  children?: React.ReactNode;
  href?: string;
  color?: string;
  textColor?: string;
  /** Optional photo background; a 20% black scrim is applied over it. */
  src?: string;
  height?: number;
  style?: React.CSSProperties;
}
export declare function LinkTile(props: LinkTileProps): JSX.Element;
