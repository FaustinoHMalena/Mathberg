// styles/theme.ts
export const LightTheme = {
  colors: {
    primary: '#2B78E4',
    background: '#FFFFFF',
    text: '#333333',
    card: '#F8FAFF',
    border: '#E0E0E0',
    success: '#4CAF50',
    error: '#F44336',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  typography: {
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
  },
};

export const DarkTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    border: '#333333',
  },
};
