// context/ThemeContext.tsx
import React, { createContext, useContext, useMemo } from 'react';
import { useUser } from './UserContext';
import { LightTheme, DarkTheme } from '../styles/theme';

type ThemeContextType = {
  colors: typeof LightTheme.colors;
  spacing: typeof LightTheme.spacing;
  typography: typeof LightTheme.typography;
};

const ThemeContext = createContext<ThemeContextType>(LightTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userProgress } = useUser();

  const theme = useMemo(() => {
    return userProgress.settings.darkMode ? DarkTheme : LightTheme;
  }, [userProgress.settings.darkMode]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
