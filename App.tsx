import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { TamaguiProvider, YStack, Text, View, XStack } from 'tamagui';
import config from './tamagui.config';
import { NavIcon } from './components/ui/NavIcon';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingStep1 } from './components/OnboardingStep1';
import { OnboardingStep2 } from './components/OnboardingStep2';
import { HomeScreen } from './components/screens/HomeScreen';
import { WeekScreen } from './components/screens/WeekScreen';
import { useFonts, Inconsolata_400Regular, Inconsolata_600SemiBold, Inconsolata_700Bold } from '@expo-google-fonts/inconsolata';
import * as ExpoSplashScreen from 'expo-splash-screen';

// Keep splash screen visible while loading fonts
ExpoSplashScreen.preventAutoHideAsync();

// Placeholder screens
// WeekScreen imported from components/screens/WeekScreen


function HistoryScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$md">
      <Text fontSize={32} fontWeight="bold" color="$brown" style={{ fontFamily: 'Inconsolata_700Bold' }}>History Screen</Text>
      <Text fontSize={16} color="$gray" style={{ fontFamily: 'Inconsolata_400Regular' }}>Placeholder - Phase 3</Text>
    </YStack>
  )
}

function SettingsScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$md">
      <Text fontSize={32} fontWeight="bold" color="$brown" style={{ fontFamily: 'Inconsolata_700Bold' }}>Settings Screen</Text>
      <Text fontSize={16} color="$gray" style={{ fontFamily: 'Inconsolata_400Regular' }}>Placeholder - Phase 3</Text>
    </YStack>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0); // 0 = not started, 1 = step1, 2 = step2, 3 = complete
  const [activeTab, setActiveTab] = useState('home');
  const [appIsReady, setAppIsReady] = useState(false);

  // Load fonts
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Don't render until fonts are loaded
  if (!appIsReady) {
    return null;
  }

  // Show splash screen on first load
  if (showSplash) {
    return (
      <TamaguiProvider config={config}>
        <View onLayout={onLayoutRootView} flex={1}>
          <SplashScreen onComplete={() => {
            setShowSplash(false);
            setOnboardingStep(1); // Start onboarding after splash
          }} />
        </View>
      </TamaguiProvider>
    );
  }

  // Show onboarding
  if (onboardingStep === 1) {
    return (
      <TamaguiProvider config={config}>
        <OnboardingStep1 onNext={() => setOnboardingStep(2)} />
      </TamaguiProvider>
    );
  }

  if (onboardingStep === 2) {
    return (
      <TamaguiProvider config={config}>
        <OnboardingStep2 onComplete={() => setOnboardingStep(3)} />
      </TamaguiProvider>
    );
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'week': return <WeekScreen />;
      case 'history': return <HistoryScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <TamaguiProvider config={config}>
      <View flex={1} backgroundColor="$cream">
        {/* Screen content */}
        <View flex={1} padding="$lg">
          {renderScreen()}
        </View>

        {/* Bottom Navigation */}
        <XStack
          backgroundColor="$cream"
          borderTopWidth={2}
          borderTopColor="$brown"
          paddingVertical="$sm"
          paddingHorizontal="$md"
          justifyContent="space-around"
        >
          <NavIcon
            name="home"
            active={activeTab === 'home'}
            onPress={() => setActiveTab('home')}
          />
          <NavIcon
            name="award"
            active={activeTab === 'week'}
            onPress={() => setActiveTab('week')}
          />
          <NavIcon
            name="clock"
            active={activeTab === 'history'}
            onPress={() => setActiveTab('history')}
          />
          <NavIcon
            name="settings"
            active={activeTab === 'settings'}
            onPress={() => setActiveTab('settings')}
          />
        </XStack>

        <StatusBar style="dark" />
      </View>
    </TamaguiProvider>
  );
}
