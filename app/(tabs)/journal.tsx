import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export default function ReflectionDashboard() {
  return (
    <SafeAreaView className="flex-1 bg-reflection-bg-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-4 pb-4 bg-reflection-bg-light/90 dark:bg-background-dark/90 backdrop-blur-md z-20 sticky top-0">
        <View className="flex-row items-center gap-3">
          <Text className="text-xl font-semibold tracking-tight text-reflection-text-main dark:text-white">Your Reflection</Text>
        </View>
        <TouchableOpacity className="p-2 rounded-full hover:bg-reflection-surface-light dark:hover:bg-surface-dark">
          <MaterialIcons name="settings" size={24} className="text-reflection-primary" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Welcome/Intro */}
        <View className="mt-4 mb-8">
          <Text className="text-2xl font-bold text-reflection-text-main dark:text-white mb-2">Hello, Alex</Text>
          <Text className="text-reflection-text-light dark:text-slate-400 leading-relaxed text-sm">
            Take a moment to see how your journey of support and connection has unfolded this week.
          </Text>
        </View>

        {/* Mood Trend Section */}
        <View className="mb-10">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-reflection-text-main dark:text-white">Emotional Rhythm</Text>
            <View className="bg-reflection-primary/10 px-3 py-1 rounded-full">
                <Text className="text-xs font-medium text-reflection-primary">Weekly View</Text>
            </View>
          </View>
          <View className="bg-reflection-surface-light dark:bg-surface-dark rounded-xl p-6 relative overflow-hidden h-48 flex justify-end">
            {/* Abstract Wavy Background */}
            <View className="absolute inset-0 opacity-10 pointer-events-none">
               <Svg height="100%" width="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                 <Path d="M0,100 C150,200 250,0 400,100 L400,200 L0,200 Z" fill="#5D8AA8" />
               </Svg>
            </View>

            {/* Main Wavy Line Graph */}
            <View className="absolute inset-0 p-4 w-full h-full">
               <Svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <Line x1="0" y1="30" x2="300" y2="30" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                  <Line x1="0" y1="75" x2="300" y2="75" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                  <Line x1="0" y1="120" x2="300" y2="120" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />

                  {/* The Wavy Trend Line */}
                  <Path d="M0,100 C50,80 80,120 120,60 C160,0 200,90 250,70 C280,58 300,50 300,50" fill="none" stroke="#5D8AA8" strokeWidth="3" strokeLinecap="round" />

                  {/* Data Points */}
                  <Circle cx="0" cy="100" r="3" fill="#5D8AA8" />
                  <Circle cx="120" cy="60" r="3" fill="#5D8AA8" />
                  <Circle cx="250" cy="70" r="3" fill="#5D8AA8" />
                  <Circle cx="300" cy="50" r="4" fill="#5D8AA8" stroke="white" strokeWidth="2" />
               </Svg>
            </View>

            <View className="w-full flex-row justify-between pt-2 px-1 z-10">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <Text key={day} className="text-[10px] text-reflection-text-light dark:text-slate-500">{day}</Text>
              ))}
            </View>
          </View>
          <Text className="mt-3 text-sm text-reflection-text-light dark:text-slate-400">
            Your week felt generally calm with moments of deeper reflection mid-week.
          </Text>
        </View>

        {/* Highlights / Summaries */}
        <View className="mb-10">
          <Text className="text-lg font-semibold text-reflection-text-main dark:text-white mb-4">Weekly Highlights</Text>
          <View className="flex-row gap-4 mb-4">
            {/* Card 1 */}
            <View className="flex-1 bg-[#E8F1F5] dark:bg-slate-800 rounded-xl p-5 h-40 justify-between">
              <View className="mb-2">
                <MaterialIcons name="volunteer-activism" size={32} className="text-reflection-primary" />
              </View>
              <View>
                <Text className="text-2xl font-bold text-reflection-text-main dark:text-white mb-1">5</Text>
                <Text className="text-sm text-reflection-text-main dark:text-slate-300 font-medium leading-tight">Moments of Support Shared</Text>
              </View>
            </View>
            {/* Card 2 */}
            <View className="flex-1 bg-[#F5F2EB] dark:bg-stone-800 rounded-xl p-5 h-40 justify-between">
              <View className="mb-2">
                <MaterialIcons name="self-improvement" size={32} className="text-orange-400 dark:text-orange-300" />
              </View>
              <View>
                <Text className="text-2xl font-bold text-reflection-text-main dark:text-white mb-1">3</Text>
                <Text className="text-sm text-reflection-text-main dark:text-slate-300 font-medium leading-tight">Mindful Pauses Taken</Text>
              </View>
            </View>
          </View>

          {/* Full width encouragement card */}
          <View className="bg-reflection-surface-light dark:bg-surface-dark rounded-xl p-6 flex-row items-start gap-4">
            <View className="bg-reflection-primary/10 rounded-full p-2 shrink-0">
              <MaterialIcons name="groups" size={24} className="text-reflection-primary" />
            </View>
            <View className="flex-1">
              <Text className="font-medium text-reflection-text-main dark:text-white mb-1">Community Pillar</Text>
              <Text className="text-sm text-reflection-text-light dark:text-slate-400 leading-relaxed">
                You&apos;ve been a pillar of support for others this week. Thank you for helping build a safe space.
              </Text>
            </View>
          </View>
        </View>

        {/* Insights */}
        <View>
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-semibold text-reflection-text-main dark:text-white">Deeper Insights</Text>
            <TouchableOpacity>
                <Text className="text-reflection-primary text-sm font-medium">View All</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-3">
            <TouchableOpacity className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl p-4 flex-row items-center gap-4 shadow-sm">
              <View className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/30 items-center justify-center shrink-0">
                <MaterialIcons name="water-drop" size={24} className="text-blue-400" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-reflection-text-main dark:text-white">Calmness Pattern</Text>
                <Text className="text-xs text-reflection-text-light dark:text-slate-400 mt-1">You tend to feel most calm in the early mornings.</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} className="text-gray-300" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl p-4 flex-row items-center gap-4 shadow-sm">
              <View className="h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/30 items-center justify-center shrink-0">
                <MaterialIcons name="psychology" size={24} className="text-purple-400" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-reflection-text-main dark:text-white">Reflection Topics</Text>
                <Text className="text-xs text-reflection-text-light dark:text-slate-400 mt-1">Gratitude was a recurring theme in your notes.</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} className="text-gray-300" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
