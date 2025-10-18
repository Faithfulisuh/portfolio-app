import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../context';
import { portfolioData } from '../constants/portfolioData';

const SkillBadge: React.FC<{ skill: string; isDark: boolean }> = ({ skill, isDark }) => (
  <View 
    className={`px-4 py-3 rounded-lg m-1 ${
      isDark ? 'bg-gray-700 border border-gray-600' : 'bg-blue-50 border border-blue-200'
    }`}
  >
    <Text className={`text-sm font-medium text-center ${
      isDark ? 'text-white' : 'text-blue-800'
    }`}>
      {skill}
    </Text>
  </View>
);

const SkillsScreen: React.FC = () => {
  const { isDark } = useTheme();
  const { skills } = portfolioData;

  // Group skills for better organization
  const frontendSkills = skills.filter(skill => 
    ['React Native', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS'].includes(skill)
  );
  
  const backendSkills = skills.filter(skill => 
    ['Node.js', 'REST APIs'].includes(skill)
  );
  
  const toolsSkills = skills.filter(skill => 
    ['Expo', 'Git', 'Mobile Development'].includes(skill)
  );

  const SkillSection: React.FC<{ title: string; skills: string[]; icon: string }> = ({ title, skills, icon }) => (
    <View className="mb-8">
      <View className="flex-row items-center mb-4">
        <Text className="text-2xl mr-2">{icon}</Text>
        <Text className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </Text>
      </View>
      <View className="flex-row flex-wrap">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} isDark={isDark} />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView 
      className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View className="px-6 pt-16">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </Text>
          <Text className={`text-base text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </Text>
        </View>

        {/* Skills Overview Card */}
        <View className={`p-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <Text className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            💼 Professional Expertise
          </Text>
          <Text className={`text-base leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Specialized in modern mobile and web development with a focus on React Native, TypeScript, and creating seamless user experiences across platforms.
          </Text>
        </View>

        {/* Skill Categories */}
        <SkillSection 
          title="Frontend & Mobile" 
          skills={frontendSkills} 
          icon="📱" 
        />
        
        <SkillSection 
          title="Backend & APIs" 
          skills={backendSkills} 
          icon="⚙️" 
        />
        
        <SkillSection 
          title="Tools & Platforms" 
          skills={toolsSkills} 
          icon="🛠️" 
        />

        {/* Additional Skills */}
        {skills.filter(skill => 
          !frontendSkills.includes(skill) && 
          !backendSkills.includes(skill) && 
          !toolsSkills.includes(skill)
        ).length > 0 && (
          <SkillSection 
            title="Other Skills" 
            skills={skills.filter(skill => 
              !frontendSkills.includes(skill) && 
              !backendSkills.includes(skill) && 
              !toolsSkills.includes(skill)
            )} 
            icon="🎯" 
          />
        )}

        {/* Learning Section */}
        <View className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <Text className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🚀 Always Learning
          </Text>
          <Text className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Continuously expanding my skillset with the latest technologies and best practices in mobile and web development.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SkillsScreen;