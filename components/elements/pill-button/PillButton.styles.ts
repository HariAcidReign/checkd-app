import { StyleSheet } from 'react-native'
import { colors } from '../../../theme/tokens'

export const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderRadius: 999,
        paddingHorizontal: 48,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.brownDark,
        shadowRadius: 4,
    },
    label: {
        fontSize: 20,
        fontWeight: '600',
    }
})
