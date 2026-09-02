import React from "react";

const SIZES = { xl: 199, lg: 182, md: 112, sm: 46 };

export function Wordmark({ children = "Olive", variant = "bubble", size = "lg", color = "var(--text-primary)", align = "center", style, ...rest }) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.lg;
  const bubble = variant === "bubble";
  return (
    <span
      style={{
        display: "block",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: px,
        lineHeight: bubble && px >= 199 ? 0.9 : 1.2,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        textAlign: align,
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
