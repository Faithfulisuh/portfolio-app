import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-lg font-bold">Portfolio App Setup Complete!</Text>
      <Text className="text-gray-600 mt-2">Ready for implementation</Text>
      <StatusBar style="auto" />
    </View>
  );
}
