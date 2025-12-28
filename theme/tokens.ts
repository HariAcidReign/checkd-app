/**
 * Design tokens for Checkd app
 * Hand-drawn aesthetic with warm, earthy tones
 */

export const colors = {
    // Backgrounds
    cream: '#FFF8F0',
    creamDark: '#F5EDE3',

    // Primary browns (for borders, text, accents)
    brown: '#8B6F47',
    brownDark: '#6B5537',
    brownLight: '#A68A5E',

    // Muted earthy tones
    sage: '#B8C5B0',
    terracotta: '#D4A59A',
    sand: '#E8D5C4',

    // Neutrals
    charcoal: '#3A3A3A',
    gray: '#8E8E8E',
    grayLight: '#D1D1D1',

    // Semantic colors (soft, not bright)
    productive: '#A8C5A8',
    neutral: '#D4C5A8',
    unproductive: '#D4A8A8',

    // UI states
    white: '#FFFFFF',
    black: '#000000',
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
}

export const borderRadius = {
    sm: 8,
    md: 16,
    lg: 24,
    pill: 999, // For pill-shaped buttons
}

export const shadows = {
    // Soft, hand-drawn style shadows
    soft: {
        shadowColor: colors.brownDark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: colors.brownDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
}

export const borders = {
    // Thick borders for hand-drawn aesthetic
    thin: 2,
    medium: 3,
    thick: 4,
}

export const fonts = {
    // Using system rounded fonts as fallback
    // TODO: Add custom Consolas-like rounded font
    body: 'System',
    heading: 'System',
}

export const fontSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
}

export const fontWeights = {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
}
