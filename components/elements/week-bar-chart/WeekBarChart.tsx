import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { colors } from '../../../theme/tokens'
import { DayData } from '../../../types/week'
import { Feather } from '@expo/vector-icons'
import { styles } from './WeekBarChart.styles'
import { WEEK_BAR_CHART_CONSTANTS } from './WeekBarChart.constants'

interface WeekBarChartProps {
    data: DayData[]
    onDayPress: (day: DayData) => void
}

/**
 * WeekBarChart - Weekly progress visualization
 */
export function WeekBarChart({ data, onDayPress }: WeekBarChartProps) {
    return (
        <YStack style={styles.container} space="$md">
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    {WEEK_BAR_CHART_CONSTANTS.TITLE}
                </Text>
            </View>

            <View style={styles.chartArea}>
                <YStack style={styles.contentYStack}>
                    {/* Bars Area */}
                    <XStack style={styles.barsContainer}>
                        {data.map((day, index) => {
                            const barHeight = `${day.productivityScore}%`
                            const maxScore = Math.max(...data.map(d => d.productivityScore))
                            const relativeScore = maxScore > 0 ? day.productivityScore / maxScore : 0
                            const opacity = Math.max(0.3, relativeScore)

                            return (
                                <Pressable
                                    key={index}
                                    onPress={() => onDayPress(day)}
                                    style={styles.pressableBar}
                                >
                                    {/* The Bar */}
                                    <View
                                        style={[
                                            styles.bar,
                                            {
                                                height: barHeight as any,
                                                opacity,
                                                shadowColor: day.isBestDay ? colors.brown : 'transparent',
                                                shadowOffset: { width: 0, height: 2 },
                                                shadowOpacity: 0.2,
                                                shadowRadius: 4,
                                            }
                                        ]}
                                    />

                                    {/* Day Label */}
                                    <Text
                                        style={[
                                            styles.dayLabel,
                                            {
                                                color: day.isBestDay ? colors.brown : colors.gray,
                                                fontWeight: day.isBestDay ? "700" : "400" as any,
                                                fontFamily: day.isBestDay ? WEEK_BAR_CHART_CONSTANTS.FONTS.BOLD : WEEK_BAR_CHART_CONSTANTS.FONTS.REGULAR
                                            }
                                        ]}
                                    >
                                        {day.day}
                                    </Text>
                                </Pressable>
                            )
                        })}
                    </XStack>

                    {/* Separator Line */}
                    <View style={styles.separator} />

                    {/* Helper Text */}
                    <XStack style={styles.helperStack}>
                        <Feather name="mouse-pointer" size={16} color={colors.brown} />
                        <Text style={styles.helperText}>
                            {WEEK_BAR_CHART_CONSTANTS.HELPER_TEXT}
                        </Text>
                    </XStack>
                </YStack>
            </View>
        </YStack>
    )
}
