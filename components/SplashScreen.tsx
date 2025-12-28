import React from 'react'
import { View, YStack, Text } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import { colors } from '../theme/tokens'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_BOLD = 'Inconsolata_700Bold'

type SplashScreenProps = {
    onComplete: () => void
}

/**
 * Splash Screen - Simple intro with mascot
 */
export function SplashScreen({ onComplete }: SplashScreenProps) {
    // Auto-navigate after 2 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onComplete()
        }, 2000)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <View flex={1} backgroundColor="$cream" justifyContent="center" alignItems="center">
            <YStack space="$lg" alignItems="center">
                {/* Mascot in circular form */}
                <View
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: 70,
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
                        source={require('../assets/nana-mascot.png')}
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain',
                        }}
                    />
                </View>

                {/* App name - bold all-caps with shadow */}
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

                <Text
                    fontSize={14}
                    color="$gray"
                    style={{ fontFamily: FONT_REGULAR }}
                >
                    Gentle accountability
                </Text>
            </YStack>

            <StatusBar style="dark" />
        </View>
    )
}
