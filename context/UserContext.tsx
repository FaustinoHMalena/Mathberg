// context/UserContext.tsx (Final Enhancements)
import { formatStreakDate } from '../utils/StreakCounter';

// Update UserProgress type
type UserProgress = {
  // ... existing properties ...
  dailyChallenge: {
    completed: boolean;
    streak: number;
    lastCompleted: string;
  };
};

// Update initializeProgress
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
      }
    });
  }
};

// Add daily challenge completion
const completeDailyChallenge = () => {
  setUserProgress(prev => {
    const today = formatStreakDate(new Date());
    return {
      ...prev,
      dailyChallenge: {
        completed: true,
        streak: prev.dailyChallenge.lastCompleted === today ? 
          prev.dailyChallenge.streak : prev.dailyChallenge.streak + 1,
        lastCompleted: today
      }
    };
  });
};
