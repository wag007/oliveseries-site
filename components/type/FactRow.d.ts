export interface FactRowItem { label: string; value: string }
/**
 * @startingPoint section="Layout" subtitle="What / When / Where fact row" viewport="700x300"
 */
export interface FactRowProps {
  /** Source uses three: What, When, Where. */
  items?: FactRowItem[];
  style?: React.CSSProperties;
}
export declare function FactRow(props: FactRowProps): JSX.Element;
