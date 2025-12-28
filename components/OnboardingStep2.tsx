import React from 'react'
import { View, YStack, Text } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable } from 'react-native'
import { colors } from '../theme/tokens'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

type OnboardingStep2Props = {
    onComplete: () => void
}

/**
 * Onboarding Step 2 - Second yes-oriented question
 */
export function OnboardingStep2({ onComplete }: OnboardingStep2Props) {
    return (
        <View flex={1} backgroundColor="$cream" padding="$lg">
            <YStack flex={1} justifyContent="center" alignItems="center" space="$xl">
                {/* Mascot in circular form with sage background */}
                <View
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        backgroundColor: colors.sage,
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
                        source={require('../assets/nana-mascot.png')}
                        style={{
                            width: 85,
                            height: 85,
                            resizeMode: 'contain',
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
                        Ready for gentle accountability?
                    </Text>
                    <Text
                        fontSize={16}
                        color="$gray"
                        textAlign="center"
                        style={{ fontFamily: FONT_REGULAR }}
                    >
                        We'll ask what you're doing at random times. No judgment, just awareness. You can skip anytime.
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
                        onPress={onComplete}
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
                            I'm ready!
                        </Text>
                    </Pressable>
                </View>
            </YStack>

            <StatusBar style="dark" />
        </View>
    )
}
