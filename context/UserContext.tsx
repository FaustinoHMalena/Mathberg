// context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

type UserProgress = {
  points: number;
  badges: string[];
  currentLessons: Record<string, number>;
};

const UserContext = createContext<{
  userProgress: UserProgress;
  addPoints: (points: number) => void;
  unlockBadge: (badgeId: string) => void;
}>(null!);

export function UserProvider({ children }) {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    points: 0,
    badges: [],
    currentLessons: {},
  });

  const addPoints = (points: number) => {
    setUserProgress(prev => ({
      ...prev,
      points: prev.points + points,
    }));
  };

  const unlockBadge = (badgeId: string) => {
    if (!userProgress.badges.includes(badgeId)) {
      setUserProgress(prev => ({
        ...prev,
        badges: [...prev.badges, badgeId],
      }));
    }
  };

  return (
    <UserContext.Provider value={{ userProgress, addPoints, unlockBadge }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
