import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface MatrixInputProps {
    size: number;
    values: string[][];
    onValueChange: (row: number, col: number, value: string) => void;
    labels?: string[][];
}

const LABELS_2X2 = [
    ['a', 'b'],
    ['c', 'd'],
];

const LABELS_3X3 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

export default function MatrixInput({ size, values, onValueChange }: MatrixInputProps) {
    const labels = size === 2 ? LABELS_2X2 : LABELS_3X3;

    return (
        <View className="items-center my-4">
            <View className="flex-row items-center">
                {/* Left bracket */}
                <View
                    className="w-2 border-l-2 border-t-2 border-b-2 border-indigo-400 rounded-l-sm"
                    style={{ height: size * 64 + (size - 1) * 8 }}
                />

                {/* Matrix inputs */}
                <View className="px-2 py-2">
                    {Array.from({ length: size }).map((_, i) => (
                        <View key={i} className="flex-row justify-center mb-2">
                            {Array.from({ length: size }).map((_, j) => (
                                <View key={j} className="mx-1 items-center">
                                    <Text className="text-indigo-300 text-xs mb-1 font-semibold">
                                        {labels[i][j]}
                                    </Text>
                                    <TextInput
                                        className="w-14 h-12 bg-surface-elevated border border-indigo-500/30 rounded-xl text-white text-center text-lg font-bold"
                                        keyboardType="numeric"
                                        value={values[i]?.[j] ?? ''}
                                        onChangeText={(text) => onValueChange(i, j, text)}
                                        placeholder="0"
                                        placeholderTextColor="#6366f180"
                                        maxLength={4}
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Right bracket */}
                <View
                    className="w-2 border-r-2 border-t-2 border-b-2 border-indigo-400 rounded-r-sm"
                    style={{ height: size * 64 + (size - 1) * 8 }}
                />
            </View>
        </View>
    );
}
