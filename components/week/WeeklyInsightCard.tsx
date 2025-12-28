import React from 'react'
import { View, Text, YStack, XStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

/**
 * WeeklyInsightCard - Displays AI summary of the week
 */
export function WeeklyInsightCard() {
    return (
        <View style={{ position: 'relative', width: '100%', marginBottom: 32 }}>
            {/* Shadow layer */}
            <View
                style={{
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    right: -4,
                    bottom: -4,
                    backgroundColor: '#E6DCC3', // Slightly darker sand/cream for shadow
                    borderRadius: 24,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Main card */}
            <View
                backgroundColor="$creamDark" // Using our cream/sand background
                borderRadius={24}
                borderWidth={2}
                borderColor="#E6DCC3"
                padding={24}
                style={{ overflow: 'hidden' }}
            >
                {/* Header */}
                <XStack alignItems="center" gap={12} marginBottom={16}>
                    <View
                        backgroundColor="$brown"
                        padding={6}
                        borderRadius={8}
                    >
                        <Feather name="star" size={16} color={colors.cream} />
                    </View>
                    <Text
                        fontSize={18}
                        fontWeight="700"
                        color="$brown"
                        style={{ fontFamily: FONT_BOLD }}
                    >
                        Weekly Insight
                    </Text>
                </XStack>

                {/* Content */}
                <Text
                    fontSize={16}
                    color="$brown"
                    lineHeight={24}
                    style={{ fontFamily: FONT_REGULAR, opacity: 0.8 }}
                >
                    You've maintained a strong focus streak this week, peaking on Wednesday. Compared to last week, your deep work sessions have increased by 15%. Great consistency on morning sessions!
                </Text>

                {/* Decorative background stars - simple interpretation of the image */}
                <View
                    position="absolute"
                    top={-10}
                    right={-10}
                    opacity={0.1}
                    transform={[{ rotate: '15deg' }]}
                >
                    <Feather name="star" size={100} color={colors.brown} />
                </View>
            </View>
        </View>
    )
}
