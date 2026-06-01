import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#00ffcc', 
      tabBarStyle: { backgroundColor: '#0b0d17', borderTopColor: '#333' },
      headerStyle: { backgroundColor: '#0b0d17' },
      headerTintColor: '#fff'
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="sensores" 
        options={{ 
          title: 'Sensores', 
          tabBarIcon: ({ color }) => <Ionicons name="thermometer" size={24} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="energia" 
        options={{ 
          title: 'Energia', 
          tabBarIcon: ({ color }) => <Ionicons name="battery-half" size={24} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="config" 
        options={{ 
          title: 'Configurações', 
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> 
        }} 
      />
    </Tabs>
  );
}