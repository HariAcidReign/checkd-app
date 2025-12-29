import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { DAILY_INSIGHT_CARD_CONSTANTS } from './DailyInsightCard.constants'

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    shadow: {
        position: 'absolute',
        top: 4,
        left: 4,
        right: -4,
        bottom: -4,
        backgroundColor: '#E6DCC3',
        borderRadius: 24,
        width: '100%',
        height: '100%',
    },
    card: {
        backgroundColor: colors.creamDark,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#E6DCC3',
        padding: 24,
        overflow: 'hidden'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: DAILY_INSIGHT_CARD_CONSTANTS.FONTS.BOLD,
    },
    itemRow: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
    },
    dayLabel: {
        width: 40,
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: DAILY_INSIGHT_CARD_CONSTANTS.FONTS.BOLD,
        opacity: 0.7,
        textTransform: 'uppercase',
    },
    summaryText: {
        flex: 1,
        fontSize: 15,
        color: colors.brown,
        lineHeight: 22,
        fontFamily: DAILY_INSIGHT_CARD_CONSTANTS.FONTS.REGULAR,
    },
    divider: {
        height: 1,
        backgroundColor: colors.brown,
        opacity: 0.1,
        marginVertical: 6,
        width: '100%',
    }
})
