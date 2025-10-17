import { ThemeConfig } from '../types';

/**
 * Get theme-aware class names for common UI elements
 */
export const getThemeClasses = (theme: ThemeConfig) => {
  return {
    // Background classes
    background: theme.isDark ? 'bg-gray-900' : 'bg-white',
    secondaryBackground: theme.isDark ? 'bg-gray-800' : 'bg-gray-100',
    
    // Text classes
    text: theme.isDark ? 'text-white' : 'text-gray-900',
    secondaryText: theme.isDark ? 'text-gray-400' : 'text-gray-600',
    
    // Border classes
    border: theme.isDark ? 'border-gray-700' : 'border-gray-200',
    
    // Button classes
    primaryButton: theme.isDark ? 'bg-blue-500' : 'bg-blue-600',
    primaryButtonText: 'text-white',
    
    // Card classes
    card: theme.isDark 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white border-gray-200 shadow-sm',
  };
};

/**
 * Get dynamic style object for React Native StyleSheet
 */
export const getThemeStyles = (theme: ThemeConfig) => {
  return {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderColor: theme.colors.border,
    primaryColor: theme.colors.primary,
    secondaryColor: theme.colors.secondary,
  };
};