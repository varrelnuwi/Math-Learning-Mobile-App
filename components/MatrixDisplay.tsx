import React from 'react';
import { Text, View } from 'react-native';

interface MatrixDisplayProps {
    matrix: (string | number)[][];
    size: number;
    highlightDiagonals?: 'positive' | 'negative' | null;
}

export default function MatrixDisplay({ matrix, size }: MatrixDisplayProps) {
    return (
        <View className="items-center my-4">
            <View className="flex-row items-center">
                {/* Left bracket */}
                <View className="w-2 border-l-2 border-t-2 border-b-2 border-indigo-400 rounded-l-sm" style={{ height: size * 48 + (size - 1) * 8 }} />

                {/* Matrix content */}
                <View className="px-3 py-2">
                    {matrix.map((row, i) => (
                        <View key={i} className="flex-row justify-center" style={{ height: 48 }}>
                            {row.map((val, j) => (
                                <View
                                    key={j}
                                    className="w-16 h-12 items-center justify-center"
                                >
                                    <Text className="text-white text-xl font-bold text-center">
                                        {val}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Right bracket */}
                <View className="w-2 border-r-2 border-t-2 border-b-2 border-indigo-400 rounded-r-sm" style={{ height: size * 48 + (size - 1) * 8 }} />
            </View>
        </View>
    );
}
