import React, { useEffect, useRef } from 'react'
import { Animated, PanResponder, ScrollView } from 'react-native'
import { View, Text, XStack, YStack } from 'tamagui'
import { colors } from '../../../theme/tokens'
import { DayData } from '../../../types/week'
import { styles } from './DayDetailsBottomSheet.styles'
import { DAY_DETAILS_CONSTANTS } from './DayDetailsBottomSheet.constants'

interface DayDetailsBottomSheetProps {
    visible: boolean
    dayData: DayData | null
    onClose: () => void
}

/**
 * DayDetailsBottomSheet - Slide up sheet with day logs
 */
export function DayDetailsBottomSheet({ visible, dayData, onClose }: DayDetailsBottomSheetProps) {
    const translateY = useRef(new Animated.Value(DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT)).current
    const isVisibleRef = useRef(visible)

    useEffect(() => {
        if (visible) {
            isVisibleRef.current = true
            Animated.spring(translateY, {
                toValue: DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT - DAY_DETAILS_CONSTANTS.SECTION_HEIGHT,
                useNativeDriver: true,
                bounciness: DAY_DETAILS_CONSTANTS.ANIMATION_BOUNCINESS
            }).start()
        } else {
            Animated.timing(translateY, {
                toValue: DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT,
                duration: DAY_DETAILS_CONSTANTS.ANIMATION_DURATION,
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
                return Math.abs(gestureState.dy) > Math.abs(gestureState.dx) && Math.abs(gestureState.dy) > 5
            },
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT - DAY_DETAILS_CONSTANTS.SECTION_HEIGHT + gestureState.dy)
                } else {
                    const resistance = gestureState.dy / 5
                    translateY.setValue(DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT - DAY_DETAILS_CONSTANTS.SECTION_HEIGHT + resistance)
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > DAY_DETAILS_CONSTANTS.CLOSE_THRESHOLD || gestureState.vy > DAY_DETAILS_CONSTANTS.VELOCITY_THRESHOLD) {
                    onClose()
                } else {
                    Animated.spring(translateY, {
                        toValue: DAY_DETAILS_CONSTANTS.SCREEN_HEIGHT - DAY_DETAILS_CONSTANTS.SECTION_HEIGHT,
                        useNativeDriver: true,
                        bounciness: DAY_DETAILS_CONSTANTS.ANIMATION_BOUNCINESS
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

    if (!dayData) return null

    return (
        <View style={styles.overlay} pointerEvents="box-none">
            <Animated.View
                style={[
                    styles.sheetContainer,
                    { transform: [{ translateY: translateY }] }
                ]}
                {...panResponder.panHandlers}
            >
                {/* Drag Handle */}
                <View style={styles.dragHandleContainer}>
                    <View style={styles.dragHandle} />
                </View>

                {/* Title Row */}
                <XStack style={styles.titleRow}>
                    <Text style={styles.title}>
                        {dayData.day === 'W' ? 'Wednesday' : DAY_DETAILS_CONSTANTS.STRINGS.DAY_DETAILS}
                    </Text>

                    {dayData.isBestDay && (
                        <View style={styles.bestDayBadge}>
                            <Text style={styles.bestDayText}>
                                {DAY_DETAILS_CONSTANTS.STRINGS.MOST_PRODUCTIVE}
                            </Text>
                        </View>
                    )}
                </XStack>

                <Text style={styles.dateSubtitle}>
                    {dayData.fullDate.toUpperCase()}
                </Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <YStack style={styles.logsContainer} space="$lg">
                        {dayData.logs.length === 0 ? (
                            <Text
                                style={{
                                    fontFamily: DAY_DETAILS_CONSTANTS.FONTS.REGULAR,
                                    textAlign: 'center',
                                    color: colors.gray,
                                    marginTop: 40
                                }}
                            >
                                {DAY_DETAILS_CONSTANTS.STRINGS.NO_LOGS}
                            </Text>
                        ) : (
                            dayData.logs.map((log, index) => (
                                <View key={log.id} style={styles.logRow}>
                                    <View style={styles.timelineContainer}>
                                        <Text style={styles.timeText}>
                                            {log.time}
                                        </Text>
                                        {index < dayData.logs.length - 1 && (
                                            <View style={styles.verticalLine} />
                                        )}
                                    </View>

                                    <View style={styles.activityContainer}>
                                        <Text style={styles.activityText}>
                                            {log.activity}
                                        </Text>
                                        <View
                                            style={[
                                                styles.categoryBadge,
                                                { backgroundColor: getCategoryColor(log.category) }
                                            ]}
                                        >
                                            <Text style={styles.categoryText}>
                                                {log.category}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )}
                    </YStack>
                </ScrollView>
            </Animated.View>
        </View>
    )
}
