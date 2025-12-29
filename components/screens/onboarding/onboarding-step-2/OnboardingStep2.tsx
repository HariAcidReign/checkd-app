import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { YStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { styles } from './OnboardingStep2.styles'
import { ONBOARDING_STEP2_CONSTANTS } from './OnboardingStep2.constants'
import { colors } from '../../../../theme/tokens'

type OnboardingStep2Props = {
    onComplete: () => void
}

export function OnboardingStep2({ onComplete }: OnboardingStep2Props) {
    return (
        <View style={styles.container}>
            <YStack flex={1} justifyContent="center" alignItems="center" space="$xl">
                {/* Mascot with sage background */}
                <View style={styles.mascotWrapper}>
                    <Image
                        source={require('../../../../assets/nana-mascot-png-normal.png')}
                        style={styles.mascotImage}
                    />
                </View>

                {/* Question */}
                <YStack space="$md" alignItems="center" maxWidth={320}>
                    <Text style={styles.question}>
                        {ONBOARDING_STEP2_CONSTANTS.QUESTION}
                    </Text>
                    <Text style={styles.description}>
                        {ONBOARDING_STEP2_CONSTANTS.DESCRIPTION}
                    </Text>
                </YStack>

                {/* CTA */}
                <View style={styles.ctaWrapper}>
                    <View style={styles.ctaShadow} />
                    <Pressable
                        onPress={onComplete}
                        style={({ pressed }) => [
                            styles.ctaButton,
                            {
                                backgroundColor: pressed ? colors.brownDark : colors.brown,
                                transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                            }
                        ]}
                    >
                        <Text style={styles.ctaText}>
                            {ONBOARDING_STEP2_CONSTANTS.CTA_TEXT}
                        </Text>
                    </Pressable>
                </View>
            </YStack>
            <StatusBar style="dark" />
        </View>
    )
}
