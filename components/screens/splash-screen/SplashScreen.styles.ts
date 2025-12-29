import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { SPLASH_SCREEN_CONSTANTS } from './SplashScreen.constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mascotContainer: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: colors.sand,
        borderWidth: 3,
        borderColor: colors.brown,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.brownDark,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 4,
    },
    mascotImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    appName: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.brown,
        fontFamily: SPLASH_SCREEN_CONSTANTS.FONTS.BOLD,
        textTransform: 'uppercase',
        letterSpacing: 3,
        textShadowColor: 'rgba(0,0,0,0.15)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
    },
    tagline: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: SPLASH_SCREEN_CONSTANTS.FONTS.REGULAR,
    }
})
