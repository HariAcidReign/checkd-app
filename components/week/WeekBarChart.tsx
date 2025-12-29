import React from 'react'
import { View, Text, XStack, YStack } from 'tamagui'
import { Pressable } from 'react-native'
import { colors } from '../../theme/tokens'
import { DayData } from '../../types/week'
import { Feather } from '@expo/vector-icons'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

interface WeekBarChartProps {
    data: DayData[]
    onDayPress: (day: DayData) => void
}

/**
 * WeekBarChart - Weekly progress visualization
 */
export function WeekBarChart({ data, onDayPress }: WeekBarChartProps) {
    return (
        <YStack width="100%" space="$md">
            {/* Header */}
            <XStack justifyContent="center" alignItems="center">
                <Text
                    fontSize={20}
                    fontWeight="700"
                    color="$brown"
                    style={{ fontFamily: FONT_BOLD }}
                >
                    Focus Time
                </Text>
                {/* Ignoring the total time as requested */}
            </XStack>

            <View
                style={{
                    backgroundColor: '#FFFDF5', // Slightly lighter cream/white for chart area
                    borderRadius: 32,
                    padding: 24,
                    paddingTop: 40,
                    paddingBottom: 24,
                    borderWidth: 2,
                    borderColor: '#E6DCC3',
                    width: '100%',
                }}
            >
                <YStack height={300} justifyContent="flex-end" alignItems="center">
                    {/* Chart Area - increased padding via justifyContent space-around or just gap if supported */}
                    <XStack
                        flex={1}
                        width="100%"
                        justifyContent="space-around"
                        alignItems="flex-end"
                        marginBottom={24}
                        paddingHorizontal={12}
                    >
                        {data.map((day, index) => {
                            const barHeight = `${day.productivityScore}%`

                            // Find max score to normalize opacity
                            const maxScore = Math.max(...data.map(d => d.productivityScore))
                            const relativeScore = maxScore > 0 ? day.productivityScore / maxScore : 0

                            // Use opacity to control "brown-ness". 
                            // Minimum opacity 0.3 so it's not invisible
                            const opacity = Math.max(0.3, relativeScore)

                            return (
                                <Pressable
                                    key={index}
                                    onPress={() => onDayPress(day)}
                                    style={{ alignItems: 'center', gap: 12, height: '100%', justifyContent: 'flex-end', flex: 1 }}
                                >
                                    {/* The Bar */}
                                    <View
                                        width={24}
                                        height={barHeight}
                                        backgroundColor={colors.brown} // Always brown
                                        borderRadius={8}
                                        style={{
                                            shadowColor: day.isBestDay ? colors.brown : 'transparent',
                                            shadowOffset: { width: 0, height: 2 },
                                            shadowOpacity: 0.2,
                                            shadowRadius: 4,
                                            opacity: opacity // Control intensity via opacity
                                        }}
                                    />

                                    {/* Day Label */}
                                    <Text
                                        fontSize={14}
                                        color={day.isBestDay ? "$brown" : "$gray"}
                                        fontWeight={day.isBestDay ? "700" : "400"}
                                        style={{ fontFamily: day.isBestDay ? FONT_BOLD : FONT_REGULAR }}
                                    >
                                        {day.day}
                                    </Text>
                                </Pressable>
                            )
                        })}
                    </XStack>
                    {/* Separator Line */}
                    <View width="100%" height={1} backgroundColor="#E6DCC3" marginBottom={16} style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: '#E6DCC3' }} />

                    {/* Helper Text */}
                    <XStack alignItems="center" gap={8} opacity={0.9}>
                        <Feather name="mouse-pointer" size={16} color={colors.brown} />
                        <Text
                            fontSize={15}
                            fontWeight="700"
                            color="$brown"
                            style={{ fontFamily: FONT_BOLD }}
                        >
                            Click on any day to view logs
                        </Text>
                    </XStack>
                </YStack>
            </View>
        </YStack>
    )
}
