import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { YStack, XStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { DailyInsightCard } from '../../elements/daily-insight-card/DailyInsightCard'
import { WeekBarChart } from '../../elements/week-bar-chart/WeekBarChart'
import { DayDetailsBottomSheet } from '../../elements/day-details-bottom-sheet/DayDetailsBottomSheet'
import { MOCK_WEEK_DATA, DayData } from '../../../types/week'
import { styles } from './WeekScreen.styles'
import { WEEK_SCREEN_CONSTANTS } from './WeekScreen.constants'

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
        setTimeout(() => setSelectedDay(null), WEEK_SCREEN_CONSTANTS.MODAL_CLOSE_DELAY)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <YStack style={styles.mainStack} space="$lg">
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <View style={styles.titleRow}>
                            <Text style={styles.titleText}>
                                {WEEK_SCREEN_CONSTANTS.TITLE}
                            </Text>
                        </View>

                        <Text style={styles.dateRangeText}>
                            {WEEK_SCREEN_CONSTANTS.DATE_RANGE}
                        </Text>
                    </View>

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
