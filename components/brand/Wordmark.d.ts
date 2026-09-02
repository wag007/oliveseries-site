/**
 * @startingPoint section="Brand" subtitle="The Olive wordmark, bubble and heavy cuts" viewport="700x260"
 */
export interface WordmarkProps {
  children?: React.ReactNode;
  /** bubble = Rubik Bubbles (hero); heavy = Rubik Black (footer / lockups). */
  variant?: "bubble" | "heavy";
  /** Preset px from the source file, or any number. */
  size?: "xl" | "lg" | "md" | "sm" | number;
  color?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
