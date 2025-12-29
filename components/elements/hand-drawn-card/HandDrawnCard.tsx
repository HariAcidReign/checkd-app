import React from 'react'
import { YStack, GetProps } from 'tamagui'
import { cardStyles } from './HandDrawnCard.styles'
import { HAND_DRAWN_CARD_CONSTANTS } from './HandDrawnCard.constants'

type HandDrawnCardProps = GetProps<typeof YStack> & {
    variant?: keyof typeof HAND_DRAWN_CARD_CONSTANTS.VARIANTS
    paddingVariant?: keyof typeof HAND_DRAWN_CARD_CONSTANTS.PADDING
}

/**
 * HandDrawnCard - Refactored with separated concerns
 */
export function HandDrawnCard({
    children,
    variant = HAND_DRAWN_CARD_CONSTANTS.DEFAULT_VARIANT,
    paddingVariant = HAND_DRAWN_CARD_CONSTANTS.DEFAULT_PADDING,
    ...props
}: HandDrawnCardProps) {

    const selectedVariant = HAND_DRAWN_CARD_CONSTANTS.VARIANTS[variant]
    const selectedPadding = HAND_DRAWN_CARD_CONSTANTS.PADDING[paddingVariant]

    return (
        <YStack
            {...cardStyles.base}
            backgroundColor={selectedVariant.backgroundColor}
            borderColor={selectedVariant.borderColor}
            padding={selectedPadding}
            {...props}
        >
            {children}
        </YStack>
    )
}
