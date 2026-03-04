import { Stack } from 'expo-router';
import React from 'react';

export default function KalkulatorLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#0f0f23' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="kalkulator2x2" />
            <Stack.Screen name="kalkulator3x3" />
        </Stack>
    );
}
