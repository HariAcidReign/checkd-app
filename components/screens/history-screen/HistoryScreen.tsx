import React, { useState, useRef } from 'react'
import { FlatList, View, Text } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../../theme/tokens'
import { HistoryWeekCard } from '../../elements/history-week-card/HistoryWeekCard'
import { MOCK_HISTORY_DATA } from '../../../types/history'
import { styles } from './HistoryScreen.styles'
import { HISTORY_SCREEN_CONSTANTS } from './HistoryScreen.constants'
import { Dimensions } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export function HistoryScreen() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const flatListRef = useRef<FlatList>(null)

    const handleScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH)
        setCurrentIndex(index)
    }

    const scrollToIndex = (index: number) => {
        if (index >= 0 && index < MOCK_HISTORY_DATA.length) {
            flatListRef.current?.scrollToIndex({ index, animated: true })
        }
    }

    const canGoLeft = currentIndex > 0
    const canGoRight = currentIndex < MOCK_HISTORY_DATA.length - 1

    return (
        <View style={styles.container}>
            {/* Header */}
            <YStack style={styles.headerContainer} space="$md">
                <View style={styles.titleWrapper}>
                    {/* Navigation Arrows */}
                    <XStack style={styles.navArrows}>
                        <Feather
                            name="chevron-left"
                            size={32}
                            color={canGoLeft ? colors.brown : colors.gray}
                            onPress={() => canGoLeft && scrollToIndex(currentIndex - 1)}
                            style={{ opacity: canGoLeft ? 1 : 0.3 }}
                        />
                        <Feather
                            name="chevron-right"
                            size={32}
                            color={canGoRight ? colors.brown : colors.gray}
                            onPress={() => canGoRight && scrollToIndex(currentIndex + 1)}
                            style={{ opacity: canGoRight ? 1 : 0.3 }}
                        />
                    </XStack>

                    <Text style={styles.headerText}>
                        {HISTORY_SCREEN_CONSTANTS.TITLE}
                    </Text>
                </View>
            </YStack>

            {/* Carousel */}
            <FlatList
                ref={flatListRef}
                data={MOCK_HISTORY_DATA}
                renderItem={({ item }) => (
                    <View style={styles.carouselItem}>
                        <HistoryWeekCard data={item} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={HISTORY_SCREEN_CONSTANTS.SCROLL_EVENT_THROTTLE}
                bounces={false}
            />

            {/* Pagination Dots */}
            <XStack style={styles.paginationContainer} gap={8}>
                {MOCK_HISTORY_DATA.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            { backgroundColor: currentIndex === i ? colors.brown : '#D3C4A5' }
                        ]}
                    />
                ))}
            </XStack>

            <StatusBar style="dark" />
        </View>
    )
}
