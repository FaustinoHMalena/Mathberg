// App.tsx (Main Entry Point)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import TabsNavigator from './navigation/TabsNavigator';
import { UserProvider } from './contexts/UserContext';
import PiperMascot from './components/PiperMascot';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <PiperMascot />
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={TabsNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4FF',
  },
});
