// context/UserContext.tsx (Enhanced)
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
  };
};

const UserContext = createContext<{
  userProgress: UserProgress;
  addPoints: (points: number) => void;
  unlockBadge: (badgeId: string) => void;
  completeLesson: (topicId: string, lessonId: string) => void;
  recordAnswer: (isCorrect: boolean) => void;
}>(null!);

export function UserProvider({ children }) {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    points: 0,
    badges: [],
    currentLessons: {},
    dailyStreak: 0,
    lastActiveDate: formatStreakDate(new Date()),
    performance: { correct: 0, total: 0 },
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

  // ... existing functions ...

  const completeLesson = (topicId: string, lessonId: string) => {
    setUserProgress(prev => ({
      ...prev,
      currentLessons: {
        ...prev.currentLessons,
        [topicId]: (prev.currentLessons[topicId] || 0) + 1
      }
    }));
  };

  const recordAnswer = (isCorrect: boolean) => {
    setUserProgress(prev => ({
      ...prev,
      performance: {
        correct: prev.performance.correct + (isCorrect ? 1 : 0),
        total: prev.performance.total + 1
      }
    }));
  };

  return (
    <UserContext.Provider value={{ 
      userProgress, 
      addPoints, 
      unlockBadge,
      completeLesson,
      recordAnswer
    }}>
      {children}
    </UserContext.Provider>
  );
}
