import React from "react";

export function ObjectTile({ src, alt = "", color = "var(--olive-ink)", title, meta, textColor = "var(--olive-white)", fit = "contain", height = 400, style, ...rest }) {
  return (
    <div
      style={{ height, minWidth: 360, flexGrow: 1, overflow: "hidden", backgroundColor: color, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: "21px 13px", boxSizing: "border-box", ...style }}
      {...rest}
    >
      <div role="img" aria-label={alt} style={{ flexGrow: 1, alignSelf: "stretch", background: `url(${src}) center / ${fit} no-repeat` }} />
      <div style={{ height: 49, display: "flex", flexDirection: "row", gap: 20, padding: "16px 0", justifyContent: "center", alignItems: "center", boxSizing: "border-box", alignSelf: "stretch" }}>
        <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 14, lineHeight: 1.2, letterSpacing: "-0.01em", color: textColor }}>{title}</span>
        {meta ? <span style={{ opacity: 0.6, fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 14, lineHeight: 1.2, letterSpacing: "-0.01em", color: textColor }}>{meta}</span> : null}
      </div>
    </div>
  );
}
