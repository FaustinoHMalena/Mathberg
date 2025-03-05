// services/ProgressService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress } from '../contexts/UserContext';

const STORAGE_KEY = '@Mathberg/userProgress';

export const saveProgress = async (progress: UserProgress) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
};

export const loadProgress = async (): Promise<UserProgress | null> => {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.error('Failed to load progress:', e);
    return null;
  }
};

export const resetProgress = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset progress:', e);
  }
};
