import React from 'react'
import { Pressable } from 'react-native'
import { Text, View } from 'tamagui'
import { colors } from '../../theme/tokens'

type PillButtonProps = {
    children: React.ReactNode
    onPress?: () => void
    variant?: 'primary' | 'secondary' | 'ghost'
    width?: number
}

/**
 * PillButton - Simple pressable button with hand-drawn aesthetic
 */
export function PillButton({ children, onPress, variant = 'primary', width }: PillButtonProps) {
    const getStyles = () => {
        switch (variant) {
            case 'secondary':
                return {
                    backgroundColor: colors.cream,
                    borderColor: colors.brown,
                    textColor: colors.brown,
                }
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    borderColor: colors.brown,
                    textColor: colors.brown,
                }
            default: // primary
                return {
                    backgroundColor: colors.brown,
                    borderColor: colors.brownDark,
                    textColor: colors.cream,
                }
        }
    }

    const styles = getStyles()

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
                backgroundColor: pressed ? colors.brownDark : styles.backgroundColor,
                borderColor: styles.borderColor,
                borderWidth: 3,
                borderRadius: 999,
                paddingHorizontal: 48,
                paddingVertical: 24,
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                shadowColor: colors.brownDark,
                shadowOffset: { width: 0, height: pressed ? 1 : 3 },
                shadowOpacity: pressed ? 0.3 : 0.2,
                shadowRadius: 4,
                elevation: pressed ? 2 : 3,
            })}
        >
            <Text
                fontSize={20}
                fontWeight="600"
                style={{
                    color: styles.textColor,
                }}
            >
                {children}
            </Text>
        </Pressable>
    )
}
