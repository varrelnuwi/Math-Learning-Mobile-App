import MatrixInput from '@/components/MatrixInput';
import { det2x2, getSteps2x2 } from '@/utils/determinant';
import { useRouter } from 'expo-router';
import { ArrowLeft, Calculator, RotateCcw } from 'lucide-react-native';
import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Kalkulator2x2() {
    const router = useRouter();
    const [values, setValues] = useState<string[][]>([
        ['', ''],
        ['', ''],
    ]);
    const [result, setResult] = useState<number | null>(null);
    const [steps, setSteps] = useState<string[]>([]);

    const handleValueChange = (row: number, col: number, value: string) => {
        const newValues = values.map((r) => [...r]);
        newValues[row][col] = value;
        setValues(newValues);
        setResult(null);
        setSteps([]);
    };

    const calculate = () => {
        Keyboard.dismiss();
        const a = parseFloat(values[0][0]) || 0;
        const b = parseFloat(values[0][1]) || 0;
        const c = parseFloat(values[1][0]) || 0;
        const d = parseFloat(values[1][1]) || 0;

        const det = det2x2(a, b, c, d);
        setResult(det);
        setSteps(getSteps2x2(a, b, c, d));
    };

    const reset = () => {
        setValues([['', ''], ['', '']]);
        setResult(null);
        setSteps([]);
    };

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <ScrollView className="flex-1 px-5 pt-4" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-xl bg-surface-card border border-emerald-500/20 items-center justify-center mr-3"
                    >
                        <ArrowLeft size={20} color="#6ee7b7" />
                    </TouchableOpacity>
                    <Text className="text-xl font-extrabold text-white">Kalkulator 2×2</Text>
                </View>

                {/* Input Card */}
                <View className="bg-surface-card border border-emerald-500/15 rounded-3xl p-5 mb-5">
                    <Text className="text-emerald-300 font-bold text-base mb-2">Masukkan Elemen Matriks</Text>
                    <Text className="text-slate-400 text-xs mb-2">Isi nilai untuk setiap elemen matriks A</Text>

                    <MatrixInput
                        size={2}
                        values={values}
                        onValueChange={handleValueChange}
                    />

                    <View className="flex-row mt-4">
                        <TouchableOpacity
                            onPress={calculate}
                            className="flex-1 mr-2"
                            activeOpacity={0.8}
                        >
                            <View className="bg-emerald-600 rounded-2xl py-4 flex-row items-center justify-center">
                                <Calculator size={20} color="#ffffff" />
                                <Text className="text-white font-bold ml-2 text-base">Hitung</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={reset}
                            activeOpacity={0.8}
                        >
                            <View className="bg-surface-elevated rounded-2xl py-4 px-5 border border-slate-600/30 items-center justify-center">
                                <RotateCcw size={20} color="#94a3b8" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Result Card */}
                {result !== null && (
                    <View className="bg-surface-card border border-indigo-500/15 rounded-3xl p-5 mb-5">
                        <Text className="text-indigo-300 font-bold text-base mb-3">📊 Hasil</Text>

                        <View className="bg-indigo-600/10 rounded-2xl p-4 mb-4 border border-indigo-500/20">
                            <Text className="text-indigo-200 text-2xl font-extrabold text-center">
                                det(A) = {result}
                            </Text>
                        </View>

                        <Text className="text-slate-400 font-bold text-sm mb-2">Langkah Penyelesaian:</Text>
                        <View className="bg-surface-elevated rounded-2xl p-4">
                            {steps.map((step, i) => (
                                <Text key={i} className="text-slate-200 text-sm font-mono leading-7">
                                    {step}
                                </Text>
                            ))}
                        </View>

                        {result === 0 && (
                            <View className="bg-amber-600/10 rounded-2xl p-3 mt-3 border border-amber-500/20">
                                <Text className="text-amber-300 text-center text-sm font-medium">
                                    ⚠️ Matriks ini singular (tidak memiliki invers)
                                </Text>
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
