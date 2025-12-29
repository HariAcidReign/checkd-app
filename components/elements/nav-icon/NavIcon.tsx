import React from 'react'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './NavIcon.styles'
import { NAV_ICON_CONSTANTS } from './NavIcon.constants'

type NavIconProps = {
    name: keyof typeof Feather.glyphMap
    active?: boolean
    onPress?: () => void
    label?: string
}

export function NavIcon({
    name,
    active = NAV_ICON_CONSTANTS.DEFAULT_ACTIVE,
    onPress,
    label
}: NavIconProps) {
    const iconColor = active ? NAV_ICON_CONSTANTS.COLORS.active : NAV_ICON_CONSTANTS.COLORS.inactive

    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <Feather
                name={name}
                size={NAV_ICON_CONSTANTS.SIZE}
                color={iconColor}
            />
        </Pressable>
    )
}
