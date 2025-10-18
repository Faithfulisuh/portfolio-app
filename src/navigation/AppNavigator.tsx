import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import TabNavigator from './TabNavigator';
import { ThemeToggle } from '../components';
import { useTheme } from '../context';

const AppNavigator: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <NavigationContainer>
      <View className="flex-1">
        {/* Theme Toggle in Header */}
        <View 
          className={`absolute top-12 right-4 z-10 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}
          style={{ paddingTop: 8 }}
        >
          <ThemeToggle />
        </View>
        
        {/* Main Navigation */}
        <TabNavigator />
      </View>
    </NavigationContainer>
  );
};

export default AppNavigator;