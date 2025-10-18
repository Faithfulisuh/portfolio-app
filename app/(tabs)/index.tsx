import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../src/context';
import { portfolioData } from '../../src/constants/portfolioData';

export default function AboutScreen() {
  const { isDark } = useTheme();
  const { profile } = portfolioData;

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="px-6 pt-16">
          {/* Profile Image Placeholder */}
          <View className="items-center mb-8">
            <View 
              className={`w-32 h-32 rounded-full items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            >
              <Text className="text-4xl">👨‍💻</Text>
            </View>
          </View>

          {/* Name and Title */}
          <View className="items-center mb-8">
            <Text className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {profile.name}
            </Text>
            <Text className={`text-lg font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {profile.title}
            </Text>
          </View>

          {/* Bio Section */}
          <View className={`p-6 rounded-xl mb-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Text className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </Text>
            <Text className={`text-base leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {profile.bio}
            </Text>
          </View>

          {/* Additional Info Cards */}
          <View className="space-y-4">
            <View className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Text className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                🎯 Focus Areas
              </Text>
              <Text className={`text-base mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mobile Development • Web Applications • User Experience
              </Text>
            </View>

            <View className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Text className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                🚀 Experience
              </Text>
              <Text className={`text-base mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3+ Years in React Native & Full Stack Development
              </Text>
            </View>

            <View className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Text className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                💡 Passion
              </Text>
              <Text className={`text-base mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Building innovative solutions that make a difference
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}