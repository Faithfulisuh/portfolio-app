import './global.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './src/context';
import { AppNavigator } from './src/navigation';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <AppNavigator />
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
