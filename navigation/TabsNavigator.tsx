// navigation/TabsNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChallengesScreen, PracticeScreen, ProfileScreen } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Challenges: 'gamepad',
            Practice: 'school',
            Profile: 'person',
          };
          return (
            <MaterialIcons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#2B78E4',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Practice" component={PracticeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Daily" component={DailyChallengeScreen} />
    </Tab.Navigator>
  );
}
