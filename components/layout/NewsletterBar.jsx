import React from "react";
import { Icon } from "../icons/Icon.jsx";

export function NewsletterBar({ children = "Sign Up for our Newsletter", href = "#", style, ...rest }) {
  return (
    <a
      href={href}
      style={{ textDecoration: "none", height: 160, alignSelf: "stretch", boxShadow: "inset 0 0 0 1px var(--border-strong)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "2px 1px", boxSizing: "border-box", ...style }}
      {...rest}
    >
      <Icon name="arrow-up-right" size={157} color="var(--text-primary)" />
      <span style={{ flexGrow: 1, padding: "0 157px", textAlign: "center", fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text-primary)", boxSizing: "border-box", marginLeft: -157 }}>{children}</span>
    </a>
  );
}
