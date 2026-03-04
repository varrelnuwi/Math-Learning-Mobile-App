import { Stack } from 'expo-router';
import React from 'react';

export default function MateriLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#0f0f23' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="materi2x2" />
            <Stack.Screen name="materi3x3" />
        </Stack>
    );
}
