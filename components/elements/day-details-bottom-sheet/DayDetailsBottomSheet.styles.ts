import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'
import { DAY_DETAILS_CONSTANTS } from './DayDetailsBottomSheet.constants'

export const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
    },
    sheetContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: DAY_DETAILS_CONSTANTS.SECTION_HEIGHT,
        top: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: colors.cream,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 24,
        paddingTop: 12,
    },
    dragHandleContainer: {
        alignItems: 'center',
        paddingBottom: 24,
    },
    dragHandle: {
        width: 48,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#E6DCC3',
    },
    titleRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.BOLD,
    },
    bestDayBadge: {
        backgroundColor: '#D4EDDA',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    bestDayText: {
        fontSize: 12,
        color: '#155724',
        fontWeight: '700',
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.BOLD,
    },
    dateSubtitle: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.REGULAR,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 32,
    },
    logsContainer: {
        paddingBottom: 40,
    },
    logRow: {
        flexDirection: 'row',
        gap: 16,
    },
    timelineContainer: {
        alignItems: 'center',
        width: 50,
    },
    timeText: {
        fontSize: 13,
        color: colors.gray,
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.REGULAR,
    },
    verticalLine: {
        width: 1,
        flex: 1,
        backgroundColor: '#E6DCC3',
        marginTop: 8,
        marginBottom: -20,
    },
    activityContainer: {
        flex: 1,
        gap: 8,
        paddingBottom: 16,
    },
    activityText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.BOLD,
    },
    categoryBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    categoryText: {
        fontSize: 10,
        fontWeight: '700',
        color: colors.brown,
        fontFamily: DAY_DETAILS_CONSTANTS.FONTS.BOLD,
        textTransform: 'uppercase',
    }
})
