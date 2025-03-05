import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import TabsNavigator from './navigation/TabsNavigator';
import ThemedContainer from './components/ThemedContainer';
import PiperMascot from './components/PiperMascot';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingOverlay from './components/LoadingOverlay';
import { useNotificationSetup } from './hooks/useNotifications';
import { useTheme } from './contexts/ThemeContext';

const Stack = createNativeStackNavigator();

function AppContent() {
  useNotificationSetup();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={colors.background === '#FFFFFF' ? 'dark' : 'light'} />
      <PiperMascot />
      <NavigationContainer theme={{
        dark: colors.background === DarkTheme.colors.background,
        colors: {
          primary: colors.primary,
          background: colors.background,
          card: colors.card,
          text: colors.text,
          border: colors.border,
          notification: colors.primary,
        }
      }}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <LoadingOverlay />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <ThemeProvider>
          <ThemedContainer>
            <AppContent />
          </ThemedContainer>
        </ThemeProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
