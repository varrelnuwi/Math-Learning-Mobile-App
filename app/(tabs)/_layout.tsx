import FloatingTabBar from '@/components/FloatingTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen
        name="materi"
        options={{ title: 'Materi' }}
      />
      <Tabs.Screen
        name="kalkulator"
        options={{ title: 'Kalkulator' }}
      />
      <Tabs.Screen
        name="kuis"
        options={{ title: 'Kuis' }}
      />
    </Tabs>
  );
}
