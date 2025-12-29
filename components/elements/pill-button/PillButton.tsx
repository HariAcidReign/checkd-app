import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from './PillButton.styles'
import { PILL_BUTTON_CONSTANTS } from './PillButton.constants'

type PillButtonProps = {
    children: React.ReactNode
    onPress?: () => void
    variant?: 'primary' | 'secondary' | 'ghost'
    width?: number
}

export function PillButton({
    children,
    onPress,
    variant = PILL_BUTTON_CONSTANTS.DEFAULT_VARIANT,
    width
}: PillButtonProps) {
    const variantStyles = PILL_BUTTON_CONSTANTS.VARIANTS[variant]
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                {
                    backgroundColor: pressed ? variantStyles.pressedBackgroundColor : variantStyles.backgroundColor,
                    borderColor: variantStyles.borderColor,
                    width: width,
                    // Dynamic shadow styles based on state
                    shadowOffset: { width: 0, height: pressed ? 1 : 3 },
                    shadowOpacity: pressed ? 0.3 : 0.2,
                    elevation: pressed ? 2 : 3,
                }
            ]}
        >
            <Text style={[styles.label, { color: variantStyles.textColor }]}>
                {children}
            </Text>
        </Pressable>
    )
}
