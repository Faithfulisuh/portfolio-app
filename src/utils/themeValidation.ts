import { ThemeConfig } from '../types';
import { lightTheme, darkTheme } from '../constants/themes';

/**
 * Validation utilities for theme system
 */
export const themeValidation = {
  // Validate theme configuration
  validateTheme: (theme: ThemeConfig): boolean => {
    const requiredColors = ['background', 'text', 'primary', 'secondary', 'border'];
    
    if (!theme.colors) return false;
    
    for (const color of requiredColors) {
      if (!theme.colors[color as keyof typeof theme.colors]) {
        console.error(`Missing color: ${color}`);
        return false;
      }
    }
    
    return true;
  },

  // Validate both themes
  validateAllThemes: (): boolean => {
    const lightValid = themeValidation.validateTheme(lightTheme);
    const darkValid = themeValidation.validateTheme(darkTheme);
    
    if (!lightValid) console.error('Light theme validation failed');
    if (!darkValid) console.error('Dark theme validation failed');
    
    return lightValid && darkValid;
  },

  // Get theme summary for debugging
  getThemeSummary: (theme: ThemeConfig) => ({
    isDark: theme.isDark,
    colors: Object.keys(theme.colors).length,
    backgroundType: theme.isDark ? 'dark' : 'light',
    primaryColor: theme.colors.primary,
  }),
};