import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BookOpen, Calculator, Target } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const TAB_ICONS: Record<string, any> = {
    materi: BookOpen,
    kalkulator: Calculator,
    kuis: Target,
};

const TAB_LABELS: Record<string, string> = {
    materi: 'Materi',
    kalkulator: 'Kalkulator',
    kuis: 'Kuis',
};

export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    return (
        <View
            className="absolute bottom-6 left-5 right-5"
            style={{
                shadowColor: '#6366f1',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
                elevation: 20,
            }}
        >
            <View className="flex-row bg-surface-card/95 rounded-3xl py-3 px-2 border border-indigo-500/20">
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const routeName = route.name.replace(/\/index$/, '').replace(/\(tabs\)\//, '');
                    const Icon = TAB_ICONS[routeName] || BookOpen;
                    const label = TAB_LABELS[routeName] || routeName;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            className={`flex-1 items-center justify-center py-2 mx-1 rounded-2xl ${isFocused ? 'bg-indigo-600/30' : ''
                                }`}
                            activeOpacity={0.7}
                        >
                            <Icon
                                size={24}
                                color={isFocused ? '#818cf8' : '#64748b'}
                                strokeWidth={isFocused ? 2.5 : 1.8}
                            />
                            <Text
                                className={`text-xs mt-1 font-semibold ${isFocused ? 'text-indigo-300' : 'text-slate-500'
                                    }`}
                            >
                                {label}
                            </Text>
                            {isFocused && (
                                <View className="w-1 h-1 rounded-full bg-indigo-400 mt-1" />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
