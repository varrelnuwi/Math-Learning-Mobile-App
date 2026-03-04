import { useRouter } from 'expo-router';
import { ArrowRight, Clock, Grid2x2, Grid3x3, Target } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KuisIndex() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header */}
                <View className="mb-8">
                    <View className="flex-row items-center mb-2">
                        <Target size={24} color="#818cf8" />
                        <Text className="text-2xl font-extrabold text-white ml-3">Kuis</Text>
                    </View>
                    <Text className="text-slate-400 text-sm leading-5">
                        Uji pemahamanmu dengan menghitung determinan matriks yang digenerate secara acak.
                    </Text>
                </View>

                {/* Card: Quiz 2x2 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/kuis/quiz2x2')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-amber-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-amber-600/20 items-center justify-center border border-amber-500/30">
                                <Grid2x2 size={26} color="#fbbf24" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Kuis 2×2</Text>
                        <Text className="text-slate-400 text-sm leading-5 mb-3">
                            Hitung determinan matriks 2×2 yang diberikan secara acak.
                        </Text>
                        <View className="flex-row items-center">
                            <Clock size={14} color="#fbbf24" />
                            <Text className="text-amber-300 text-xs font-semibold ml-1">Waktu: 1 menit</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Card: Quiz 3x3 */}
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/kuis/quiz3x3')}
                    activeOpacity={0.8}
                    className="mb-4"
                >
                    <View className="bg-surface-card border border-rose-500/20 rounded-3xl p-6">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="w-14 h-14 rounded-2xl bg-rose-600/20 items-center justify-center border border-rose-500/30">
                                <Grid3x3 size={26} color="#fb7185" />
                            </View>
                            <ArrowRight size={20} color="#64748b" />
                        </View>
                        <Text className="text-xl font-bold text-white mb-2">Kuis 3×3</Text>
                        <Text className="text-slate-400 text-sm leading-5 mb-3">
                            Hitung determinan matriks 3×3 menggunakan Metode Sarrus.
                        </Text>
                        <View className="flex-row items-center">
                            <Clock size={14} color="#fb7185" />
                            <Text className="text-rose-300 text-xs font-semibold ml-1">Waktu: 3 menit</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Info Card */}
                <View className="bg-surface-card border border-slate-500/15 rounded-3xl p-5 mt-2">
                    <Text className="text-slate-400 text-sm leading-5">
                        💡 <Text className="text-slate-300 font-semibold">Tips:</Text> Nilai elemen matriks berkisar antara −10 hingga 10.
                        Bunyi peringatan akan muncul pada 10 detik terakhir.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
