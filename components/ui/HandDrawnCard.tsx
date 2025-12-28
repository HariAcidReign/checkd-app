import { styled, YStack } from 'tamagui'

/**
 * HandDrawnCard - Card component with thick border and soft shadow
 * Matches the hand-drawn aesthetic from reference designs
 */
export const HandDrawnCard = styled(YStack, {
    name: 'HandDrawnCard',

    // Base styles
    backgroundColor: '$cream',
    borderRadius: '$lg',
    borderWidth: 3,
    borderColor: '$brown',
    padding: '$lg',

    // Soft shadow
    shadowColor: '$brownDark',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,

    // Variants
    variants: {
        variant: {
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

        padding: {
            none: {
                padding: 0,
            },
            small: {
                padding: '$sm',
            },
            medium: {
                padding: '$lg',
            },
            large: {
                padding: '$xl',
            },
        },
    } as const,

    defaultVariants: {
        variant: 'default',
        padding: 'medium',
    },
})
