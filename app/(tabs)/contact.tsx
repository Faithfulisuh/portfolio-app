import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../src/context';
import { portfolioData } from '../../src/constants/portfolioData';

const ContactItem: React.FC<{
  icon: string;
  title: string;
  value: string;
  onPress?: () => void;
  isDark: boolean;
}> = ({ icon, title, value, onPress, isDark }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={onPress ? 0.7 : 1}
    className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
  >
    <View className="flex-row items-center">
      <Text className="text-2xl mr-4">{icon}</Text>
      <View className="flex-1">
        <Text className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {title}
        </Text>
        <Text className={`text-base mt-1 ${isDark ? 'text-white' : 'text-gray-900'} ${
          onPress ? (isDark ? 'text-blue-400' : 'text-blue-600') : ''
        }`}>
          {value}
        </Text>
      </View>
      {onPress && (
        <Text className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Tap to open
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

export default function ContactScreen() {
  const { isDark } = useTheme();
  const { contact } = portfolioData;

  const handleEmailPress = () => {
    const emailUrl = `mailto:${contact.email}`;
    Linking.canOpenURL(emailUrl).then((supported) => {
      if (supported) {
        Linking.openURL(emailUrl);
      } else {
        Alert.alert('Error', 'Email client not available');
      }
    });
  };

  const handlePhonePress = () => {
    if (contact.phone) {
      const phoneUrl = `tel:${contact.phone}`;
      Linking.canOpenURL(phoneUrl).then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          Alert.alert('Error', 'Phone app not available');
        }
      });
    }
  };

  const handleSocialPress = (url: string, platform: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open ${platform}`);
      }
    });
  };

  const getSocialIcon = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'github': return '🐙';
      case 'linkedin': return '💼';
      case 'twitter': return '🐦';
      default: return '🔗';
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="px-6 pt-16">
          {/* Header */}
          <View className="items-center mb-8">
            <Text className="text-4xl mb-4">📞</Text>
            <Text className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </Text>
            <Text className={`text-base text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's connect and discuss opportunities
            </Text>
          </View>

          {/* Contact Methods */}
          <View className="mb-8">
            <Text className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              📬 Contact Information
            </Text>
            
            <ContactItem
              icon="✉️"
              title="Email"
              value={contact.email}
              onPress={handleEmailPress}
              isDark={isDark}
            />

            {contact.phone && (
              <ContactItem
                icon="📱"
                title="Phone"
                value={contact.phone}
                onPress={handlePhonePress}
                isDark={isDark}
              />
            )}
          </View>

          {/* Social Links */}
          <View className="mb-8">
            <Text className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🌐 Social Media
            </Text>
            
            {contact.social.map((social, index) => (
              <ContactItem
                key={index}
                icon={getSocialIcon(social.platform)}
                title={social.platform}
                value={social.url}
                onPress={() => handleSocialPress(social.url, social.platform)}
                isDark={isDark}
              />
            ))}
          </View>

          {/* Call to Action */}
          <View className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <Text className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🚀 Ready to Collaborate?
            </Text>
            <Text className={`text-base leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </Text>
          </View>

          {/* Availability Status */}
          <View className={`p-4 rounded-lg mt-6 ${isDark ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'}`}>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-3"></View>
              <Text className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-green-800'}`}>
                Available for new opportunities
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}