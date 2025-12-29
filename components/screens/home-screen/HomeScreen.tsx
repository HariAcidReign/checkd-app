import React, { useState } from 'react'
import { Pressable, Image, View, Text } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../../theme/tokens'
import { useCheckIns } from '../../../hooks/useCheckIns'
import { CheckInModal } from '../../elements/check-in-modal/CheckInModal'
import { ProductivityType } from '../../../types/checkin'
import { styles } from './HomeScreen.styles'
import { HOME_SCREEN_CONSTANTS } from './HomeScreen.constants'

/**
 * Local PillButton - Re-implemented for HomeScreen to keep logic exactly as it was
 * (Note: Elements/PillButton has a slightly different variant logic)
 */
function LocalPillButton({ children, onPress, variant = 'primary', showIcon = false }: any) {
    const getVariantColors = () => {
        switch (variant) {
            case 'secondary': return { bg: colors.cream, border: colors.brown, text: colors.brown }
            case 'ghost': return { bg: 'transparent', border: colors.brown, text: colors.brown }
            default: return { bg: colors.brown, border: colors.brownDark, text: colors.cream }
        }
    }
    const colorScheme = getVariantColors()
    return (
        <View style={styles.pillButtonWrapper}>
            <View style={styles.pillButtonShadow} />
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.pillButtonContent,
                    {
                        backgroundColor: pressed ? colors.brownDark : colorScheme.bg,
                        borderColor: colorScheme.border,
                        justifyContent: showIcon ? 'space-between' : 'flex-start',
                        transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                    }
                ]}
            >
                <Text style={[styles.pillButtonText, { color: colorScheme.text }]}>
                    {children}
                </Text>
                {showIcon && (
                    <View style={styles.pillButtonIconWrapper}>
                        <Feather name="plus" size={20} color={colorScheme.text} />
                    </View>
                )}
            </Pressable>
        </View>
    )
}

function CircularProgress({ progress = 0, size = 32 }: { progress?: number, size?: number }) {
    return (
        <View style={[styles.circularProgressContainer, { width: size, height: size, borderRadius: size / 2 }]}>
            <View style={[styles.circularProgressFill, { height: `${progress * 100}%` }]} />
            <View style={[styles.circularProgressBorderOverlay, { borderRadius: size }]} />
            {progress > 0 && (
                <View style={[styles.circularProgressActiveBorder, { borderRadius: size }]} />
            )}
        </View>
    )
}

function Mascot({ size = 170 }: { size?: number }) {
    return (
        <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: colors.sand, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../../assets/nana-mascot-png-normal.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            />
        </View>
    )
}

function ShadowCard({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.shadowCardContainer}>
            <View style={styles.shadowCardShadow} />
            <View style={styles.shadowCardMain}>
                {children}
            </View>
        </View>
    )
}

export function HomeScreen() {
    const { remaining, progress, addCheckIn } = useCheckIns()
    const [modalVisible, setModalVisible] = useState(false)

    const handleSaveCheckIn = (text: string, productivity: ProductivityType) => {
        addCheckIn(text, productivity)
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <CheckInModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={handleSaveCheckIn}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {HOME_SCREEN_CONSTANTS.TITLE}
                </Text>
            </View>

            <View style={styles.contentArea}>
                <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.glowEffect} />
                    <View style={styles.outerRing}>
                        <Mascot size={HOME_SCREEN_CONSTANTS.MASCOT_SIZE} />
                    </View>
                </View>

                <Text style={styles.statusText}>
                    {HOME_SCREEN_CONSTANTS.STATUS_TEXT}
                </Text>
            </View>

            <View style={styles.bottomSection}>
                <LocalPillButton
                    onPress={() => setModalVisible(true)}
                    showIcon
                >
                    {HOME_SCREEN_CONSTANTS.CTA_TEXT}
                </LocalPillButton>

                <ShadowCard>
                    <XStack justifyContent="space-between" alignItems="center">
                        <XStack gap={12} alignItems="center">
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>
                                    {remaining}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.counterLabel}>
                                    {HOME_SCREEN_CONSTANTS.COUNTER_TEXT}
                                </Text>
                                <Text style={styles.resetLabel}>
                                    {HOME_SCREEN_CONSTANTS.RESET_TEXT}
                                </Text>
                            </View>
                        </XStack>
                        <CircularProgress progress={progress} size={32} />
                    </XStack>
                </ShadowCard>
            </View>
            <StatusBar style="dark" />
        </View>
    )
}
