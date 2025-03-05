// services/NotificationService.ts (Enhanced)
import * as Notifications from 'expo-notifications';
import { UserProgress } from '../context/UserContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const setupNotifications = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
};

export const scheduleDailyReminder = async (userProgress: UserProgress) => {
  const [hours, minutes] = userProgress.settings.notificationTime.split(':').map(Number);
  
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📚 Mathberg Reminder",
      body: "Your daily math challenge awaits! Keep your streak going!",
      sound: userProgress.settings.soundEnabled ? 'default' : undefined,
    },
    trigger: {
      hour: hours,
      minute: minutes,
      repeats: true,
    },
  });
};

export const cancelNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
