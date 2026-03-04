import { useRouter } from 'expo-router';
import { ArrowRight, Calculator, Grid2x2, Grid3x3 } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KalkulatorIndex() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header */}
                <View className="mb-8">
                    <View className="flex-row items-center mb-2">
                        <Calculator size={24} color="#818cf8" />
                        <Text className="text-2xl font-extrabold text-white ml-3">Kalkulator</Text>
                    </View>
                    <Text className="text-slate-400 text-sm leading-5">
                        Hitung determinan matriks secara langsung dengan langkah penyelesaian.
                    </Text>
                </View>

                {/* Card: Kalkulator 2x2 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/kalkulator/kalkulator2x2')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-emerald-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-emerald-600/20 items-center justify-center border border-emerald-500/30">
                                <Grid2x2 size={26} color="#6ee7b7" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Kalkulator 2×2</Text>
                        <Text className="text-slate-400 text-sm leading-5">
                            Masukkan 4 elemen matriks dan dapatkan hasil determinan beserta langkah perhitungan.
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Card: Kalkulator 3x3 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/kalkulator/kalkulator3x3')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-cyan-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-cyan-600/20 items-center justify-center border border-cyan-500/30">
                                <Grid3x3 size={26} color="#67e8f9" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Kalkulator 3×3</Text>
                        <Text className="text-slate-400 text-sm leading-5">
                            Masukkan 9 elemen matriks dan hitung determinan dengan Metode Sarrus.
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
