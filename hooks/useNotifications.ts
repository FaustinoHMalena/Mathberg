// hooks/useNotifications.ts
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { scheduleDailyReminder, cancelNotifications } from '../services/NotificationService';

export const useNotificationSetup = () => {
  const { userProgress } = useUser();

  useEffect(() => {
    const manageNotifications = async () => {
      await cancelNotifications();
      if (userProgress.settings.notificationTime) {
        await scheduleDailyReminder(userProgress);
      }
    };

    manageNotifications();
  }, [userProgress.settings.notificationTime]);
};
