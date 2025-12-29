import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { View, Text, YStack, XStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'
import { DailyInsightCard } from '../../components/week/DailyInsightCard'
import { WeekBarChart } from '../../components/week/WeekBarChart'
import { DayDetailsBottomSheet } from '../../components/week/DayDetailsBottomSheet'
import { MOCK_WEEK_DATA, DayData } from '../../types/week'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

export function WeekScreen() {
    const [selectedDay, setSelectedDay] = useState<DayData | null>(null)
    const [modalVisible, setModalVisible] = useState(false)

    const handleDayPress = (day: DayData) => {
        setSelectedDay(day)
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
        // Small delay to clear data after animation
        setTimeout(() => setSelectedDay(null), 300)
    }

    return (
        <View flex={1} backgroundColor="$cream">
            <ScrollView
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                <YStack paddingHorizontal={24} paddingTop={60} space="$lg">
                    {/* Header */}
                    <YStack alignItems="center" marginBottom={8}>
                        <XStack width="100%" justifyContent="center" alignItems="center" position="relative">
                            <Text
                                fontSize={32}
                                fontWeight="800"
                                color="$brown"
                                style={{
                                    fontFamily: FONT_BOLD,
                                    letterSpacing: 1
                                }}
                            >
                                This Week
                            </Text>

                            {/* Calendar Icon - right aligned (ignored per new instructions, but keeping structure if needed later) 
                    User said "ignore Calendar icon in top right corner", so we omit it.
                */}
                        </XStack>

                        <Text
                            fontSize={14}
                            color="$gray"
                            marginTop={8}
                            style={{ fontFamily: FONT_REGULAR, letterSpacing: 2 }}
                        >
                            Oct 16 - Oct 22
                        </Text>
                    </YStack>

                    {/* Daily Insights */}
                    <DailyInsightCard />

                    {/* Bar Chart Visual */}
                    <WeekBarChart
                        data={MOCK_WEEK_DATA}
                        onDayPress={handleDayPress}
                    />
                </YStack>
            </ScrollView>

            {/* Functionality: Bottom Sheet Modal */}
            <DayDetailsBottomSheet
                visible={modalVisible}
                dayData={selectedDay}
                onClose={handleCloseModal}
            />

            <StatusBar style="dark" />
        </View>
    )
}
