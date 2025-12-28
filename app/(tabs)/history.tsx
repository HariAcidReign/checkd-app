import { View, Text } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HistoryScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View flex={1} alignItems="center" justifyContent="center" backgroundColor="$cream">
                <Text color="$brown" fontSize={20} fontWeight="700">History Screen</Text>
                <Text color="$gray" marginTop={10}>Coming Soon</Text>
            </View>
        </SafeAreaView>
    )
}
