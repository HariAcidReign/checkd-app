import React from 'react'
import { View, Text } from 'react-native'
import { YStack, XStack } from 'tamagui'
import { DAILY_AI_SUMMARIES } from '../../../types/week'
import { styles } from './DailyInsightCard.styles'
import { DAILY_INSIGHT_CARD_CONSTANTS } from './DailyInsightCard.constants'

/**
 * DailyInsightCard - Displays AI summary for each day of the week
 */
export function DailyInsightCard() {
    // Filter out null values
    const validSummaries = Object.entries(DAILY_AI_SUMMARIES).filter(([_, summary]) => summary !== null)

    return (
        <View style={styles.container}>
            {/* Shadow layer */}
            <View style={styles.shadow} />

            {/* Main card */}
            <View style={styles.card}>
                {/* Header */}
                <XStack style={styles.header}>
                    <Text style={styles.title}>
                        {DAILY_INSIGHT_CARD_CONSTANTS.TITLE}
                    </Text>
                </XStack>

                {/* Daily Summaries List */}
                <YStack>
                    {validSummaries.map(([dayKey, summary], index) => (
                        <View key={dayKey}>
                            <XStack style={styles.itemRow}>
                                {/* Day Label */}
                                <Text style={styles.dayLabel}>
                                    {DAILY_INSIGHT_CARD_CONSTANTS.DAY_LABELS[dayKey] || dayKey}
                                </Text>

                                {/* Summary Text */}
                                <Text style={styles.summaryText}>
                                    {summary}
                                </Text>
                            </XStack>

                            {/* Divider line between items */}
                            {index < validSummaries.length - 1 && (
                                <View style={styles.divider} />
                            )}
                        </View>
                    ))}
                </YStack>
            </View>
        </View>
    )
}
