import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { WEEK_BAR_CHART_CONSTANTS } from './WeekBarChart.constants'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: WEEK_BAR_CHART_CONSTANTS.FONTS.BOLD,
    },
    chartArea: {
        backgroundColor: '#FFFDF5',
        borderRadius: 32,
        padding: 24,
        paddingTop: 40,
        paddingBottom: 24,
        borderWidth: 2,
        borderColor: '#E6DCC3',
        width: '100%',
    },
    contentYStack: {
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    barsContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 24,
        paddingHorizontal: 12,
    },
    pressableBar: {
        alignItems: 'center',
        gap: 12,
        height: '100%',
        justifyContent: 'flex-end',
        flex: 1,
    },
    bar: {
        width: 24,
        backgroundColor: colors.brown,
        borderRadius: 8,
    },
    dayLabel: {
        fontSize: 14,
        fontFamily: WEEK_BAR_CHART_CONSTANTS.FONTS.REGULAR,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#E6DCC3',
        marginBottom: 16,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#E6DCC3',
    },
    helperStack: {
        alignItems: 'center',
        gap: 8,
        opacity: 0.9,
    },
    helperText: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: WEEK_BAR_CHART_CONSTANTS.FONTS.BOLD,
    }
})
