import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { useTheme } from '../../src/context';
import { ThemeToggle } from '../../src/components';

// Tab Icons
const TabIcon = ({ icon, focused, color }: { icon: string; focused: boolean; color: string }) => (
  <Text style={{ fontSize: 20, color }}>{icon}</Text>
);

export default function TabLayout() {
  const { isDark, theme } = useTheme();

  return (
    <>
      {/* Theme Toggle Header */}
      <View 
        className={`absolute top-12 right-4 z-50 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        style={{ paddingTop: 8 }}
      >
        <ThemeToggle />
      </View>

      <Tabs
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
        <Tabs.Screen
          name="index"
          options={{
            title: 'About',
            tabBarIcon: ({ focused, color }) => (
              <TabIcon icon="👤" focused={focused} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="skills"
          options={{
            title: 'Skills',
            tabBarIcon: ({ focused, color }) => (
              <TabIcon icon="⚡" focused={focused} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
            tabBarIcon: ({ focused, color }) => (
              <TabIcon icon="📧" focused={focused} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}