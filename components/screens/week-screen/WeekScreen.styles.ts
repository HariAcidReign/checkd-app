import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { WEEK_SCREEN_CONSTANTS } from './WeekScreen.constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
    },
    scrollViewContent: {
        paddingBottom: 40,
    },
    mainStack: {
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    titleRow: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    titleText: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.brown,
        fontFamily: WEEK_SCREEN_CONSTANTS.FONTS.BOLD,
        letterSpacing: 1,
    },
    dateRangeText: {
        fontSize: 14,
        color: colors.gray,
        marginTop: 8,
        fontFamily: WEEK_SCREEN_CONSTANTS.FONTS.REGULAR,
        letterSpacing: 2,
    }
})
