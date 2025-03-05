// context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveProgress, loadProgress } from '../services/ProgressService';
import { calculateStreak, formatStreakDate } from '../utils/StreakCounter';

type UserProgress = {
  points: number;
  badges: string[];
  currentLessons: Record<string, number>;
  dailyStreak: number;
  lastActiveDate: string;
  performance: {
    correct: number;
    total: number;
    visualCorrect: number;
    kinestheticCorrect: number;
  };
  dailyChallenge: {
    completed: boolean;
    streak: number;
    lastCompleted: string;
  };
  collaborationHistory: Array<{
    date: string;
    participants: number;
    success: boolean;
  }>;
  adaptiveProfile: {
    learningStyle: 'visual' | 'kinesthetic' | 'auditory';
    difficultyLevel: number;
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
  recordAnswer: (isCorrect: boolean, modality: 'visual' | 'kinesthetic') => void;
  completeDailyChallenge: () => void;
  updateLearningStyle: (style: 'visual' | 'kinesthetic' | 'auditory') => void;
  updateSettings: (settings: Partial<UserProgress['settings']>) => void;
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
    dailyChallenge: {
      completed: false,
      streak: 0,
      lastCompleted: ''
    },
    collaborationHistory: [],
    adaptiveProfile: {
      learningStyle: 'visual',
      difficultyLevel: 1
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
      const today = formatStreakDate(new Date());

      if (savedProgress) {
        setUserProgress({
          ...savedProgress,
          dailyStreak: calculateStreak(savedProgress.lastActiveDate),
          dailyChallenge: {
            ...savedProgress.dailyChallenge,
            streak: savedProgress.dailyChallenge.lastCompleted === today ? 
              savedProgress.dailyChallenge.streak : 0
          },
          adaptiveProfile: {
            learningStyle: detectLearningStyle(savedProgress),
            difficultyLevel: Math.min(Math.floor(savedProgress.points / 1000) + 1, 5)
          },
          settings: {
            darkMode: savedProgress.settings?.darkMode || false,
            soundEnabled: savedProgress.settings?.soundEnabled ?? true,
            notificationTime: savedProgress.settings?.notificationTime || '18:00'
          }
        });
      }
    };

    initializeProgress();
  }, []);

  useEffect(() => {
    saveProgress(userProgress);
  }, [userProgress]);

  const detectLearningStyle = (progress: UserProgress) => {
    const { visualCorrect, kinestheticCorrect } = progress.performance;
    if (visualCorrect > kinestheticCorrect) return 'visual';
    if (kinestheticCorrect > visualCorrect) return 'kinesthetic';
    return 'auditory';
  };

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
        [topicId]: (prev.currentLessons[topicId] || 0) + 1
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

  const completeDailyChallenge = () => {
    const today = formatStreakDate(new Date());
    setUserProgress(prev => ({
      ...prev,
      dailyChallenge: {
        completed: true,
        streak: prev.dailyChallenge.lastCompleted === today ? 
          prev.dailyChallenge.streak : prev.dailyChallenge.streak + 1,
        lastCompleted: today
      }
    }));
  };

  const updateLearningStyle = (style: 'visual' | 'kinesthetic' | 'auditory') => {
    setUserProgress(prev => ({
      ...prev,
      adaptiveProfile: {
        ...prev.adaptiveProfile,
        learningStyle: style
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
      completeDailyChallenge,
      updateLearningStyle,
      updateSettings
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
