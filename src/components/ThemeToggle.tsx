import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../context';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className={`flex-row items-center px-3 py-2 rounded-lg ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`}
      activeOpacity={0.7}
    >
      <View className="mr-2">
        <Text className="text-lg">
          {isDark ? '🌙' : '☀️'}
        </Text>
      </View>
      <Text
        className={`text-sm font-medium ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {isDark ? 'Dark' : 'Light'}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;