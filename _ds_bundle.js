/* @ds-bundle: {"format":4,"namespace":"OliveDesignSystem_d726ce","components":[{"name":"ColorDot","sourcePath":"components/brand/ColorDot.jsx"},{"name":"SectionLabel","sourcePath":"components/brand/SectionLabel.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"NavBar","sourcePath":"components/layout/NavBar.jsx"},{"name":"NewsletterBar","sourcePath":"components/layout/NewsletterBar.jsx"},{"name":"Overlay","sourcePath":"components/layout/Overlay.jsx"},{"name":"PageHeader","sourcePath":"components/layout/PageHeader.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"PhotoLink","sourcePath":"components/media/PhotoLink.jsx"},{"name":"ColorTile","sourcePath":"components/tiles/ColorTile.jsx"},{"name":"LinkTile","sourcePath":"components/tiles/LinkTile.jsx"},{"name":"ObjectTile","sourcePath":"components/tiles/ObjectTile.jsx"},{"name":"PhotoTile","sourcePath":"components/tiles/PhotoTile.jsx"},{"name":"TileGrid","sourcePath":"components/tiles/TileGrid.jsx"},{"name":"FactRow","sourcePath":"components/type/FactRow.jsx"},{"name":"Statement","sourcePath":"components/type/Statement.jsx"}],"sourceHashes":{"components/brand/ColorDot.jsx":"b6e36eba871e","components/brand/SectionLabel.jsx":"d1a17d38337b","components/brand/Wordmark.jsx":"f7392bdb02ae","components/icons/Icon.jsx":"8b9478a092b1","components/layout/NavBar.jsx":"b9521d418642","components/layout/NewsletterBar.jsx":"cbffcc5f1c4c","components/layout/Overlay.jsx":"8ff0ca77e73b","components/layout/PageHeader.jsx":"1008549253d7","components/layout/SiteFooter.jsx":"25177d4af539","components/media/PhotoLink.jsx":"31361b40f91e","components/tiles/ColorTile.jsx":"8e9932dd3d6b","components/tiles/LinkTile.jsx":"b1d8148470d2","components/tiles/ObjectTile.jsx":"7571d4d807a0","components/tiles/PhotoTile.jsx":"f2ab3537330e","components/tiles/TileGrid.jsx":"4e0f0f0ef0cb","components/type/FactRow.jsx":"805abdc24ecd","components/type/Statement.jsx":"c23b70931813","ui_kits/website/About.jsx":"a201d4eadf69","ui_kits/website/Home.jsx":"8746c82b967e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OliveDesignSystem_d726ce = window.OliveDesignSystem_d726ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ColorDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ColorDot({
  color = "var(--olive-black)",
  size = 103,
  label,
  style,
  ...rest
}) {
  const dot = /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      flexShrink: 0,
      ...style
    }
  }, rest));
  if (!label) return dot;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "flex-start"
    }
  }, dot, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { ColorDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ColorDot.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 62,
      padding: "24px 0",
      boxSizing: "border-box",
      border: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xl: 199,
  lg: 182,
  md: 112,
  sm: 46
};
function Wordmark({
  children = "Olive",
  variant = "bubble",
  size = "lg",
  color = "var(--text-primary)",
  align = "center",
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.lg;
  const bubble = variant === "bubble";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: px,
      lineHeight: bubble && px >= 199 ? 0.9 : 1.2,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      textAlign: align,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Glyph paths transcribed verbatim from the .fig vectors.
   The set the source defines is exactly two marks: arrow-up-right and the close X. */
const GLYPHS = {
  "arrow-up-right": /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M0 20L20 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h20v20"
  })),
  close: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M0 0L20 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 0L0 20"
  }))
};
function Icon({
  name = "arrow-up-right",
  size = 48,
  color = "currentColor",
  strokeWidth = 1,
  style,
  ...rest
}) {
  const inner = Math.round(size * 0.4167);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      color,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: inner,
    height: inner,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth * (20 / inner),
    vectorEffect: "non-scaling-stroke",
    "aria-hidden": "true"
  }, GLYPHS[name] || GLYPHS["arrow-up-right"]));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  items = [{
    label: "About",
    href: "#"
  }, {
    label: "Directions",
    href: "#"
  }],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      height: 31,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "0 30px",
      boxSizing: "border-box",
      alignSelf: "stretch",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: it.href || "#",
    onClick: it.onClick,
    style: {
      textDecoration: "none",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, it.label)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/NewsletterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NewsletterBar({
  children = "Sign Up for our Newsletter",
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      textDecoration: "none",
      height: 160,
      alignSelf: "stretch",
      boxShadow: "inset 0 0 0 1px var(--border-strong)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2px 1px",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 157,
    color: "var(--text-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flexGrow: 1,
      padding: "0 157px",
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 36,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      boxSizing: "border-box",
      marginLeft: -157
    }
  }, children));
}
Object.assign(__ds_scope, { NewsletterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NewsletterBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageHeader({
  title = "Olive",
  tagline,
  handle,
  handleHref = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      alignSelf: "stretch",
      maxWidth: "var(--page-max)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    variant: "bubble",
    size: "xl",
    style: {
      alignSelf: "stretch"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 17,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "0 30px",
      boxSizing: "border-box",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, tagline), /*#__PURE__*/React.createElement("a", {
    href: handleHref,
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      textDecoration: "underline"
    }
  }, handle)));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  kicker,
  title = "Olive",
  legal,
  handle,
  handleHref = "#",
  style,
  ...rest
}) {
  const base = {
    flexGrow: 1,
    fontFamily: "var(--font-label)",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "var(--text-primary)"
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignSelf: "stretch",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "center",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "stretch",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 36,
      textAlign: "center",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, kicker), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    variant: "heavy",
    size: "lg",
    style: {
      alignSelf: "stretch"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: base
  }, legal), /*#__PURE__*/React.createElement("a", {
    href: handleHref,
    style: {
      ...base,
      textAlign: "right",
      textDecoration: "underline"
    }
  }, handle)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoLink({
  src,
  alt = "",
  label = "Link",
  href = "#",
  size = 180,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      textDecoration: "none",
      width: size,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt,
    style: {
      height: 154,
      alignSelf: "stretch",
      overflow: "hidden",
      background: `linear-gradient(var(--scrim-photo),var(--scrim-photo)), url(${src}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { PhotoLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoLink.jsx", error: String((e && e.message) || e) }); }

// components/tiles/ColorTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ColorTile({
  children,
  color = "var(--olive-cream)",
  textColor = "var(--text-primary)",
  height = 400,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height,
      minWidth: 360,
      flexGrow: 1,
      overflow: "hidden",
      backgroundColor: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "21px 13px",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 30,
      textAlign: "center",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: textColor
    }
  }, children));
}
Object.assign(__ds_scope, { ColorTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tiles/ColorTile.jsx", error: String((e && e.message) || e) }); }

// components/tiles/LinkTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LinkTile({
  children,
  href = "#",
  color = "var(--olive-black)",
  textColor = "var(--olive-white)",
  src,
  height = 400,
  style,
  ...rest
}) {
  const bg = src ? {
    background: `linear-gradient(var(--scrim-photo),var(--scrim-photo)), url(${src}) center / cover no-repeat`
  } : {
    backgroundColor: color
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      textDecoration: "none",
      height,
      minWidth: 360,
      flexGrow: 1,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "21px 13px",
      boxSizing: "border-box",
      ...bg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: textColor
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 48,
    color: textColor
  }));
}
Object.assign(__ds_scope, { LinkTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tiles/LinkTile.jsx", error: String((e && e.message) || e) }); }

// components/tiles/ObjectTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ObjectTile({
  src,
  alt = "",
  color = "var(--olive-ink)",
  title,
  meta,
  textColor = "var(--olive-white)",
  fit = "contain",
  height = 400,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height,
      minWidth: 360,
      flexGrow: 1,
      overflow: "hidden",
      backgroundColor: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "21px 13px",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt,
    style: {
      flexGrow: 1,
      alignSelf: "stretch",
      background: `url(${src}) center / ${fit} no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 49,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "16px 0",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: textColor
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6,
      fontFamily: "var(--font-label)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: textColor
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { ObjectTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tiles/ObjectTile.jsx", error: String((e && e.message) || e) }); }

// components/tiles/PhotoTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoTile({
  src,
  alt = "",
  scrim = false,
  height = 400,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": alt,
    style: {
      height,
      minWidth: 360,
      flexGrow: 1,
      overflow: "hidden",
      background: `${scrim ? "linear-gradient(var(--scrim-photo),var(--scrim-photo))," : ""}url(${src}) center / cover no-repeat`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tiles/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/tiles/TileGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TileGrid({
  children,
  gap = 10,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap,
      alignItems: "flex-start",
      alignContent: "space-between",
      alignSelf: "stretch",
      maxWidth: "var(--page-max)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TileGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tiles/TileGrid.jsx", error: String((e && e.message) || e) }); }

// components/type/FactRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FactRow({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      alignSelf: "stretch",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "1 1 0",
      minWidth: 0,
      height: 413.337,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "stretch",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "stretch",
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 36,
      textAlign: "center",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { FactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/FactRow.jsx", error: String((e && e.message) || e) }); }

// components/type/Statement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  hard: {
    fontWeight: 400,
    fontSize: 60,
    lineHeight: 1.2,
    letterSpacing: "-0.01em"
  },
  soft: {
    fontWeight: 400,
    fontSize: 42,
    lineHeight: 1.3,
    letterSpacing: "-0.01em"
  }
};
function Statement({
  children,
  tone = "hard",
  color = "var(--text-primary)",
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      textAlign: align,
      color,
      ...TONE[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Statement.jsx", error: String((e && e.message) || e) }); }

// components/layout/Overlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Overlay({
  open = true,
  onClose,
  paragraphs = [],
  background = "var(--surface-overlay)",
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 10,
      overflow: "auto",
      backgroundColor: background,
      display: "flex",
      flexDirection: "column",
      gap: 100,
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      width: 200,
      height: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 100,
    color: "var(--olive-white)",
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "center",
      padding: "0 80px 200px",
      boxSizing: "border-box",
      alignSelf: "stretch"
    }
  }, paragraphs.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Statement, {
    key: i,
    tone: "soft",
    color: "var(--olive-white)",
    style: {
      maxWidth: 1120
    }
  }, p))));
}
Object.assign(__ds_scope, { Overlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Overlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const PARAGRAPHS = ["Olive puts professors and experts in bars. Forty minutes of a real lecture, then everyone argues about it over the second round.", "No tickets, no slides, no badge on a lanyard. Turn up early if you want a stool.", "Every talk is free. Madrid, most Thursdays, from 20:00."];
function About({
  open,
  onClose
}) {
  const {
    Overlay
  } = window.OliveDesignSystem_d726ce;
  return /*#__PURE__*/React.createElement(Overlay, {
    open: open,
    onClose: onClose,
    paragraphs: PARAGRAPHS,
    style: {
      position: "fixed"
    }
  });
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  onAbout
}) {
  const {
    TileGrid,
    ColorTile,
    ObjectTile,
    LinkTile,
    PhotoTile,
    PageHeader,
    FactRow,
    Statement,
    NewsletterBar,
    SiteFooter,
    NavBar
  } = window.OliveDesignSystem_d726ce;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      minHeight: 4457,
      margin: "0 auto",
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "22px 10px 20px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: [{
      label: "About",
      onClick: onAbout
    }, {
      label: "Directions",
      href: "#directions"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Olive",
    tagline: "A lecture series in bars",
    handle: "@oliveseries"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(FactRow, {
    items: [{
      label: "What:",
      value: "a lecture in a bar"
    }, {
      label: "When:",
      value: "SEPT 14TH 20:00"
    }, {
      label: "Where:",
      value: "Calle de la Reina 16,  Madrid"
    }]
  }), /*#__PURE__*/React.createElement(TileGrid, {
    id: "directions",
    style: {
      paddingBottom: 112
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    src: "../../assets/photo-crowd.jpg",
    alt: "A full bar listening to a talk"
  }), /*#__PURE__*/React.createElement(ObjectTile, {
    src: "../../assets/cutout-01.png",
    color: "var(--olive-ink)",
    title: "Poster",
    meta: "September 26\u2019"
  }), /*#__PURE__*/React.createElement(LinkTile, {
    href: "https://maps.google.com"
  }, "Google Maps Link"), /*#__PURE__*/React.createElement(ObjectTile, {
    src: "../../assets/cutout-02.png",
    color: "var(--olive-navy)",
    fit: "cover",
    title: "Programa",
    meta: "October 26\u2019"
  }), /*#__PURE__*/React.createElement(ColorTile, {
    color: "var(--olive-fog)"
  }, "Charlas"), /*#__PURE__*/React.createElement(PhotoTile, {
    src: "../../assets/photo-tile-06.png",
    alt: "Bar interior"
  }), /*#__PURE__*/React.createElement(ColorTile, {
    color: "var(--olive-cream)"
  }, "Ciencia"), /*#__PURE__*/React.createElement(ObjectTile, {
    src: "../../assets/cutout-03.png",
    color: "var(--olive-oxblood)",
    title: "Cassette",
    meta: "November 26\u2019"
  }), /*#__PURE__*/React.createElement(ColorTile, {
    color: "var(--olive-sage)"
  }, "Filosof\xEDa"), /*#__PURE__*/React.createElement(LinkTile, {
    src: "../../assets/photo-tile-10.jpg"
  }, "Follow Us on Substack"), /*#__PURE__*/React.createElement(ColorTile, {
    color: "var(--olive-clay)"
  }, "Historia"), /*#__PURE__*/React.createElement(LinkTile, {
    href: "https://instagram.com"
  }, "Browse the Instagram"), /*#__PURE__*/React.createElement(ColorTile, {
    color: "var(--olive-cream)"
  }, "Arte"), /*#__PURE__*/React.createElement(ObjectTile, {
    src: "../../assets/photo-cosmos.jpg",
    fit: "cover",
    color: "var(--olive-blush)",
    textColor: "var(--olive-black)",
    title: "Entradas",
    meta: "December 26\u2019"
  })), /*#__PURE__*/React.createElement(Statement, null, "Olive is an hour of real teaching, held where people already are: a bar, a beer, a professor with something to say.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 43,
      alignItems: "center",
      alignSelf: "stretch",
      maxWidth: "var(--page-max)",
      padding: "88px 30px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(NewsletterBar, {
    href: "#subscribe"
  }, "Sign Up for our Newsletter"), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "Audience at an Olive talk",
    style: {
      height: 386,
      alignSelf: "stretch",
      overflow: "hidden",
      background: "url(../../assets/photo-cta.jpg) center / cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    kicker: "A lecture series in bars",
    title: "Olive",
    legal: "Olive\xA9 2026 All Rights Reserved",
    handle: "@oliveseries"
  })));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ColorDot = __ds_scope.ColorDot;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NewsletterBar = __ds_scope.NewsletterBar;

__ds_ns.Overlay = __ds_scope.Overlay;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.PhotoLink = __ds_scope.PhotoLink;

__ds_ns.ColorTile = __ds_scope.ColorTile;

__ds_ns.LinkTile = __ds_scope.LinkTile;

__ds_ns.ObjectTile = __ds_scope.ObjectTile;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.TileGrid = __ds_scope.TileGrid;

__ds_ns.FactRow = __ds_scope.FactRow;

__ds_ns.Statement = __ds_scope.Statement;

})();
