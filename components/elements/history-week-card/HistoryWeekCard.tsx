import React from 'react'
import { View, Text } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { HistoryWeekData } from '../../../types/history'
import { styles } from './HistoryWeekCard.styles'
import { HISTORY_WEEK_CARD_CONSTANTS } from './HistoryWeekCard.constants'

interface HistoryWeekCardProps {
    data: HistoryWeekData
}

export function HistoryWeekCard({ data }: HistoryWeekCardProps) {
    return (
        <View style={styles.container}>
            {/* Card Container */}
            <View style={styles.card}>
                {/* Header Section (Date pill) */}
                <View style={styles.headerPillContainer}>
                    <View style={styles.headerPill}>
                        <Text style={styles.dateLabel}>
                            {data.weekLabel}
                        </Text>
                    </View>
                </View>

                {/* Main Content */}
                <YStack style={styles.contentStack} space="$xl">
                    {/* Title */}
                    <YStack style={styles.titleStack} space="$xs">
                        <Text style={styles.title}>
                            {data.title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {HISTORY_WEEK_CARD_CONSTANTS.SECTION_TITLE}
                        </Text>
                    </YStack>

                    {/* Chart Container */}
                    <View style={styles.chartContainer}>
                        <XStack
                            flex={1}
                            width="100%"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            gap={8}
                        >
                            {data.days.map((day, index) => {
                                const barHeight = `${day.productivityScore}%`
                                const maxScore = Math.max(...data.days.map(d => d.productivityScore))
                                const relativeScore = maxScore > 0 ? day.productivityScore / maxScore : 0
                                const opacity = Math.max(0.3, relativeScore)

                                return (
                                    <View key={index} style={styles.barWrapper}>
                                        <View
                                            style={[
                                                styles.bar,
                                                { height: barHeight as any, opacity }
                                            ]}
                                        />
                                        <Text style={styles.dayLabel}>
                                            {day.day}
                                        </Text>
                                    </View>
                                )
                            })}
                        </XStack>
                    </View>

                    {/* Summary Box */}
                    <View style={styles.summaryBox}>
                        <Text
                            style={[styles.summaryText, { flexWrap: 'wrap' }]}
                        >
                            {data.summary}
                        </Text>
                    </View>
                </YStack>
            </View>
        </View>
    )
}
