// context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveProgress, loadProgress } from '../services/ProgressService';
import { calculateStreak, formatStreakDate } from '../utils/StreakCounter';

type UserProgress = {
  points: number;
  badges: string[];
  currentLessons: Record<string, Record<string, number>>; // { [topicId]: { [lessonId]: completionCount } }
  dailyStreak: number;
  lastActiveDate: string;
  performance: {
    correct: number;
    total: number;
    visualCorrect: number;
    kinestheticCorrect: number;
  };
  settings: {
    darkMode: boolean;
    soundEnabled: boolean;
    notificationTime: string;
  };
};

type UserContextType = {
  userProgress: UserProgress;
  addPoints: (points: number) => void;
  unlockBadge: (badgeId: string) => void;
  completeLesson: (topicId: string, lessonId: string) => void;
  updateSettings: (settings: Partial<UserProgress['settings']>) => void;
  recordAnswer: (isCorrect: boolean, modality: 'visual' | 'kinesthetic') => void;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    points: 0,
    badges: [],
    currentLessons: {},
    dailyStreak: 0,
    lastActiveDate: formatStreakDate(new Date()),
    performance: {
      correct: 0,
      total: 0,
      visualCorrect: 0,
      kinestheticCorrect: 0
    },
    settings: {
      darkMode: false,
      soundEnabled: true,
      notificationTime: '18:00'
    }
  });

  useEffect(() => {
    const initializeProgress = async () => {
      const savedProgress = await loadProgress();
      if (savedProgress) {
        setUserProgress({
          ...savedProgress,
          dailyStreak: calculateStreak(savedProgress.lastActiveDate),
        });
      }
    };
    initializeProgress();
  }, []);

  useEffect(() => {
    saveProgress(userProgress);
  }, [userProgress]);

  const addPoints = (points: number) => {
    setUserProgress(prev => ({
      ...prev,
      points: prev.points + points,
      lastActiveDate: formatStreakDate(new Date())
    }));
  };

  const unlockBadge = (badgeId: string) => {
    if (!userProgress.badges.includes(badgeId)) {
      setUserProgress(prev => ({
        ...prev,
        badges: [...prev.badges, badgeId]
      }));
    }
  };

  const completeLesson = (topicId: string, lessonId: string) => {
    setUserProgress(prev => ({
      ...prev,
      currentLessons: {
        ...prev.currentLessons,
        [topicId]: {
          ...prev.currentLessons[topicId] || {},
          [lessonId]: (prev.currentLessons[topicId]?.[lessonId] || 0) + 1
        }
      }
    }));
  };

  const recordAnswer = (isCorrect: boolean, modality: 'visual' | 'kinesthetic') => {
    setUserProgress(prev => ({
      ...prev,
      performance: {
        correct: prev.performance.correct + (isCorrect ? 1 : 0),
        total: prev.performance.total + 1,
        visualCorrect: prev.performance.visualCorrect + (modality === 'visual' && isCorrect ? 1 : 0),
        kinestheticCorrect: prev.performance.kinestheticCorrect + (modality === 'kinesthetic' && isCorrect ? 1 : 0)
      }
    }));
  };

  const updateSettings = (settings: Partial<UserProgress['settings']>) => {
    setUserProgress(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...settings
      }
    }));
  };

  return (
    <UserContext.Provider value={{
      userProgress,
      addPoints,
      unlockBadge,
      completeLesson,
      recordAnswer,
      updateSettings
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
