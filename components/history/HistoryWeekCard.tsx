import React from 'react'
import { View, Text, XStack, YStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'
import { HistoryWeekData } from '../../types/history'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

interface HistoryWeekCardProps {
    data: HistoryWeekData
}

export function HistoryWeekCard({ data }: HistoryWeekCardProps) {
    return (
        <View
            width="100%"
            height="100%"
            justifyContent="center"
        >
            {/* Card Container */}
            <View
                backgroundColor="$cream"
                borderRadius={32}
                borderWidth={3}
                borderColor={colors.brown}
                height="85%"
                style={{ position: 'relative', overflow: 'visible' }}
            >
                {/* Header Section (Date pill) positioned absolutely to overlap top border */}
                <View
                    position="absolute"
                    top={-20}
                    left={0}
                    right={0}
                    alignItems="center"
                    zIndex={100}
                >
                    <View
                        backgroundColor="$cream"
                        borderWidth={2}
                        borderColor={colors.brown}
                        paddingHorizontal={24}
                        paddingVertical={8}
                        borderRadius={20}
                    >
                        <Text
                            fontSize={14}
                            color="$brown"
                            fontWeight="700"
                            style={{ fontFamily: FONT_BOLD, letterSpacing: 1 }}
                        >
                            {data.weekLabel}
                        </Text>
                    </View>
                </View>

                {/* Main Content - Padded down to account for Pill */}
                <YStack flex={1} padding={24} paddingTop={40} space="$xl" justifyContent="space-between">

                    {/* Title */}
                    <YStack alignItems="center" space="$xs">
                        <Text
                            fontSize={24}
                            fontWeight="800"
                            color="$brown"
                            style={{ fontFamily: FONT_BOLD }}
                        >
                            {data.title}
                        </Text>
                        <Text
                            fontSize={14}
                            color="$gray"
                            style={{ fontFamily: FONT_REGULAR, textTransform: 'uppercase', letterSpacing: 2 }}
                        >
                            Weekly Summary
                        </Text>
                    </YStack>

                    {/* Chart Container */}
                    <View flex={1} justifyContent="center" maxHeight={250}>
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
                                    <YStack key={index} alignItems="center" gap={8} height="100%" justifyContent="flex-end" flex={1}>
                                        <View
                                            width={16} // Thinner for history
                                            height={barHeight}
                                            backgroundColor={colors.brown}
                                            borderRadius={6}
                                            style={{ opacity }}
                                        />
                                        <Text
                                            fontSize={12}
                                            color="$gray"
                                            style={{ fontFamily: FONT_REGULAR }}
                                        >
                                            {day.day}
                                        </Text>
                                    </YStack>
                                )
                            })}
                        </XStack>
                    </View>

                    {/* Summary Box */}
                    <View
                        backgroundColor="#F0EAD6"
                        borderRadius={24}
                        borderWidth={2}
                        borderColor="rgba(139, 111, 71, 0.2)"
                        padding={20}
                    >
                        {/* Icon Removed */}
                        <Text
                            fontSize={16}
                            color="$brown"
                            lineHeight={24}
                            style={{ fontFamily: FONT_REGULAR }}
                            flexWrap="wrap" // Ensure wrapping
                        >
                            {data.summary}
                        </Text>
                    </View>

                </YStack>
            </View>
        </View>
    )
}
