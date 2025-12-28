import { createTamagui, createTokens } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens as defaultTokens } from '@tamagui/config/v4'
import { colors, spacing, borderRadius, fontSizes, fontWeights } from './theme/tokens'

// Create custom tokens for Checkd
const tokens = createTokens({
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
    black: colors.black,
  },
  space: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    true: spacing.md, // default spacing
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl,
  },
  size: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    true: spacing.md, // default size
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl,
  },
  radius: {
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    pill: borderRadius.pill,
  },
  zIndex: {
    xs: 0,
    sm: 100,
    md: 1000,
    true: 1000, // default z-index
    lg: 10000,
    xl: 100000,
    xxl: 1000000,
  },
  fontSize: {
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    md: fontSizes.md,
    true: fontSizes.md, // default font size
    lg: fontSizes.lg,
    xl: fontSizes.xl,
    xxl: fontSizes.xxl,
  },
})

// Custom light theme for Checkd
const lightTheme = {
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
  shadowColorFocus: colors.brownDark,
}

export const config = createTamagui({
  tokens,
  themes: {
    light: lightTheme,
  },
  shorthands,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
