import React from 'react'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

type NavIconProps = {
    name: keyof typeof Feather.glyphMap
    active?: boolean
    onPress?: () => void
}

/**
 * NavIcon - Bottom navigation icon component
 * Icon-only with active state (colored when clicked)
 */
export function NavIcon({ name, active = false, onPress }: NavIconProps) {
    const iconColor = active ? '#8B6F47' : '#8E8E8E' // brown when active, gray otherwise

    return (
        <Pressable
            onPress={onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            }}
        >
            <Feather
                name={name}
                size={28}
                color={iconColor}
            />
        </Pressable>
    )
}
