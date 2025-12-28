import React, { useEffect, useRef } from 'react'
import { Animated, PanResponder, Dimensions, ScrollView } from 'react-native'
import { View, Text, XStack, YStack } from 'tamagui'
import { colors } from '../../theme/tokens'
import { DayData } from '../../types/week'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

interface DayDetailsBottomSheetProps {
    visible: boolean
    dayData: DayData | null
    onClose: () => void
}

const SCREEN_HEIGHT = Dimensions.get('window').height
const SECTION_HEIGHT = SCREEN_HEIGHT * 0.6

/**
 * DayDetailsBottomSheet - Slide up sheet with day logs
 * Custom implementation using Animated + PanResponder instead of Modal
 * to allow interaction with background and custom gestures.
 */
export function DayDetailsBottomSheet({ visible, dayData, onClose }: DayDetailsBottomSheetProps) {
    // Current Y position of the sheet
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current

    // Track if currently visible to handle open/close animations efficiently
    const isVisibleRef = useRef(visible)

    useEffect(() => {
        if (visible) {
            isVisibleRef.current = true
            // Slide up
            Animated.spring(translateY, {
                toValue: SCREEN_HEIGHT - SECTION_HEIGHT,
                useNativeDriver: true,
                bounciness: 4
            }).start()
        } else {
            // Slide down
            Animated.timing(translateY, {
                toValue: SCREEN_HEIGHT,
                duration: 250,
                useNativeDriver: true
            }).start(() => {
                isVisibleRef.current = false
            })
        }
    }, [visible])

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (_, gestureState) => {
                // Only capture vertical drags
                return Math.abs(gestureState.dy) > Math.abs(gestureState.dx) && Math.abs(gestureState.dy) > 5
            },
            onPanResponderMove: (_, gestureState) => {
                // Allow dragging down (positive dy)
                if (gestureState.dy > 0) {
                    translateY.setValue(SCREEN_HEIGHT - SECTION_HEIGHT + gestureState.dy)
                }
                // Resistance when dragging up excessively? 
                // For now just block dragging up past the limit
                else {
                    const resistance = gestureState.dy / 5
                    translateY.setValue(SCREEN_HEIGHT - SECTION_HEIGHT + resistance)
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                // If dragged down significantly, close it
                if (gestureState.dy > 100 || gestureState.vy > 0.5) {
                    onClose()
                } else {
                    // Otherwise snap back to open position
                    Animated.spring(translateY, {
                        toValue: SCREEN_HEIGHT - SECTION_HEIGHT,
                        useNativeDriver: true,
                        bounciness: 4
                    }).start()
                }
            }
        })
    ).current

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Productive': return '#E8DCC4'
            case 'Neutral': return '#E1DFDE'
            case 'Not Productive': return '#F5D0C6'
            default: return '#E1DFDE'
        }
    }

    // Since we are no longer using Modal, we return null if no data/not intended to be shown
    // BUT we need to keep it rendered during the exit animation.
    // However, simplest logic: always render but move it off screen if not visible?
    // Or render conditionally but use `visible` prop to animate.
    // If dayData is null, we can't render content. WeekScreen handles `dayData` persistence during close.
    // So if dayData is null, return null. WeekScreen is expected to keep dayData set until fully closed.
    if (!dayData) return null

    return (
        <View
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            pointerEvents="box-none" // Allow clicks to pass through to background
            zIndex={100}
        >
            <Animated.View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: SECTION_HEIGHT,
                    top: 0, // We use translateY to position it, relative to top 0
                    transform: [{ translateY: translateY }],
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 5,
                    backgroundColor: colors.cream,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    padding: 24,
                    paddingTop: 12,
                }}
                {...panResponder.panHandlers}
            >
                {/* Drag Handle */}
                <View alignItems="center" paddingBottom={24}>
                    <View
                        width={48}
                        height={6}
                        borderRadius={3}
                        backgroundColor="#E6DCC3"
                    />
                </View>

                {/* Title Row */}
                <XStack justifyContent="space-between" alignItems="center" marginBottom={4}>
                    <Text
                        fontSize={24}
                        fontWeight="700"
                        color="$brown"
                        style={{ fontFamily: FONT_BOLD }}
                    >
                        {dayData.day === 'W' ? 'Wednesday' : 'Day Details'}
                    </Text>

                    {dayData.isBestDay && (
                        <View
                            backgroundColor="#D4EDDA"
                            paddingHorizontal={12}
                            paddingVertical={6}
                            borderRadius={12}
                        >
                            <Text
                                fontSize={12}
                                color="#155724"
                                fontWeight="700"
                                style={{ fontFamily: FONT_BOLD }}
                            >
                                Most Productive
                            </Text>
                        </View>
                    )}
                </XStack>

                <Text
                    fontSize={14}
                    color="$gray"
                    style={{ fontFamily: FONT_REGULAR, textTransform: 'uppercase', letterSpacing: 1 }}
                    marginBottom={32}
                >
                    {dayData.fullDate.toUpperCase()}
                </Text>

                {/* Logs List - needs to handle scroll vs pan.
                    If we drag the list, we might conflict with pan responder.
                    Usually we check contentOffset.y <= 0 to allow sheet drag?
                    For simplicity, let's allow dragging mainly on the handle/header by placing PanResponder there?
                    User said "move based on how userr finger is dragging the bar at the top".
                    So let's move PanResponder to the Header View only!
                */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <YStack space="$lg" paddingBottom={40}>
                        {dayData.logs.length === 0 ? (
                            <Text
                                textAlign="center"
                                color="$gray"
                                marginTop={40}
                                style={{ fontFamily: FONT_REGULAR }}
                            >
                                No logs for this day.
                            </Text>
                        ) : (
                            dayData.logs.map((log, index) => (
                                <XStack key={log.id} gap={16}>
                                    <YStack alignItems="center" width={50}>
                                        <Text
                                            fontSize={13}
                                            color="$gray"
                                            style={{ fontFamily: FONT_REGULAR }}
                                        >
                                            {log.time}
                                        </Text>
                                        {index < dayData.logs.length - 1 && (
                                            <View
                                                width={1}
                                                flex={1}
                                                backgroundColor="#E6DCC3"
                                                marginTop={8}
                                                marginBottom={-20}
                                            />
                                        )}
                                    </YStack>

                                    <YStack flex={1} gap={8} paddingBottom={16}>
                                        <XStack justifyContent="space-between" alignItems="flex-start">
                                            <Text
                                                fontSize={16}
                                                fontWeight="700"
                                                color="$brown"
                                                style={{ fontFamily: FONT_BOLD }}
                                            >
                                                {log.activity}
                                            </Text>
                                        </XStack>
                                        <View
                                            alignSelf="flex-start"
                                            backgroundColor={getCategoryColor(log.category)}
                                            paddingHorizontal={12}
                                            paddingVertical={6}
                                            borderRadius={6}
                                        >
                                            <Text
                                                fontSize={10}
                                                fontWeight="700"
                                                color="$brown"
                                                style={{ fontFamily: FONT_BOLD, textTransform: 'uppercase' }}
                                            >
                                                {log.category}
                                            </Text>
                                        </View>
                                    </YStack>
                                </XStack>
                            ))
                        )}
                    </YStack>
                </ScrollView>
            </Animated.View>
        </View>
    )
}
