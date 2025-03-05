// services/NotificationService.ts
import * as Notifications from 'expo-notifications';
import { UserProgress } from '../contexts/UserContext';

export const scheduleDailyReminder = async (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📚 Mathberg Reminder",
      body: "Your daily math challenge awaits! Keep your streak going!",
      sound: true
    },
    trigger: {
      hour: hours,
      minute: minutes,
      repeats: true
    }
  });
};

export const handleStreakNotifications = (progress: UserProgress) => {
  if (progress.dailyStreak % 5 === 0) {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `🔥 ${progress.dailyStreak} Day Streak!`,
        body: "You're on fire! Keep up the great work!",
        sound: true
      },
      trigger: null // Immediate
    });
  }
};
