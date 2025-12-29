import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { YStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { styles } from './SplashScreen.styles'
import { SPLASH_SCREEN_CONSTANTS } from './SplashScreen.constants'

type SplashScreenProps = {
    onComplete: () => void
}

/**
 * Splash Screen - intro with mascot
 */
export function SplashScreen({ onComplete }: SplashScreenProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, SPLASH_SCREEN_CONSTANTS.AUTO_NAVIGATE_MS)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <View style={styles.container}>
            <YStack space="$lg" alignItems="center">
                {/* Mascot in circular form */}
                <View style={styles.mascotContainer}>
                    <Image
                        source={require('../../../assets/nana-mascot-png-normal.png')}
                        style={styles.mascotImage}
                    />
                </View>

                {/* App name */}
                <Text style={styles.appName}>
                    {SPLASH_SCREEN_CONSTANTS.APP_NAME}
                </Text>

                <Text style={styles.tagline}>
                    {SPLASH_SCREEN_CONSTANTS.TAGLINE}
                </Text>
            </YStack>
            <StatusBar style="dark" />
        </View>
    )
}
