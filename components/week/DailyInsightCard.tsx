import React from 'react'
import { View, Text, YStack, XStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'
import { DAILY_AI_SUMMARIES } from '../../types/week'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

// Map keys to display labels
const DAY_LABELS: Record<string, string> = {
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun'
}

/**
 * DailyInsightCard - Displays AI summary for each day of the week
 */
export function DailyInsightCard() {
    // Filter out null values
    const validSummaries = Object.entries(DAILY_AI_SUMMARIES).filter(([_, summary]) => summary !== null)

    return (
        <View style={{ position: 'relative', width: '100%' }}>
            {/* Shadow layer */}
            <View
                style={{
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    right: -4,
                    bottom: -4,
                    backgroundColor: '#E6DCC3',
                    borderRadius: 24,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Main card */}
            <View
                backgroundColor="$creamDark"
                borderRadius={24}
                borderWidth={2}
                borderColor="#E6DCC3"
                padding={24}
                style={{ overflow: 'hidden' }}
            >
                {/* Header */}
                <XStack alignItems="center" justifyContent="center" marginBottom={20}>
                    <Text
                        fontSize={18}
                        fontWeight="700"
                        color="$brown"
                        style={{ fontFamily: FONT_BOLD }}
                    >
                        Daily Insights
                    </Text>
                </XStack>

                {/* Daily Summaries List */}
                <YStack>
                    {validSummaries.map(([dayKey, summary], index) => (
                        <View key={dayKey}>
                            <XStack gap={12} alignItems="flex-start">
                                {/* Day Label */}
                                <Text
                                    width={40}
                                    fontSize={14}
                                    lineHeight={22}
                                    fontWeight="700"
                                    color="$brown"
                                    style={{ fontFamily: FONT_BOLD, opacity: 0.7, textTransform: 'uppercase' }}
                                >
                                    {DAY_LABELS[dayKey] || dayKey}
                                </Text>

                                {/* Summary Text */}
                                <Text
                                    flex={1}
                                    fontSize={15}
                                    color="$brown"
                                    lineHeight={22}
                                    style={{ fontFamily: FONT_REGULAR }}
                                >
                                    {summary}
                                </Text>
                            </XStack>

                            {/* Divider line between items, but not after the last one */}
                            {index < validSummaries.length - 1 && (
                                <View
                                    height={1}
                                    backgroundColor={colors.brown}
                                    opacity={0.1}
                                    marginVertical={6}
                                    width="100%"
                                />
                            )}
                        </View>
                    ))}
                </YStack>
            </View>
        </View>
    )
}
