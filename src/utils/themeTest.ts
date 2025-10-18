import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = '@portfolio_theme';

/**
 * Utility functions to test theme persistence
 */
export const themeTestUtils = {
  // Clear stored theme (for testing)
  clearStoredTheme: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(THEME_STORAGE_KEY);
      console.log('Theme storage cleared');
    } catch (error) {
      console.error('Error clearing theme storage:', error);
    }
  },

  // Get current stored theme
  getStoredTheme: async (): Promise<boolean | null> => {
    try {
      const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      return storedTheme ? JSON.parse(storedTheme) : null;
    } catch (error) {
      console.error('Error getting stored theme:', error);
      return null;
    }
  },

  // Manually set theme (for testing)
  setStoredTheme: async (isDark: boolean): Promise<void> => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(isDark));
      console.log(`Theme set to: ${isDark ? 'dark' : 'light'}`);
    } catch (error) {
      console.error('Error setting theme storage:', error);
    }
  },
};