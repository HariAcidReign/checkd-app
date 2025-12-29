import { colors } from '../../../theme/tokens'

export const PILL_BUTTON_CONSTANTS = {
    DEFAULT_VARIANT: 'primary' as const,
    VARIANTS: {
        primary: {
            backgroundColor: colors.brown,
            borderColor: colors.brownDark,
            textColor: colors.cream,
            pressedBackgroundColor: colors.brownDark,
        },
        secondary: {
            backgroundColor: colors.cream,
            borderColor: colors.brown,
            textColor: colors.brown,
            pressedBackgroundColor: colors.brownDark,
        },
        ghost: {
            backgroundColor: 'transparent',
            borderColor: colors.brown,
            textColor: colors.brown,
            pressedBackgroundColor: colors.brownDark,
        }
    }
}
