import React, { useState } from 'react'
import { Pressable, Image } from 'react-native'
import { View, Text, XStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../theme/tokens'
import { useCheckIns } from '../../hooks/useCheckIns'
import { CheckInModal } from '../CheckInModal'
import { ProductivityType } from '../../types/checkin'

// Font family names (loaded via expo-google-fonts)
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_SEMIBOLD = 'Inconsolata_600SemiBold'
const FONT_BOLD = 'Inconsolata_700Bold'

type PillButtonProps = {
    children: React.ReactNode
    onPress?: () => void
    variant?: 'primary' | 'secondary' | 'ghost'
    width?: number | string
    showIcon?: boolean
}

/**
 * PillButton - Pressable button with hand-drawn aesthetic and solid shadow
 */
export function PillButton({ children, onPress, variant = 'primary', width, showIcon = false }: PillButtonProps) {
    const getStyles = () => {
        switch (variant) {
            case 'secondary':
                return {
                    backgroundColor: colors.cream,
                    borderColor: colors.brown,
                    textColor: colors.brown,
                }
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    borderColor: colors.brown,
                    textColor: colors.brown,
                }
            default: // primary
                return {
                    backgroundColor: colors.brown,
                    borderColor: colors.brownDark,
                    textColor: colors.cream,
                }
        }
    }

    const styles = getStyles()

    return (
        <View style={{ width: width, position: 'relative' }}>
            {/* Shadow layer - offset solid shadow */}
            <View
                style={{
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    right: -4,
                    bottom: -4,
                    backgroundColor: colors.brownDark,
                    borderRadius: 20,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* Main button */}
            <Pressable
                onPress={onPress}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? colors.brownDark : styles.backgroundColor,
                    borderColor: styles.borderColor,
                    borderWidth: 3,
                    borderRadius: 20,
                    paddingHorizontal: 24,
                    paddingVertical: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: showIcon ? 'space-between' : 'flex-start',
                    width: '100%',
                    transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                })}
            >
                <Text
                    fontSize={18}
                    fontWeight="700"
                    style={{ color: styles.textColor, flex: 1, fontFamily: FONT_BOLD }}
                >
                    {children}
                </Text>

                {showIcon && (
                    <View
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 18,
                            backgroundColor: 'rgba(255,255,255,0.25)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 24,
                        }}
                    >
                        <Feather name="plus" size={20} color={styles.textColor} />
                    </View>
                )}
            </Pressable>
        </View>
    )
}

/**
 * CircularProgress - Simple circular progress using View borders
 */
function CircularProgress({ progress = 0, size = 32 }: { progress?: number, size?: number }) {
    // Simple visual representation using border color change + opacity overlay
    // This is a basic implementation - for perfect circle segments we'd need SVG
    // But per request to remove SVG dependency, we'll use a hacky View approach
    // Or better: just show it as filled/unfilled for now, or use multiple views

    const strokeColor = progress > 0 ? colors.sage : 'rgba(0,0,0,0.1)'

    // Calculate if we should fill the center or show a partial ring
    // Without SVG, true partial ring is hard. 
    // Let's make it a pie chart style using conic-gradient (web) or just fill level if native

    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 3,
                borderColor: 'rgba(0,0,0,0.1)',
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Fill based on progress - simplified for View-only implementation */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${progress * 100}%`,
                    backgroundColor: colors.sage, // Same as mascot highlight
                    opacity: 0.5,
                }}
            />

            {/* Border overlay to match theme */}
            <View
                style={{
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    borderRadius: size,
                    borderWidth: 3,
                    borderColor: colors.brown,
                    opacity: 0.2
                }}
            />

            {/* Active border if has progress */}
            {progress > 0 && (
                <View
                    style={{
                        position: 'absolute',
                        top: -3,
                        left: -3,
                        right: -3,
                        bottom: -3,
                        borderRadius: size,
                        borderWidth: 3,
                        borderColor: colors.sage,
                    }}
                />
            )}
        </View>
    )
}

/**
 * Mascot - Circular mascot image component
 */
export function Mascot({ size = 170 }: { size?: number }) {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: colors.sand,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                source={require('../../assets/nana-mascot-png-normal.png')}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                }}
            />
        </View>
    )
}

/**
 * Card with offset solid shadow
 */
function ShadowCard({ children, style }: { children: React.ReactNode, style?: any }) {
    return (
        <View style={{ position: 'relative', ...style }}>
            {/* Shadow layer */}
            <View
                style={{
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    right: -4,
                    bottom: -4,
                    backgroundColor: colors.brownDark,
                    borderRadius: 16,
                    width: '100%',
                    height: '100%',
                }}
            />
            {/* Main card */}
            <View
                backgroundColor="$creamDark"
                borderRadius={16}
                borderWidth={3}
                borderColor="$brown"
                paddingHorizontal={16}
                paddingVertical={14}
                style={{ backgroundColor: colors.creamDark }}
            >
                {children}
            </View>
        </View>
    )
}

/**
 * Home Screen - Main screen with mascot and check-in CTA
 */
export function HomeScreen() {
    // Use custom hook for check-in state
    const { remaining, progress, addCheckIn } = useCheckIns()

    // Modal state
    const [modalVisible, setModalVisible] = useState(false)

    const handleSaveCheckIn = (text: string, productivity: ProductivityType) => {
        addCheckIn(text, productivity)
        setModalVisible(false)
    }

    return (
        <View flex={1} backgroundColor="$cream">
            {/* Check-in Modal */}
            <CheckInModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={handleSaveCheckIn}
            />

            {/* Header - moved down, bold all-caps, faint shadow */}
            <View paddingTop={60} paddingBottom={20} alignItems="center">
                <Text
                    fontSize={32}
                    fontWeight="800"
                    color="$brown"
                    style={{
                        fontFamily: FONT_BOLD,
                        textTransform: 'uppercase',
                        letterSpacing: 3,
                        textShadowColor: 'rgba(0,0,0,0.15)',
                        textShadowOffset: { width: 2, height: 2 },
                        textShadowRadius: 0,
                    }}
                >
                    Checkd
                </Text>
            </View>

            {/* Main content - centered, adjusted to flow better */}
            <View flex={1} justifyContent="center" alignItems="center" paddingHorizontal={24} marginTop={-40}>
                {/* Mascot with glow effect */}
                <View position="relative" alignItems="center" justifyContent="center">
                    {/* Glow effect - blurred background */}
                    <View
                        position="absolute"
                        width={220}
                        height={220}
                        borderRadius={110}
                        backgroundColor="rgba(255, 230, 150, 0.5)"
                        style={{
                            shadowColor: '#FFE699',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.8,
                            shadowRadius: 30,
                        }}
                    />

                    {/* Outer ring (decorative) */}
                    <View
                        width={200}
                        height={200}
                        borderRadius={100}
                        borderWidth={3}
                        borderColor="$brown"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="transparent"
                        style={{
                            shadowColor: colors.brownDark,
                            shadowOffset: { width: 4, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 0,
                            elevation: 4,
                        }}
                    >
                        {/* Mascot */}
                        <Mascot size={170} />
                    </View>
                </View>

                {/* Status text - bigger and thicker */}
                <Text
                    fontSize={24}
                    fontWeight="700"
                    color="$brown"
                    textAlign="center"
                    marginTop={32}
                    style={{ fontFamily: FONT_BOLD }}
                >
                    Today's going steady
                </Text>
            </View>

            {/* Bottom section with CTA and counter */}
            <View paddingHorizontal={24} paddingBottom={32} gap={20}>
                {/* Primary CTA with shadow - opens modal */}
                <PillButton
                    onPress={() => setModalVisible(true)}
                    width="100%"
                    showIcon
                >
                    What am I doing now
                </PillButton>

                {/* Check-ins counter card with shadow */}
                <ShadowCard>
                    <XStack justifyContent="space-between" alignItems="center">
                        <XStack gap={12} alignItems="center">
                            {/* Number badge */}
                            <View
                                width={44}
                                height={44}
                                backgroundColor="$cream"
                                borderRadius={12}
                                borderWidth={2}
                                borderColor="$brown"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text
                                    fontSize={20}
                                    fontWeight="bold"
                                    color="$terracotta"
                                    style={{ fontFamily: FONT_BOLD }}
                                >
                                    {remaining}
                                </Text>
                            </View>

                            {/* Text */}
                            <View>
                                <Text
                                    fontSize={15}
                                    fontWeight="600"
                                    color="$brown"
                                    style={{ fontFamily: FONT_SEMIBOLD }}
                                >
                                    Check-ins left today
                                </Text>
                                <Text
                                    fontSize={12}
                                    color="$gray"
                                    style={{ fontFamily: FONT_REGULAR }}
                                >
                                    resets at midnight
                                </Text>
                            </View>
                        </XStack>

                        {/* Progress circle */}
                        <CircularProgress progress={progress} size={32} />
                    </XStack>
                </ShadowCard>
            </View>
        </View>
    )
}
