/**
 * @startingPoint section="Layout" subtitle="Hero wordmark with tagline and handle" viewport="1280x560"
 */
export interface PageHeaderProps {
  title?: string;
  /** Left-hand mono descriptor, e.g. "A lecture series in bars". */
  tagline?: string;
  /** Right-hand underlined handle, e.g. "@oliveseries". */
  handle?: string;
  handleHref?: string;
  style?: React.CSSProperties;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
