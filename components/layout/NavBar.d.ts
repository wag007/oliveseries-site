export interface NavBarItem { label: string; href?: string; onClick?: () => void }
export interface NavBarProps {
  /** Two items, pushed to the page edges — the source never shows more. */
  items?: NavBarItem[];
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
