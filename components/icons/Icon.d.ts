export interface IconProps {
  /** The two marks the source file defines. */
  name?: "arrow-up-right" | "close";
  /** Hit-area size in px. Source uses 48 inline and 157 in the footer bar. */
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
