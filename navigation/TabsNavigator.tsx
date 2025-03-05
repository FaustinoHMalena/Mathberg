// navigation/TabsNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import ChallengesScreen from '../screens/ChallengesScreen';
import PracticeScreen from '../screens/PracticeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Challenges: 'gamepad',
            Practice: 'school',
            Profile: 'person',
            Settings: 'settings'
          };

          return (
            <MaterialIcons
              name={icons[route.name]}
              size={size}
              color={focused ? colors.primary : colors.text}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          paddingBottom: 4,
          paddingTop: 4
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        headerShadowVisible: false
      })}
    >
      <Tab.Screen
        name="Challenges"
        component={ChallengesScreen}
        options={{ title: 'Daily Challenges' }}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeScreen}
        options={{ title: 'Practice' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Progress' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}
