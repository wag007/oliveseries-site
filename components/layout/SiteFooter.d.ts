/**
 * @startingPoint section="Layout" subtitle="Kicker, heavy wordmark, legal / handle row" viewport="1280x420"
 */
export interface SiteFooterProps {
  /** 36px uppercase line above the mark. */
  kicker?: string;
  title?: string;
  legal?: string;
  handle?: string;
  handleHref?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
