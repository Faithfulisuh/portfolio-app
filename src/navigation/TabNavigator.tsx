import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen, SkillsScreen, ContactScreen } from '../screens';
import { useTheme } from '../context';

import { Text } from 'react-native';

// Simple icon components using text
const AboutIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <Text style={{ fontSize: 20, color }}>{focused ? '👤' : '👤'}</Text>
);

const SkillsIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <Text style={{ fontSize: 20, color }}>{focused ? '⚡' : '⚡'}</Text>
);

const ContactIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <Text style={{ fontSize: 20, color }}>{focused ? '📧' : '📧'}</Text>
);

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const { isDark, theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
          borderTopColor: isDark ? '#374151' : '#e5e7eb',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: AboutIcon,
        }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{
          tabBarIcon: SkillsIcon,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ContactIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;