import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { Statement } from "../type/Statement.jsx";

export function Overlay({ open = true, onClose, paragraphs = [], background = "var(--surface-overlay)", style, ...rest }) {
  if (!open) return null;
  return (
    <div
      style={{ position: "absolute", inset: 0, zIndex: 10, overflow: "auto", backgroundColor: background, display: "flex", flexDirection: "column", gap: 100, alignItems: "center", ...style }}
      {...rest}
    >
      <button onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name="close" size={100} color="var(--olive-white)" strokeWidth={2} />
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 80, alignItems: "center", padding: "0 80px 200px", boxSizing: "border-box", alignSelf: "stretch" }}>
        {paragraphs.map((p, i) => (
          <Statement key={i} tone="soft" color="var(--olive-white)" style={{ maxWidth: 1120 }}>{p}</Statement>
        ))}
      </div>
    </div>
  );
}
