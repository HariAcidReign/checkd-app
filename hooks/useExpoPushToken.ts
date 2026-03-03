import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

// Temporary hook for fetching the Expo Push Token during backend notification testing.
// Remove this hook and its usage in App.tsx once testing is complete.
export function useExpoPushToken() {
    useEffect(() => {
        async function registerForPush() {
            if (!Device.isDevice) {
                console.log('[PushToken] Must use a physical device for push notifications.');
                return;
            }

            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== 'granted') {
                console.log('[PushToken] Permission not granted.');
                return;
            }

            // projectId is required in Expo SDK 48+. It is read from the EAS config
            // embedded by Expo Go at runtime, falling back to app.json's extra field.
            const projectId =
                Constants.easConfig?.projectId ?? Constants.expoConfig?.extra?.eas?.projectId;

            if (!projectId) {
                console.log(
                    '[PushToken] No projectId found. Open this project via Expo Go "expo start" so Expo embeds the projectId automatically.',
                );
                return;
            }

            const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
            console.log('[PushToken] EXPO PUSH TOKEN:', token);
        }

        registerForPush();
    }, []);
}
