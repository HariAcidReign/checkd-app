export const HAND_DRAWN_CARD_CONSTANTS = {
    DEFAULT_VARIANT: 'default' as const,
    DEFAULT_PADDING: 'medium' as const,
    VARIANTS: {
        default: {
            backgroundColor: '$cream',
            borderColor: '$brown',
        },
        sage: {
            backgroundColor: '$sage',
            borderColor: '$sage',
        },
        terracotta: {
            backgroundColor: '$terracotta',
            borderColor: '$terracotta',
        },
        sand: {
            backgroundColor: '$sand',
            borderColor: '$sand',
        },
    },
    PADDING: {
        none: 0,
        small: '$sm',
        medium: '$lg',
        large: '$xl',
    }
} as const
