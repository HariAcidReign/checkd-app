import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../../theme/tokens'
import { HISTORY_SCREEN_CONSTANTS } from './HistoryScreen.constants'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
    },
    headerContainer: {
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 20,
    },
    titleWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    navArrows: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
    },
    headerText: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.brown,
        fontFamily: HISTORY_SCREEN_CONSTANTS.FONTS.BOLD,
        letterSpacing: 1,
    },
    carouselItem: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    paginationContainer: {
        justifyContent: 'center',
        paddingBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    }
})
