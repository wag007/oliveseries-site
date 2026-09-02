export interface PhotoTileProps {
  src?: string;
  alt?: string;
  /** 20% black overlay, used when text sits on top. */
  scrim?: boolean;
  height?: number;
  style?: React.CSSProperties;
}
export declare function PhotoTile(props: PhotoTileProps): JSX.Element;
