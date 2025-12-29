import { StyleSheet } from 'react-native'
import { colors } from '../../../../theme/tokens'
import { ONBOARDING_STEP1_CONSTANTS } from './OnboardingStep1.constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
        padding: 24,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mascotWrapper: {
        width: 120,
        height: 120,
        borderRadius: 60,
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
    textContainer: {
        alignItems: 'center',
        maxWidth: 320,
        marginTop: 32, // Gap between components
    },
    question: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.brown,
        textAlign: 'center',
        fontFamily: ONBOARDING_STEP1_CONSTANTS.FONTS.BOLD,
    },
    description: {
        fontSize: 16,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: ONBOARDING_STEP1_CONSTANTS.FONTS.REGULAR,
        marginTop: 12,
    },
    ctaWrapper: {
        width: 280,
        position: 'relative',
        marginTop: 32,
    },
    ctaShadow: {
        position: 'absolute',
        top: 4,
        left: 4,
        right: -4,
        bottom: -4,
        backgroundColor: colors.brownDark,
        borderRadius: 20,
        width: '100%',
        height: '100%',
    },
    ctaButton: {
        borderColor: colors.brownDark,
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 18,
        alignItems: 'center',
    },
    ctaText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.cream,
        fontFamily: ONBOARDING_STEP1_CONSTANTS.FONTS.BOLD,
    }
})
