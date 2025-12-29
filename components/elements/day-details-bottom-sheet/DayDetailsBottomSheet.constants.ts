import { Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height

export const DAY_DETAILS_CONSTANTS = {
    SCREEN_HEIGHT,
    SECTION_HEIGHT: SCREEN_HEIGHT * 0.6,
    ANIMATION_BOUNCINESS: 4,
    ANIMATION_DURATION: 250,
    CLOSE_THRESHOLD: 100,
    VELOCITY_THRESHOLD: 0.5,
    FONTS: {
        REGULAR: 'Inconsolata_400Regular',
        BOLD: 'Inconsolata_700Bold',
    },
    STRINGS: {
        NO_LOGS: 'No logs for this day.',
        MOST_PRODUCTIVE: 'Most Productive',
        DAY_DETAILS: 'Day Details'
    }
} as const
