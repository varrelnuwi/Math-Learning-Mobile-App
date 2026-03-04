import MatrixDisplay from '@/components/MatrixDisplay';
import { useRouter } from 'expo-router';
import { ArrowLeft, Info } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Materi3x3() {
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
                    <Text className="text-xl font-extrabold text-white">Determinan 3×3</Text>
                </View>

                {/* Definition Card */}
                <View className="bg-surface-card border border-purple-500/15 rounded-3xl p-5 mb-5">
                    <View className="flex-row items-center mb-3">
                        <Info size={18} color="#c084fc" />
                        <Text className="text-purple-300 font-bold ml-2 text-base">Metode Sarrus</Text>
                    </View>
                    <Text className="text-slate-300 text-sm leading-6">
                        Metode Sarrus adalah cara menghitung determinan matriks 3×3 dengan
                        menjumlahkan hasil kali elemen-elemen pada diagonal positif dan
                        mengurangkannya dengan hasil kali elemen-elemen pada diagonal negatif.
                    </Text>
                </View>

                {/* Formula Card */}
                <View className="bg-surface-card border border-purple-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-purple-300 font-bold text-base mb-3">📐 Rumus</Text>
                    <Text className="text-slate-300 text-sm leading-6 mb-2">
                        Untuk matriks A berukuran 3×3:
                    </Text>

                    <MatrixDisplay
                        matrix={[
                            ['a', 'b', 'c'],
                            ['d', 'e', 'f'],
                            ['g', 'h', 'i'],
                        ]}
                        size={3}
                    />

                    <View className="bg-purple-600/10 rounded-2xl p-4 mt-2 border border-purple-500/20">
                        <Text className="text-purple-200 text-sm font-bold text-center leading-6">
                            det(A) = aei + bfg + cdh{'\n'}
                            {'          '} − ceg − bdi − afh
                        </Text>
                    </View>
                </View>

                {/* Sarrus Illustration */}
                <View className="bg-surface-card border border-indigo-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-indigo-300 font-bold text-base mb-3">🔀 Ilustrasi Metode Sarrus</Text>

                    <Text className="text-slate-300 text-sm leading-6 mb-3">
                        Salin dua kolom pertama ke kanan matriks, lalu kalikan sepanjang diagonal:
                    </Text>

                    {/* Positive diagonals */}
                    <View className="bg-emerald-600/10 rounded-2xl p-4 mb-3 border border-emerald-500/20">
                        <Text className="text-emerald-300 font-bold text-sm mb-2">✅ Diagonal Positif (+)</Text>
                        <Text className="text-slate-200 text-sm font-mono leading-6">
                            ↘ a × e × i = aei{'\n'}
                            ↘ b × f × g = bfg{'\n'}
                            ↘ c × d × h = cdh
                        </Text>
                    </View>

                    {/* Negative diagonals */}
                    <View className="bg-red-600/10 rounded-2xl p-4 mb-3 border border-red-500/20">
                        <Text className="text-red-300 font-bold text-sm mb-2">❌ Diagonal Negatif (−)</Text>
                        <Text className="text-slate-200 text-sm font-mono leading-6">
                            ↗ c × e × g = ceg{'\n'}
                            ↗ b × d × i = bdi{'\n'}
                            ↗ a × f × h = afh
                        </Text>
                    </View>
                </View>

                {/* Example Card */}
                <View className="bg-surface-card border border-fuchsia-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-fuchsia-300 font-bold text-base mb-3">📝 Contoh Perhitungan</Text>
                    <Text className="text-slate-300 text-sm mb-2">Diberikan matriks A:</Text>

                    <MatrixDisplay
                        matrix={[
                            [2, 1, 3],
                            [0, 4, 5],
                            [1, 2, 1],
                        ]}
                        size={3}
                    />

                    <Text className="text-slate-300 text-sm mb-2">Langkah penyelesaian:</Text>

                    <View className="bg-surface-elevated rounded-2xl p-4 mb-2">
                        <Text className="text-emerald-300 text-sm font-bold mb-1">Diagonal Positif (+):</Text>
                        <Text className="text-slate-200 text-sm font-mono leading-6">
                            (2)(4)(1) = 8{'\n'}
                            (1)(5)(1) = 5{'\n'}
                            (3)(0)(2) = 0
                        </Text>
                    </View>

                    <View className="bg-surface-elevated rounded-2xl p-4 mb-2">
                        <Text className="text-red-300 text-sm font-bold mb-1">Diagonal Negatif (−):</Text>
                        <Text className="text-slate-200 text-sm font-mono leading-6">
                            (3)(4)(1) = 12{'\n'}
                            (1)(0)(1) = 0{'\n'}
                            (2)(5)(2) = 20
                        </Text>
                    </View>

                    <View className="bg-surface-elevated rounded-2xl p-4 mb-2">
                        <Text className="text-slate-200 text-sm font-mono leading-6">
                            det(A) = (8 + 5 + 0) − (12 + 0 + 20){'\n'}
                            det(A) = 13 − 32{'\n'}
                            det(A) = −19
                        </Text>
                    </View>

                    <View className="bg-emerald-600/10 rounded-2xl p-3 mt-2 border border-emerald-500/20">
                        <Text className="text-emerald-300 text-center font-bold">
                            Hasil: det(A) = −19
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
