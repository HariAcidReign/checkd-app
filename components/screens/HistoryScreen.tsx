import React, { useState, useRef } from 'react'
import { FlatList, Dimensions } from 'react-native'
import { View, Text, YStack, XStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'
import { HistoryWeekCard } from '../../components/history/HistoryWeekCard'
import { MOCK_HISTORY_DATA } from '../../types/history'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

const SCREEN_WIDTH = Dimensions.get('window').width

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
            setCurrentIndex(index)
        }
    }

    // Navigation logic
    const canGoLeft = currentIndex > 0
    const canGoRight = currentIndex < MOCK_HISTORY_DATA.length - 1

    return (
        <View flex={1} backgroundColor="$cream">
            {/* Header */}
            <YStack paddingTop={60} paddingHorizontal={24} paddingBottom={20} space="$md">
                <View alignItems="center" justifyContent="center" position="relative">
                    {/* Navigation Arrows */}
                    <XStack width="100%" justifyContent="space-between" alignItems="center" position="absolute" zIndex={10}>
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

                    <Text
                        fontSize={32}
                        fontWeight="800"
                        color="$brown"
                        style={{ fontFamily: FONT_BOLD, letterSpacing: 1 }}
                    >
                        History
                    </Text>
                </View>
            </YStack>

            {/* Carousel */}
            <FlatList
                ref={flatListRef}
                data={MOCK_HISTORY_DATA}
                renderItem={({ item }) => (
                    // Explicitly define Item Width to match Screen Width for Paging
                    // Use paddingHorizontal to center the card visually within this full-screen-width container
                    // paddingHorizontal="8" provides the small margin from the edge (reduced from 24)
                    <View
                        width={SCREEN_WIDTH}
                        paddingHorizontal={32}
                        justifyContent="center"
                    >
                        <HistoryWeekCard data={item} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                // To minimize overscroll effects that might look like "pushing"
                bounces={false}
            />

            {/* Pagination Dots */}
            <XStack justifyContent="center" gap={8} paddingBottom={20}>
                {MOCK_HISTORY_DATA.map((_, i) => (
                    <View
                        key={i}
                        width={8}
                        height={8}
                        borderRadius={4}
                        backgroundColor={currentIndex === i ? colors.brown : '#D3C4A5'}
                    />
                ))}
            </XStack>

            <StatusBar style="dark" />
        </View>
    )
}
