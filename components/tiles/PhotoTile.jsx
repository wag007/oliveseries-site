import React from "react";

export function PhotoTile({ src, alt = "", scrim = false, height = 400, style, ...rest }) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ height, minWidth: 360, flexGrow: 1, overflow: "hidden", background: `${scrim ? "linear-gradient(var(--scrim-photo),var(--scrim-photo))," : ""}url(${src}) center / cover no-repeat`, ...style }}
      {...rest}
    />
  );
}
