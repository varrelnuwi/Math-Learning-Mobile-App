import { Stack } from 'expo-router';
import React from 'react';

export default function KuisLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#0f0f23' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="quiz2x2" />
            <Stack.Screen name="quiz3x3" />
        </Stack>
    );
}
