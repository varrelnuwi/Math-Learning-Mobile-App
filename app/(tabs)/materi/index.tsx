import { useRouter } from 'expo-router';
import { ArrowRight, BookOpen, Grid2x2, Grid3x3 } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MateriIndex() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header */}
                <View className="mb-8">
                    <View className="flex-row items-center mb-2">
                        <BookOpen size={24} color="#818cf8" />
                        <Text className="text-2xl font-extrabold text-white ml-3">Materi</Text>
                    </View>
                    <Text className="text-slate-400 text-sm leading-5">
                        Pelajari teori dan rumus determinan matriks bujur sangkar.
                    </Text>
                </View>

                {/* Card: Determinan 2x2 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/materi/materi2x2')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-indigo-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-indigo-600/20 items-center justify-center border border-indigo-500/30">
                                <Grid2x2 size={26} color="#818cf8" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Determinan 2×2</Text>
                        <Text className="text-slate-400 text-sm leading-5">
                            Rumus dasar: det(A) = ad − bc. Pelajari properti dan contoh perhitungan matriks 2×2.
                        </Text>
                        <View className="mt-4 flex-row">
                            <View className="bg-indigo-600/15 rounded-full px-3 py-1">
                                <Text className="text-indigo-300 text-xs font-medium">Pemula</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Card: Determinan 3x3 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/materi/materi3x3')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-purple-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-purple-600/20 items-center justify-center border border-purple-500/30">
                                <Grid3x3 size={26} color="#c084fc" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Determinan 3×3</Text>
                        <Text className="text-slate-400 text-sm leading-5">
                            Metode Sarrus untuk menghitung determinan matriks 3×3 dengan langkah visual.
                        </Text>
                        <View className="mt-4 flex-row">
                            <View className="bg-purple-600/15 rounded-full px-3 py-1">
                                <Text className="text-purple-300 text-xs font-medium">Menengah</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
