import React from "react";

export function TileGrid({ children, gap = 10, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap, alignItems: "flex-start", alignContent: "space-between", alignSelf: "stretch", maxWidth: "var(--page-max)", ...style }} {...rest}>
      {children}
    </div>
  );
}
