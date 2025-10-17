import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeConfig, ThemeContextType } from '../types';
import { lightTheme, darkTheme } from '../constants/themes';

const THEME_STORAGE_KEY = '@portfolio_theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(lightTheme);
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on app start
  useEffect(() => {
    loadSavedTheme();
  }, []);

  const loadSavedTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme !== null) {
        const isDarkMode = JSON.parse(savedTheme);
        setIsDark(isDarkMode);
        setTheme(isDarkMode ? darkTheme : lightTheme);
      }
    } catch (error) {
      console.log('Error loading theme:', error);
      // Fallback to light theme
      setTheme(lightTheme);
      setIsDark(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newIsDark = !isDark;
      const newTheme = newIsDark ? darkTheme : lightTheme;
      
      setIsDark(newIsDark);
      setTheme(newTheme);
      
      // Save theme preference
      await AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newIsDark));
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};