import MatrixDisplay from '@/components/MatrixDisplay';
import { det3x3, generateRandomMatrix } from '@/utils/determinant';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { ArrowLeft, CheckCircle, Clock, RotateCcw, XCircle } from 'lucide-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TIMER_SECONDS = 180;
const WARNING_THRESHOLD = 10;

export default function Quiz3x3() {
    const router = useRouter();
    const [matrix, setMatrix] = useState<number[][]>([]);
    const [answer, setAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
    const [isRunning, setIsRunning] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [warningPlayed, setWarningPlayed] = useState(false);
    const soundRef = useRef<Audio.Sound | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startQuiz = useCallback(() => {
        const mat = generateRandomMatrix(3, -10, 10);
        setMatrix(mat);
        setCorrectAnswer(det3x3(mat));
        setAnswer('');
        setTimeLeft(TIMER_SECONDS);
        setIsSubmitted(false);
        setIsCorrect(false);
        setIsRunning(true);
        setWarningPlayed(false);
    }, []);

    useEffect(() => {
        startQuiz();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        if (isRunning && !isSubmitted) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        handleTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRunning, isSubmitted]);

    useEffect(() => {
        if (timeLeft <= WARNING_THRESHOLD && timeLeft > 0 && isRunning && !warningPlayed) {
            playWarningSound();
            setWarningPlayed(true);
        }
    }, [timeLeft, isRunning, warningPlayed]);

    const playWarningSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('@/assets/sounds/warning.mp3'),
                { shouldPlay: true, isLooping: true }
            );
            soundRef.current = sound;
        } catch (e) {
            console.log('Sound not available:', e);
        }
    };

    const stopSound = async () => {
        if (soundRef.current) {
            try {
                await soundRef.current.stopAsync();
                await soundRef.current.unloadAsync();
                soundRef.current = null;
            } catch (e) {
                // ignore
            }
        }
    };

    const handleTimeUp = () => {
        Keyboard.dismiss();
        stopSound();
        setIsSubmitted(true);
        const userAnswer = parseFloat(answer) || 0;
        setIsCorrect(userAnswer === correctAnswer);
    };

    const handleSubmit = () => {
        Keyboard.dismiss();
        stopSound();
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRunning(false);
        setIsSubmitted(true);
        const userAnswer = parseFloat(answer) || 0;
        setIsCorrect(userAnswer === correctAnswer);
    };

    const handleRetry = () => {
        stopSound();
        startQuiz();
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const timerColor =
        timeLeft <= WARNING_THRESHOLD
            ? 'text-red-400'
            : timeLeft <= 30
                ? 'text-amber-400'
                : 'text-emerald-400';

    return (
        <SafeAreaView className="flex-1 bg-surface-dark">
            <View className="flex-1 px-5 pt-4">
                {/* Header */}
                <View className="flex-row items-center justify-between mb-6">
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            onPress={() => { stopSound(); router.back(); }}
                            className="w-10 h-10 rounded-xl bg-surface-card border border-rose-500/20 items-center justify-center mr-3"
                        >
                            <ArrowLeft size={20} color="#fb7185" />
                        </TouchableOpacity>
                        <Text className="text-xl font-extrabold text-white">Kuis 3×3</Text>
                    </View>

                    {/* Timer */}
                    <View className="flex-row items-center bg-surface-card border border-slate-600/30 rounded-2xl px-4 py-2">
                        <Clock size={16} color={timeLeft <= WARNING_THRESHOLD ? '#f87171' : '#6ee7b7'} />
                        <Text className={`${timerColor} font-extrabold text-lg ml-2`}>
                            {formatTime(timeLeft)}
                        </Text>
                    </View>
                </View>

                {/* Timer warning bar */}
                {timeLeft <= WARNING_THRESHOLD && isRunning && (
                    <View className="bg-red-600/10 border border-red-500/20 rounded-2xl p-3 mb-4">
                        <Text className="text-red-300 text-center text-sm font-bold">
                            ⚠️ Waktu hampir habis!
                        </Text>
                    </View>
                )}

                {/* Matrix Display */}
                {matrix.length > 0 && !isSubmitted && (
                    <View className="bg-surface-card border border-rose-500/15 rounded-3xl p-5 mb-5">
                        <Text className="text-rose-300 font-bold text-base mb-2 text-center">
                            Hitung Determinan Matriks Berikut:
                        </Text>
                        <MatrixDisplay matrix={matrix} size={3} />

                        <View className="mt-4">
                            <Text className="text-slate-400 text-sm mb-2 font-semibold">Jawabanmu:</Text>
                            <TextInput
                                className="bg-surface-elevated border border-indigo-500/30 rounded-2xl px-5 py-4 text-white text-xl font-bold text-center"
                                keyboardType="numeric"
                                value={answer}
                                onChangeText={setAnswer}
                                placeholder="Masukkan jawaban..."
                                placeholderTextColor="#6366f180"
                            />
                        </View>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            activeOpacity={0.8}
                            className="mt-4"
                        >
                            <View className="bg-rose-600 rounded-2xl py-4 items-center">
                                <Text className="text-white font-bold text-base">Submit Jawaban</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Result */}
                {isSubmitted && (
                    <View className={`bg-surface-card border rounded-3xl p-6 mb-5 ${isCorrect ? 'border-emerald-500/20' : 'border-red-500/20'
                        }`}>
                        <View className="items-center mb-4">
                            {isCorrect ? (
                                <>
                                    <CheckCircle size={56} color="#6ee7b7" />
                                    <Text className="text-emerald-300 text-2xl font-extrabold mt-3">Benar! 🎉</Text>
                                    <Text className="text-slate-400 text-sm mt-1">Jawaban kamu tepat!</Text>
                                </>
                            ) : (
                                <>
                                    <XCircle size={56} color="#f87171" />
                                    <Text className="text-red-300 text-2xl font-extrabold mt-3">Salah 😔</Text>
                                    <Text className="text-slate-400 text-sm mt-1">Jangan menyerah, coba lagi!</Text>
                                </>
                            )}
                        </View>

                        <View className="bg-surface-elevated rounded-2xl p-4 mb-4">
                            <View className="flex-row justify-between mb-2">
                                <Text className="text-slate-400 text-sm">Jawabanmu:</Text>
                                <Text className={`font-bold text-sm ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                                    {answer || '(tidak dijawab)'}
                                </Text>
                            </View>
                            <View className="flex-row justify-between">
                                <Text className="text-slate-400 text-sm">Jawaban benar:</Text>
                                <Text className="text-emerald-300 font-bold text-sm">{correctAnswer}</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={handleRetry}
                            activeOpacity={0.8}
                        >
                            <View className="bg-indigo-600 rounded-2xl py-4 flex-row items-center justify-center">
                                <RotateCcw size={20} color="#ffffff" />
                                <Text className="text-white font-bold ml-2 text-base">Coba Lagi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}
