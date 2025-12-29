import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { HISTORY_WEEK_CARD_CONSTANTS } from './HistoryWeekCard.constants'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: colors.cream,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: colors.brown,
        height: '85%',
        position: 'relative',
        overflow: 'visible'
    },
    headerPillContainer: {
        position: 'absolute',
        top: -20,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 100,
    },
    headerPill: {
        backgroundColor: colors.cream,
        borderWidth: 2,
        borderColor: colors.brown,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
    },
    dateLabel: {
        fontSize: 14,
        color: colors.brown,
        fontWeight: '700',
        fontFamily: HISTORY_WEEK_CARD_CONSTANTS.FONTS.BOLD,
        letterSpacing: 1,
    },
    contentStack: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    titleStack: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: colors.brown,
        fontFamily: HISTORY_WEEK_CARD_CONSTANTS.FONTS.BOLD,
    },
    subtitle: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: HISTORY_WEEK_CARD_CONSTANTS.FONTS.REGULAR,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginTop: 4,
    },
    chartContainer: {
        flex: 1,
        justifyContent: 'center',
        maxHeight: 250,
    },
    barWrapper: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-end',
        flex: 1,
    },
    bar: {
        width: 16,
        backgroundColor: colors.brown,
        borderRadius: 6,
    },
    dayLabel: {
        fontSize: 12,
        color: colors.gray,
        fontFamily: HISTORY_WEEK_CARD_CONSTANTS.FONTS.REGULAR,
        marginTop: 8,
    },
    summaryBox: {
        backgroundColor: '#F0EAD6',
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'rgba(139, 111, 71, 0.2)',
        padding: 20,
    },
    summaryText: {
        fontSize: 16,
        color: colors.brown,
        lineHeight: 24,
        fontFamily: HISTORY_WEEK_CARD_CONSTANTS.FONTS.REGULAR,
    }
})
