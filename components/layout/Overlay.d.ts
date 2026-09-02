export interface OverlayProps {
  open?: boolean;
  onClose?: () => void;
  /** Each entry renders as a 42px SemiBold centred paragraph, 80px apart. */
  paragraphs?: string[];
  background?: string;
  style?: React.CSSProperties;
}
export declare function Overlay(props: OverlayProps): JSX.Element;
