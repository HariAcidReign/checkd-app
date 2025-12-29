import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { YStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { styles } from './OnboardingStep1.styles'
import { ONBOARDING_STEP1_CONSTANTS } from './OnboardingStep1.constants'
import { colors } from '../../../../theme/tokens'

type OnboardingStep1Props = {
    onNext: () => void
}

export function OnboardingStep1({ onNext }: OnboardingStep1Props) {
    return (
        <View style={styles.container}>
            <YStack flex={1} justifyContent="center" alignItems="center" space="$xl">
                {/* Mascot */}
                <View style={styles.mascotWrapper}>
                    <Image
                        source={require('../../../../assets/nana-mascot-png-normal.png')}
                        style={styles.mascotImage}
                    />
                </View>

                {/* Question */}
                <YStack space="$md" alignItems="center" maxWidth={320}>
                    <Text style={styles.question}>
                        {ONBOARDING_STEP1_CONSTANTS.QUESTION}
                    </Text>
                    <Text style={styles.description}>
                        {ONBOARDING_STEP1_CONSTANTS.DESCRIPTION}
                    </Text>
                </YStack>

                {/* CTA */}
                <View style={styles.ctaWrapper}>
                    <View style={styles.ctaShadow} />
                    <Pressable
                        onPress={onNext}
                        style={({ pressed }) => [
                            styles.ctaButton,
                            {
                                backgroundColor: pressed ? colors.brownDark : colors.brown,
                                transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                            }
                        ]}
                    >
                        <Text style={styles.ctaText}>
                            {ONBOARDING_STEP1_CONSTANTS.CTA_TEXT}
                        </Text>
                    </Pressable>
                </View>
            </YStack>
            <StatusBar style="dark" />
        </View>
    )
}
