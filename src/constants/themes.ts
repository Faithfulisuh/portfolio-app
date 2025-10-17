import { ThemeConfig } from '../types';

export const lightTheme: ThemeConfig = {
  isDark: false,
  colors: {
    background: '#ffffff',
    text: '#1f2937',
    primary: '#2563eb',
    secondary: '#f3f4f6',
    border: '#e5e7eb',
  },
};

export const darkTheme: ThemeConfig = {
  isDark: true,
  colors: {
    background: '#111827',
    text: '#ffffff',
    primary: '#3b82f6',
    secondary: '#1f2937',
    border: '#374151',
  },
};