import React from "react";
import { Icon } from "../icons/Icon.jsx";

export function LinkTile({ children, href = "#", color = "var(--olive-black)", textColor = "var(--olive-white)", src, height = 400, style, ...rest }) {
  const bg = src
    ? { background: `linear-gradient(var(--scrim-photo),var(--scrim-photo)), url(${src}) center / cover no-repeat` }
    : { backgroundColor: color };
  return (
    <a
      href={href}
      style={{ textDecoration: "none", height, minWidth: 360, flexGrow: 1, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", padding: "21px 13px", boxSizing: "border-box", ...bg, ...style }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 14, lineHeight: 1.2, letterSpacing: "-0.01em", color: textColor }}>{children}</span>
      <Icon name="arrow-up-right" size={48} color={textColor} />
    </a>
  );
}
