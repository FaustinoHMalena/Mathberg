// utils/StreakCounter.ts
export const calculateStreak = (lastActiveDate: string): number => {
  const today = new Date();
  const lastDate = new Date(lastActiveDate);
  const diffTime = Math.abs(today.getTime() - lastDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays === 1 ? 1 : 0;
};

export const formatStreakDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
