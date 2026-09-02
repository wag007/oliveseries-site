export interface PhotoLinkProps {
  src?: string;
  alt?: string;
  /** Roboto Mono 12px caption; the source literally reads "Link". */
  label?: string;
  href?: string;
  /** Source card is 180px wide with a 154px image. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function PhotoLink(props: PhotoLinkProps): JSX.Element;
