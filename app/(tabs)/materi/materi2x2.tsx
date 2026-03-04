import MatrixDisplay from '@/components/MatrixDisplay';
import { useRouter } from 'expo-router';
import { ArrowLeft, Info } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Materi2x2() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-xl bg-surface-card border border-indigo-500/20 items-center justify-center mr-3"
                    >
                        <ArrowLeft size={20} color="#818cf8" />
                    </TouchableOpacity>
                    <Text className="text-xl font-extrabold text-white">Determinan 2×2</Text>
                </View>

                {/* Definition Card */}
                <View className="bg-surface-card border border-indigo-500/15 rounded-3xl p-5 mb-5">
                    <View className="flex-row items-center mb-3">
                        <Info size={18} color="#818cf8" />
                        <Text className="text-indigo-300 font-bold ml-2 text-base">Definisi</Text>
                    </View>
                    <Text className="text-slate-300 text-sm leading-6">
                        Determinan matriks 2×2 adalah nilai skalar yang dihitung dari elemen-elemen
                        matriks bujur sangkar berukuran 2×2. Determinan digunakan untuk menentukan
                        apakah suatu sistem persamaan linear memiliki solusi tunggal.
                    </Text>
                </View>

                {/* Formula Card */}
                <View className="bg-surface-card border border-indigo-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-indigo-300 font-bold text-base mb-3">📐 Rumus</Text>
                    <Text className="text-slate-300 text-sm leading-6 mb-2">
                        Untuk matriks A berukuran 2×2:
                    </Text>

                    <MatrixDisplay
                        matrix={[
                            ['a', 'b'],
                            ['c', 'd'],
                        ]}
                        size={2}
                    />

                    <View className="bg-indigo-600/10 rounded-2xl p-4 mt-2 border border-indigo-500/20">
                        <Text className="text-indigo-200 text-lg font-bold text-center">
                            det(A) = ad − bc
                        </Text>
                    </View>

                    <Text className="text-slate-400 text-xs mt-3 leading-5">
                        Kalikan elemen diagonal utama (a × d), lalu kurangi dengan hasil kali
                        elemen diagonal sekunder (b × c).
                    </Text>
                </View>

                {/* Example Card */}
                <View className="bg-surface-card border border-purple-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-purple-300 font-bold text-base mb-3">📝 Contoh Perhitungan</Text>
                    <Text className="text-slate-300 text-sm mb-2">Diberikan matriks A:</Text>

                    <MatrixDisplay
                        matrix={[
                            [3, 8],
                            [4, 6],
                        ]}
                        size={2}
                    />

                    <Text className="text-slate-300 text-sm mb-2">Langkah penyelesaian:</Text>

                    <View className="bg-surface-elevated rounded-2xl p-4 mb-2">
                        <Text className="text-slate-200 text-sm font-mono leading-7">
                            det(A) = (3)(6) − (8)(4){'\n'}
                            det(A) = 18 − 32{'\n'}
                            det(A) = −14
                        </Text>
                    </View>

                    <View className="bg-emerald-600/10 rounded-2xl p-3 mt-2 border border-emerald-500/20">
                        <Text className="text-emerald-300 text-center font-bold">
                            Hasil: det(A) = −14
                        </Text>
                    </View>
                </View>

                {/* Tips Card */}
                <View className="bg-surface-card border border-amber-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-amber-300 font-bold text-base mb-3">💡 Tips</Text>
                    <View className="mb-2">
                        <Text className="text-slate-300 text-sm leading-6">
                            • Jika det(A) = 0, matriks disebut <Text className="text-amber-300 font-semibold">singular</Text> (tidak memiliki invers).
                        </Text>
                    </View>
                    <View className="mb-2">
                        <Text className="text-slate-300 text-sm leading-6">
                            • Jika det(A) ≠ 0, matriks disebut <Text className="text-emerald-300 font-semibold">non-singular</Text> (memiliki invers).
                        </Text>
                    </View>
                    <View>
                        <Text className="text-slate-300 text-sm leading-6">
                            • Ingat pola: diagonal utama dikali, lalu kurangi diagonal sekunder.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
