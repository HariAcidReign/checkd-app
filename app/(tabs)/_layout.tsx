import { Tabs } from 'expo-router'
import { View, useTheme } from 'tamagui'
import { NavIcon } from '../../components/ui/NavIcon'
import { colors } from '../../theme/tokens'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.cream, // Match background
                    borderTopColor: colors.brown,
                    borderTopWidth: 2,
                    height: 80, // Taller tab bar
                    paddingBottom: 20,
                    paddingTop: 10,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarShowLabel: false, // Icon only as per design usually, or we can enable if needed
                tabBarActiveTintColor: colors.brown,
                tabBarInactiveTintColor: colors.brown + '80', // 50% opacity
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <NavIcon name="home" active={focused} label="Home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="week"
                options={{
                    title: 'Week',
                    tabBarIcon: ({ focused }) => (
                        <NavIcon name="bar-chart-2" active={focused} label="Week" />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ focused }) => (
                        <NavIcon name="clock" active={focused} label="History" />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused }) => (
                        <NavIcon name="settings" active={focused} label="Settings" />
                    ),
                }}
            />
        </Tabs>
    )
}
