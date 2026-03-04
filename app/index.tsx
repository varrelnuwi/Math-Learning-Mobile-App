import { useRouter } from 'expo-router';
import { BookOpen, Calculator, Target } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function IntroScreen() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();

        // Pulse animation for "tap anywhere"
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 0.5,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const handlePress = () => {
        router.replace('/(tabs)/materi');
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View className="flex-1 bg-surface-dark justify-center items-center px-8">
                {/* Background decoration */}
                <View className="absolute top-20 right-10 w-40 h-40 rounded-full bg-indigo-600/10" />
                <View className="absolute bottom-40 left-5 w-60 h-60 rounded-full bg-purple-600/10" />
                <View className="absolute top-40 left-20 w-20 h-20 rounded-full bg-accent-500/10" />

                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [{ translateY: slideAnim }],
                    }}
                    className="items-center"
                >
                    {/* Icon cluster */}
                    <View className="flex-row mb-8 space-x-4">
                        <View className="w-16 h-16 rounded-2xl bg-indigo-600/20 items-center justify-center border border-indigo-500/30">
                            <BookOpen size={28} color="#818cf8" />
                        </View>
                        <View className="w-16 h-16 rounded-2xl bg-purple-600/20 items-center justify-center border border-purple-500/30 mx-3">
                            <Calculator size={28} color="#c084fc" />
                        </View>
                        <View className="w-16 h-16 rounded-2xl bg-fuchsia-600/20 items-center justify-center border border-fuchsia-500/30">
                            <Target size={28} color="#e879f9" />
                        </View>
                    </View>

                    {/* App title */}
                    <Text className="text-4xl font-extrabold text-white mb-3 text-center">
                        Determinant
                    </Text>
                    <Text className="text-2xl font-bold text-indigo-300 mb-6 text-center">
                        Learning App
                    </Text>

                    {/* Decorative line */}
                    <View className="w-20 h-1 bg-indigo-500 rounded-full mb-6" />

                    {/* Description */}
                    <Text className="text-slate-400 text-center text-base leading-6 mb-4 px-4">
                        Pelajari cara menghitung determinan matriks 2×2 dan 3×3 melalui
                        materi interaktif, kalkulator, dan kuis.
                    </Text>

                    {/* Feature chips */}
                    <View className="flex-row flex-wrap justify-center mb-10">
                        <View className="bg-indigo-600/15 border border-indigo-500/20 rounded-full px-4 py-2 m-1">
                            <Text className="text-indigo-300 text-xs font-medium">📘 Materi</Text>
                        </View>
                        <View className="bg-purple-600/15 border border-purple-500/20 rounded-full px-4 py-2 m-1">
                            <Text className="text-purple-300 text-xs font-medium">🧮 Kalkulator</Text>
                        </View>
                        <View className="bg-fuchsia-600/15 border border-fuchsia-500/20 rounded-full px-4 py-2 m-1">
                            <Text className="text-fuchsia-300 text-xs font-medium">🎯 Kuis</Text>
                        </View>
                    </View>
                </Animated.View>

                {/* Tap to continue */}
                <Animated.View style={{ opacity: pulseAnim }} className="absolute bottom-16">
                    <Text className="text-slate-500 text-sm font-medium">
                        Ketuk di mana saja untuk memulai
                    </Text>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}
