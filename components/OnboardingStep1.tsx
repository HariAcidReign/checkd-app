import React from 'react'
import { View, YStack, Text } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable } from 'react-native'
import { colors } from '../theme/tokens'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

type OnboardingStep1Props = {
    onNext: () => void
}

/**
 * Onboarding Step 1 - First yes-oriented question
 */
export function OnboardingStep1({ onNext }: OnboardingStep1Props) {
    return (
        <View flex={1} backgroundColor="$cream" padding="$lg">
            <YStack flex={1} justifyContent="center" alignItems="center" space="$xl">
                {/* Mascot in circular form */}
                <View
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        backgroundColor: colors.sand,
                        borderWidth: 3,
                        borderColor: colors.brown,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: colors.brownDark,
                        shadowOffset: { width: 4, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 0,
                    }}
                >
                    <Image
                        source={require('../assets/nana-mascot-png-normal.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                    />
                </View>

                {/* Question */}
                <YStack space="$md" alignItems="center" maxWidth={320}>
                    <Text
                        fontSize={24}
                        fontWeight="700"
                        color="$brown"
                        textAlign="center"
                        style={{ fontFamily: FONT_BOLD }}
                    >
                        Want to build better habits?
                    </Text>
                    <Text
                        fontSize={16}
                        color="$gray"
                        textAlign="center"
                        style={{ fontFamily: FONT_REGULAR }}
                    >
                        Checkd sends gentle check-ins throughout your day to help you stay aware of how you spend your time.
                    </Text>
                </YStack>

                {/* CTA with shadow */}
                <View style={{ width: 280, position: 'relative' }}>
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
                    <Pressable
                        onPress={onNext}
                        style={({ pressed }) => ({
                            backgroundColor: pressed ? colors.brownDark : colors.brown,
                            borderColor: colors.brownDark,
                            borderWidth: 3,
                            borderRadius: 20,
                            paddingHorizontal: 24,
                            paddingVertical: 18,
                            alignItems: 'center',
                            transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                        })}
                    >
                        <Text
                            fontSize={18}
                            fontWeight="700"
                            style={{ color: colors.cream, fontFamily: FONT_BOLD }}
                        >
                            Yes, let's do it!
                        </Text>
                    </Pressable>
                </View>
            </YStack>

            <StatusBar style="dark" />
        </View>
    )
}
