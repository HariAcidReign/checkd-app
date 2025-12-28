var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  config: () => config,
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig = (0, import_core.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig;
};

// node_modules/tamagui/dist/esm/index.mjs
var import_core2 = require("@tamagui/core");

// node_modules/@tamagui/shorthands/dist/esm/index.mjs
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bc: "backgroundColor",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  boc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands.bls = "borderLeftStyle";
shorthands.brs = "borderRightStyle";
shorthands.bts = "borderTopStyle";
shorthands.bbs = "borderBottomStyle";
shorthands.bxs = "boxSizing";
shorthands.bxsh = "boxShadow";
shorthands.ox = "overflowX";
shorthands.oy = "overflowY";

// theme/tokens.ts
var colors = {
  // Backgrounds
  cream: "#FFF8F0",
  creamDark: "#F5EDE3",
  // Primary browns (for borders, text, accents)
  brown: "#8B6F47",
  brownDark: "#6B5537",
  brownLight: "#A68A5E",
  // Muted earthy tones
  sage: "#B8C5B0",
  terracotta: "#D4A59A",
  sand: "#E8D5C4",
  // Neutrals
  charcoal: "#3A3A3A",
  gray: "#8E8E8E",
  grayLight: "#D1D1D1",
  // Semantic colors (soft, not bright)
  productive: "#A8C5A8",
  neutral: "#D4C5A8",
  unproductive: "#D4A8A8",
  // UI states
  white: "#FFFFFF",
  black: "#000000"
};
var spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};
var borderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  pill: 999
  // For pill-shaped buttons
};
var shadows = {
  // Soft, hand-drawn style shadows
  soft: {
    shadowColor: colors.brownDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  medium: {
    shadowColor: colors.brownDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4
  }
};
var fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32
};

// tamagui.config.ts
var tokens = (0, import_core2.createTokens)({
  color: {
    // Backgrounds
    cream: colors.cream,
    creamDark: colors.creamDark,
    // Browns
    brown: colors.brown,
    brownDark: colors.brownDark,
    brownLight: colors.brownLight,
    // Earthy tones
    sage: colors.sage,
    terracotta: colors.terracotta,
    sand: colors.sand,
    // Neutrals
    charcoal: colors.charcoal,
    gray: colors.gray,
    grayLight: colors.grayLight,
    // Semantic
    productive: colors.productive,
    neutral: colors.neutral,
    unproductive: colors.unproductive,
    white: colors.white,
    black: colors.black
  },
  space: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    true: spacing.md,
    // default spacing
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl
  },
  size: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    true: spacing.md,
    // default size
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl
  },
  radius: {
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    pill: borderRadius.pill
  },
  zIndex: {
    xs: 0,
    sm: 100,
    md: 1e3,
    true: 1e3,
    // default z-index
    lg: 1e4,
    xl: 1e5,
    xxl: 1e6
  },
  fontSize: {
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    md: fontSizes.md,
    true: fontSizes.md,
    // default font size
    lg: fontSizes.lg,
    xl: fontSizes.xl,
    xxl: fontSizes.xxl
  }
});
var lightTheme = {
  background: colors.cream,
  backgroundHover: colors.creamDark,
  backgroundPress: colors.sand,
  backgroundFocus: colors.creamDark,
  color: colors.charcoal,
  colorHover: colors.brownDark,
  colorPress: colors.brown,
  colorFocus: colors.brownDark,
  borderColor: colors.brown,
  borderColorHover: colors.brownDark,
  borderColorPress: colors.brownDark,
  borderColorFocus: colors.brownDark,
  shadowColor: colors.brownDark,
  shadowColorHover: colors.brownDark,
  shadowColorPress: colors.brownDark,
  shadowColorFocus: colors.brownDark
};
var config = createTamagui({
  tokens,
  themes: {
    light: lightTheme
  },
  shorthands,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 }
  }
});
var tamagui_config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
