export interface StatementProps {
  children?: React.ReactNode;
  /** hard = 60px Bold manifesto line; soft = 42px SemiBold overlay paragraph. */
  tone?: "hard" | "soft";
  color?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}
export declare function Statement(props: StatementProps): JSX.Element;
